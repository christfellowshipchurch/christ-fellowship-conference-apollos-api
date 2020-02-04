import { gql } from 'apollo-server';

export default gql`
  type ConferenceScheduleContentItem implements Node & ContentItem {
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

    headerColor: Color
    customItem: String
    itemStartTime: String

    conferenceGroups: [ConferenceGroupContentItem]
  }
`;

// sharing: SharableContentItem
//     isLiked: Boolean @cacheControl(maxAge: 0)
//     likedCount: Int @cacheControl(maxAge: 0)