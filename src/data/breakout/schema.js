import { gql } from 'apollo-server'

export default gql`
    enum BREAKOUT_FILTER {
        TIMES,
        CATEGORIES
    }

    extend type Query {
        getBreakoutCategories: DefinedValueList
        getBreakoutSessions: [Breakout]
        getBreakoutSessionsByCategory(category: String!): [Breakout]
        breakoutFilters(filter: BREAKOUT_FILTER!): [BreakoutFilter]
        breakouts(category: String, time: String): [Breakout]
        myBreakouts(category: String, time: String): [Breakout]
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

    type BreakoutFilter implements Node {
        id: ID!
        value: String
        icon: String
        theme: Theme
    }
`