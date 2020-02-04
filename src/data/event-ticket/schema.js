/* eslint-disable camelcase */
import gql from 'graphql-tag';

export default gql`
type EventTicketContentItem implements Node & ContentItem {
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

  startDateTime: String

  ticketPrice: String
  registration: String
  color: String
}
`;

// sharing: SharableContentItem
//   isLiked: Boolean @cacheControl(maxAge: 0)
//   likedCount: Int @cacheControl(maxAge: 0)