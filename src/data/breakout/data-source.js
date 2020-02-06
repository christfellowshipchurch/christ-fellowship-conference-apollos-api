import RockApolloDataSource from '@apollosproject/rock-apollo-data-source'
import ApollosConfig from '@apollosproject/config'
import {
    get,
    head,
    filter,
    kebabCase,
    flatten,
    groupBy,
    includes,
    orderBy
} from 'lodash'

const { ROCK_MAPPINGS } = ApollosConfig;
export default class Breakout extends RockApolloDataSource {
    expanded = true

    getFromId = (id) =>
        this.request('DefinedValues')
            .find(id)
            .andFilter(`DefinedTypeId eq ${get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.SESSIONS', '')}`)
            .get()

    getAllSessions = async () => {
        const sessions = await this.context.dataSources.DefinedValueList.getByIdentifier(
            get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.SESSIONS', '')
        )

        return get(sessions, 'definedValues', []).map(async (n, i) => {
            const parent = await this.context.dataSources.DefinedValue.getByIdentifier(
                get(n, 'attributeValues.ministryArea.value', '')
            )

            const tag = await this.context.dataSources.DefinedValue.getByIdentifier(
                get(n, 'attributeValues.topicIdentifier.value', '')
            )

            return {
                title: get(n, 'value', ''),
                description: get(n, 'description', ''),
                tag: get(tag, 'value', null),
                parent,
            }
        })
    }

    getSessionsByCategory = async ({ category }) => {
        const { definedValues: breakoutCategories } = await this.context.dataSources.DefinedValueList.getByIdentifier(
            get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.CATEGORIES', '')
        )
        const filteredBreakoutCategories = filter(
            breakoutCategories,
            (n) => kebabCase(n.value) === kebabCase(category)
        )
        const { guid: categoryGuid } = head(filteredBreakoutCategories)
        const sessions = await this.context.dataSources.DefinedValueList.getByIdentifier(
            get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.SESSIONS', '')
        )
        const sessionsByGuid = get(sessions, 'definedValues', []).filter(
            n => get(n, 'attributeValues.ministryArea.value', '') === categoryGuid
        )

        return sessionsByGuid.map(async (n, i) => {
            const parent = await this.context.dataSources.DefinedValue.getByIdentifier(
                get(n, 'attributeValues.ministryArea.value', '')
            )

            const tag = await this.context.dataSources.DefinedValue.getByIdentifier(
                get(n, 'attributeValues.topicIdentifier.value', '')
            )

            return {
                id: get(n, 'id', ''),
                title: get(n, 'value', ''),
                description: get(n, 'description', ''),
                tag: get(tag, 'value', null),
                parent,
            }
        })
    }

    getByFilters = async ({ categories: inputCategories = [], times: inputTimes = [] }) => {
        const DV_CATEGORY_ID = get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.CATEGORIES', '')
        const DV_TIMES_ID = get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.TIMES', '')
        const DV_SESSIONS_ID = get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.SESSIONS', '')
        const DV_SPX_ID = get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.SPX', '')

        const categories = filter(inputCategories, category => category && category !== '')
        const times = filter(inputTimes, time => time && time !== '')
        const isSPX = await this.context.dataSources.Auth.isSPX()

        const filterDefinedValues = await Promise.all([
            this.request('DefinedValues')
                .filterOneOf(categories.map(category => `Value eq '${category}'`))
                .andFilter(`DefinedTypeId eq ${DV_CATEGORY_ID}`)
                .get(),
            this.request('DefinedValues')
                .filterOneOf(times.map(time => `Value eq '${time}'`))
                .andFilter(`DefinedTypeId eq ${DV_TIMES_ID}`)
                .get()
        ])
        const groupedById = groupBy(flatten(filterDefinedValues), "definedTypeId")
        let sessions = []
        // We filter by categories first since every session can only have 1 category
        // This is a specific limitation of the way Rock stores Attribute Values
        //
        // Attribute Values are stored as comma separated Guids when the Entity is
        // a defined type. We can't run a 'contains' or 'like' filter on the GetByAttributeValue
        // endpoint, so this endpoint will only work if the EXACT value is a single GUID
        //
        // Since each Breakout Session only has one single Category, we can use this endpoint
        // for this one only
        if (categories.length) {
            const sessionsByCategory = await Promise.all(
                get(groupedById, `[${DV_CATEGORY_ID}]`, []).map(({ guid }) => {
                    const categoryAttributeKey = "MinistryArea"
                    const args = `attributeKey=${categoryAttributeKey}&value=${guid}&caseSensitive=false`

                    const sessionsRequest = this.request(`DefinedValues/GetByAttributeValue?${args}`)
                        .filter(`DefinedTypeId eq ${DV_SESSIONS_ID}`)

                    // Add SPX Defined Type Id to query if SPX user
                    if (isSPX) {
                        sessionsRequest.orFilter(`DefinedTypeId eq ${DV_SPX_ID}`)
                    }

                    return sessionsRequest.get()
                })
            )
            sessions = flatten(sessionsByCategory)
        } else {
            const sessionsRequest = this.request('DefinedValues').filter(`DefinedTypeId eq ${DV_SESSIONS_ID}`)

            // Add SPX Defined Type Id to query if SPX user
            if (isSPX) {
                sessionsRequest.orFilter(`DefinedTypeId eq ${DV_SPX_ID}`)
            }
            sessions = await sessionsRequest.get()
        }

        if (times.length) {
            sessions = filter(
                sessions,
                ({ attributeValues }) => {
                    const attributeValueGuids = get(attributeValues, 'breakoutSessions.value', '').split(',')
                    const allGuids = [
                        ...attributeValueGuids,
                        ...get(groupedById, `[${DV_TIMES_ID}]`, []).map(({ guid }) => guid)
                    ]
                    const commonGuids = filter(allGuids, (val, i, iteratee) => includes(iteratee, val, i + 1))

                    return commonGuids.length > 0
                }
            )
        }

        return orderBy(sessions, 'definedTypeId', 'desc')
    }

    forCurrentUser = async () => {
        if (await this.context.dataSources.Auth.isSPX()) {
            const DV_SPX_ID = get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.SPX', '')
            return this.request('DefinedValues').filter(`DefinedTypeId eq ${DV_SPX_ID}`).get()
        }

        const { dataSources } = this.context
        const { id } = await dataSources.Auth.getCurrentPerson()
        // Get the active groups that the person is a member of.
        // Conditionally filter that list of groups on whether or not your
        // role in that group is that of "Leader".
        const groupAssociations = await this.request('GroupMembers')
            .expand('GroupRole')
            .filter(`PersonId eq ${id}`)
            .andFilter(`GroupMemberStatus ne 'Inactive'`)
            .andFilter(`GroupRole/GroupTypeId eq ${ROCK_MAPPINGS.BREAKOUT_GROUP_TYPE_ID}`)
            .get();

        const definedValues = await Promise.all(
            groupAssociations.map(async ({ attributeValues }) => {
                const topicGuid = get(attributeValues, 'topic.value')

                if (topicGuid) {
                    const session = get(attributeValues, 'session.value')
                    const definedValue = await dataSources.DefinedValue.getByIdentifier(topicGuid)

                    definedValue.attributeValues.breakoutSessions.value = session

                    return definedValue
                }

                return () => null
            })
        )

        return definedValues
    }
}