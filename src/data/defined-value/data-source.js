import RockApolloDataSource from '@apollosproject/rock-apollo-data-source';
import { getIdentifierType } from '../utils'

export default class DefinedValue extends RockApolloDataSource {
    resource = 'DefinedValues'
    expanded = true

    // OBSOLETE : please use getByIdentifier
    getDefinedValueByIdentifier = (id) => {
        return this.getByIdentifier(id)
    }

    getByIdentifier = (id) => {
        if (!id || id === '') return null

        const type = getIdentifierType(id)

        return type.query
            ? this.request().filter(type.query).first()
            : null
    }
};