import { ContentItem } from '@apollosproject/data-connector-rock';

export default {
  EventTicketContentItem: {
    ...ContentItem.resolver.UniversalContentItem,
    startDateTime: ({ startDateTime, attributeValues }) => startDateTime,

    ticketPrice: ({ attributeValues }) => attributeValues.price.value,
    registration: ({ attributeValues }) => attributeValues.registration.value,
    color: ({ attributeValues }) => attributeValues.color.value,
  },
};
