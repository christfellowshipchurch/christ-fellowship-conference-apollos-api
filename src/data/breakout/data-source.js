import RockApolloDataSource from '@apollosproject/rock-apollo-data-source'
import ApollosConfig from '@apollosproject/config'
import {
    get, head, filter, toUpper, kebabCase
} from 'lodash'

export default class Breakout extends RockApolloDataSource {
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
}