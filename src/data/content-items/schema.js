import { contentItemSchema } from '@apollosproject/data-schema';
import { gql } from 'apollo-server';

export default gql`
  ${contentItemSchema}

  extend type Query {
    guestSpeakers(first: Int, after: String): ContentItemsConnection
    scheduleItems(first: Int, after: String): ContentItemsConnection
  }
`;
