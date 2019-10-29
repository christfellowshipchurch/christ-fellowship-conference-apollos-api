import { createGlobalId } from '@apollosproject/server-core'
import ApollosConfig from '@apollosproject/config'
import {
    get, lowerCase
} from 'lodash'

const resolver = {
    DefinedValueList: {
        id: ({ id }, args, context, { parentType }) =>
            createGlobalId(id, parentType.name),
        values: ({ definedValues }, args, { dataSources }) => definedValues,
    }
}

export default resolver
