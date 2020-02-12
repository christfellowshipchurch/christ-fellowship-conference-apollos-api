import { createGlobalId } from '@apollosproject/server-core'
import ApollosConfig from '@apollosproject/config'
import { get, sortBy, split, filter as lodashFilter } from 'lodash'
import sanitizeHtml from 'sanitize-html'

import { resolver as definedValueResolver } from '../defined-value'

const resolver = {
    Query: {
        getBreakoutCategories: (root, args, { dataSources }) =>
            dataSources.DefinedValueList.getByIdentifier(
                get(ApollosConfig, 'ROCK_MAPPINGS.BREAKOUTS.CATEGORIES', '')
            ),
        getBreakoutSessions: (root, args, { dataSources }) =>
            dataSources.Breakout.getAllSessions(),
        getBreakoutSessionsByCategory: (root, { category }, { dataSources }) =>
            dataSources.Breakout.getSessionsByCategory({ category }),
        breakouts: async (root, { category, time }, { dataSources }) => {
            const sessions = await dataSources.Breakout.getByFilters({
                categories: [category],
                times: [time],
            })

            return sessions
        },
        myBreakouts: async (root, args, { dataSources }, { cacheControl }) => {
            cacheControl.setCacheHint({ maxAge: 0 })
            return dataSources.Breakout.forCurrentUser()
        },
        breakoutSignUpUrl: () => "https://rock.christfellowshipconference.com/2020breakouts"
    },
    Breakout: {
        id: ({ id }, args, context, { parentType }) =>
            createGlobalId(id, parentType.name),
        title: ({ title, value }) => title || value,
        description: ({ description }) =>
            sanitizeHtml(description, {
                allowedTags: [],
            }),
        htmlContent: ({ description }) =>
            sanitizeHtml(description),
        tag: ({ tag }) => tag,
        parent: ({ parent }) => parent,
        icon: async ({ attributeValues, icon }, args, { dataSources }) => {
            if (!!icon && icon !== "") return icon

            const categoryGuid = get(attributeValues, 'ministryArea.value', '')

            if (categoryGuid !== '') {
                const category = await dataSources.DefinedValue.getByIdentifier(categoryGuid)
                return get(category, 'attributeValues.icon.value', '')
            }

            return {}
        },
        theme: async ({ attributeValues, theme }, args, { dataSources }) => {
            if (theme) return theme
            const categoryGuid = get(attributeValues, 'ministryArea.value', '')

            if (categoryGuid !== '') {
                const defaultColor = '#0F4D81'
                const category = await dataSources.DefinedValue.getByIdentifier(categoryGuid)
                const primary = get(category, 'attributeValues.color.value', defaultColor)

                return {
                    type: "LIGHT",
                    colors: {
                        primary: primary !== "" ? primary : defaultColor
                    }
                }
            }

            return {}
        },
        categories: ({ attributeValues }, args, { dataSources }) => {
            const categoryGuid = get(attributeValues, 'ministryArea.value', '')

            return [dataSources.DefinedValue.getByIdentifier(categoryGuid)]
        },
        times: ({ attributeValues }, args, { dataSources }) => {
            const timeGuids = get(attributeValues, 'breakoutSessions.value', '')

            return split(timeGuids, ',')
                .map(n => dataSources.DefinedValue.getByIdentifier(n))
        },
        summary: async ({ attributeValues }, args, { dataSources }) => {
            const topicIdentifierGuid = get(attributeValues, 'topicIdentifier.value', '')

            if (!!topicIdentifierGuid && topicIdentifierGuid !== '') {
                const definedValue = await dataSources.DefinedValue.getByIdentifier(topicIdentifierGuid)

                return definedValue.value
            }

            return ''
        },
        location: ({ attributeValues }) => get(attributeValues, 'location.value', '')
    },
}

export default resolver
