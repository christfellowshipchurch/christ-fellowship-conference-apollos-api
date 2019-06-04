import {
    createGlobalId,
} from '@apollosproject/server-core';
import {
    get
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
        navigationLinks: ({ attributeValues }) => {
            const callsToAction = get(attributeValues, 'navigationLinks.value', '')

            return parseRockKeyValuePairs(callsToAction, 'call', 'action')
        }
    }
}

export default resolver
