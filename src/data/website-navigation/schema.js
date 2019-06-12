import { gql } from 'apollo-server';

export default gql`
    extend type Query {
        getWebsiteNavigation(website: String!): WebsiteNavigation
    }

    type WebsiteNavigation implements Node {
        id: ID!
        navigationLinks: [CallToAction]
        quickAction: CallToAction
        images: [ImageMedia]
        instagramUrl: String
        twitterUrl: String
        facebookUrl: String
        footerLinks: [CallToAction]
    } 
`;