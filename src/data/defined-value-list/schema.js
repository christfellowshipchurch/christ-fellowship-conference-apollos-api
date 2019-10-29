import { gql } from 'apollo-server'

export default gql`
    type DefinedValueList implements Node {
        id: ID!
        values: [DefinedValue]
    }
`;