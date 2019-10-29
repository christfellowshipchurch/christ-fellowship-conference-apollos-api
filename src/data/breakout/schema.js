import { gql } from 'apollo-server'

export default gql`
    extend type Query {
        getBreakoutCategories: DefinedValueList
        getBreakoutSessions: [BreakoutSession]
        getBreakoutSessionsByCategory(category: String!): [BreakoutSession]
    }

    type BreakoutSession implements Node {
        id: ID!
        title: String
        description: String
        parent: DefinedValue
        tag: String
    }
`