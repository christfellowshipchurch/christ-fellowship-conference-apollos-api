import { createGlobalId } from '@apollosproject/server-core'
import ApollosConfig from '@apollosproject/config'
import { get } from 'lodash'
import sanitizeHtml from 'sanitize-html'

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
    },
    BreakoutSession: {
        id: ({ id }, args, context, { parentType }) =>
            createGlobalId(id, parentType.name),
        title: ({ title }) => title,
        description: ({ description }) =>
            sanitizeHtml(description, {
                allowedTags: [],
            }),
        tag: ({ tag }) => tag,
        parent: ({ parent }) => parent
    }
}

export default resolver
