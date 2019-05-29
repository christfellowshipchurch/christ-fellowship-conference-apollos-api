import { contentItemSchema } from '@apollosproject/data-schema';
import { gql } from 'apollo-server';

export default gql`
    type CallToAction {
        call: String
        action: String
    }

    type WebsiteContentItem implements ContentItem & Node {
        id: ID!
        title: String
        coverImage: ImageMedia
        images: [ImageMedia]
        videos: [VideoMedia]
        audios: [AudioMedia]
        htmlContent: String
        summary: String
        childContentItemsConnection(
            first: Int
            after: String
        ): ContentItemsConnection
        siblingContentItemsConnection(
            first: Int
            after: String
        ): ContentItemsConnection
        parentChannel: ContentChannel
        theme: Theme

        contentLayout: String
        imageAlt: String
        imageRatio: String
        callsToAction: [CallToAction]
        target: String
    }
`;