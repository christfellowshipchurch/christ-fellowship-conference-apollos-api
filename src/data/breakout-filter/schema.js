import { gql } from 'apollo-server'

export default gql`
    enum BREAKOUT_FILTER {
        TIMES,
        CATEGORIES
    }

    extend type Query {
        breakoutFilters(filter: BREAKOUT_FILTER!): [BreakoutFilter] @cacheControl(maxAge: 0)
    }

    type BreakoutFilter implements Node {
        id: ID!
        value: String
        icon: String
        theme: Theme
    }
`