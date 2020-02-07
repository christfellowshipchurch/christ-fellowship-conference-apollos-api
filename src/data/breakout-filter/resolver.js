import { createGlobalId } from '@apollosproject/server-core'
import ApollosConfig from '@apollosproject/config'
import { get, sortBy, split, filter as lodashFilter } from 'lodash'
import sanitizeHtml from 'sanitize-html'

import { resolver as definedValueResolver } from '../defined-value'

const resolver = {
    Query: {
        breakoutFilters: async (root, { filter }, { dataSources }, { cacheControl }) => {
            cacheControl.setCacheHint({ maxAge: 0 })
            const isSpx = await dataSources.Auth.isSPX()
            const { definedValues } = await dataSources.DefinedValueList.getByIdentifier(
                get(ApollosConfig, `ROCK_MAPPINGS.BREAKOUTS.${filter}`, '')
            )

            if (isSpx) {
                return sortBy(definedValues, 'order')
            }

            // Filter out Senior Pastor Experience for non-SPX users
            return lodashFilter(sortBy(definedValues, 'order'), n => n.id !== 984)
        },
    },
    BreakoutFilter: {
        ...definedValueResolver.DefinedValue,
        icon: async ({ attributeValues }) =>
            get(attributeValues, 'icon.value', ''),
        theme: async ({ attributeValues }, args, { dataSources }) => {
            const defaultColor = '#0F4D81'
            const primary = get(attributeValues, 'color.value', defaultColor)

            return {
                type: "LIGHT",
                colors: {
                    primary: primary !== "" ? primary : defaultColor
                }
            }
        },
    }
}

export default resolver
