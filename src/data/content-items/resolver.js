import { ContentItem } from '@apollosproject/data-connector-rock';
import { get } from 'lodash';

export default {
  ...ContentItem.resolver,
  ContentItem: {
    ...ContentItem.resolver.ContentItem,
    __resolveType: async (attrs, ...otherProps) => {
      if (Object.hasOwnProperty.call(attrs.attributeValues, 'price')) {
        return 'EventTicketContentItem';
      }
      if (get(attrs, 'contentChannelTypeId', -1) === 12) {
        return 'ConferenceScheduleContentItem';
      }

      if (Object.hasOwnProperty.call(attrs.attributeValues, 'person')) {
        return 'ConferenceSpeakerContentItem';
      }

      if (
        Object.hasOwnProperty.call(attrs.attributeValues, 'itemContentChannel')
      ) {
        return 'AppNavigationContentItem';
      }

      if (Object.hasOwnProperty.call(attrs, 'groupTypeId')) {
        return 'ConferenceGroupContentItem';
      }

      return ContentItem.resolver.ContentItem.__resolveType(
        attrs,
        ...otherProps
      );
    },
  },
  SharableContentItem: {
    url: ({ url = null }) => url,
    // todo: return a dynamic url that links to the content item
    title: ({ title = null }) => title,
    message: ({ message = null }) => message,
  },
  Query: {
    ...ContentItem.resolver.ContentItem.Query,
    guestSpeakers: (root, args, { dataSources }) =>
      dataSources.ContentItem.paginate({
        cursor: dataSources.ContentItem.byGuestSpeaker(),
        args,
      }),
    scheduleItems: (root, args, { dataSources }) =>
      dataSources.ContentItem.paginate({
        cursor: dataSources.ContentItem.bySchedule(),
        args,
      }),
  },
};
