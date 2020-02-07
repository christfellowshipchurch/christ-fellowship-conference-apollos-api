import { gql } from 'apollo-server'

export default gql`
    extend type Query {
        getBreakoutCategories: DefinedValueList
        getBreakoutSessions: [Breakout]
        getBreakoutSessionsByCategory(category: String!): [Breakout]
        breakouts(category: String, time: String): [Breakout] @cacheControl(maxAge: 0)
        myBreakouts (category: String, time: String): [Breakout] @cacheControl(maxAge: 0)
        breakoutSignUpUrl: String
    }

    type Breakout implements Node {
        id: ID!
        title: String
        description: String
        htmlContent: String
        parent: DefinedValue
        tag: String
        icon: String
        theme: Theme
        categories: [BreakoutFilter]
        times: [BreakoutFilter]
        summary: String
        location: String
    }
`