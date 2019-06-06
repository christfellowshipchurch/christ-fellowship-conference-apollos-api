import {
    createGlobalId,
} from '@apollosproject/server-core';
import {
    get, first
} from 'lodash'

import { parseRockKeyValuePairs } from '../utils'

const resolver = {
    Query: {
        getWebsiteNavigation: async (root, { website }, context) =>
            await context.dataSources.WebsiteNavigation.getWebsiteNavigation(website),
    },
    WebsiteNavigation: {
        id: ({ id }, args, context, { parentType }) =>
            createGlobalId(id, parentType.name),
        navigationLinks: ({ attributeValues }) => (
            parseRockKeyValuePairs(
                get(attributeValues, 'navigationLinks.value', ''),
                'call',
                'action')
        ),
        quickAction: ({ attributeValues }) => (
            first(parseRockKeyValuePairs(
                get(attributeValues, 'quickAction.value', ''),
                'call',
                'action'))
        ),
        images: (root, args, { dataSources: { ContentItem } }) =>
            ContentItem.getImages(root)
    }
}

export default resolver
