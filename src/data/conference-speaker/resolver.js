import { ContentItem } from '@apollosproject/data-connector-rock';
import { get } from 'lodash';

export default {
  ConferenceSpeakerContentItem: {
    ...ContentItem.resolver.ContentItem,
    htmlContent: async ({ attributeValues }, _, { dataSources }) => {
      const personAlias = get(attributeValues, 'person.value', null);
      if (personAlias) {
        const person = await dataSources.Person.getFromAlias(personAlias);
        const jobTitle = get(person, 'attributeValues.jobTitle.value', '');
        const bio = get(person, 'attributeValues.bio.value', '');

        return `<strong>${jobTitle}</strong><p>${bio}</p>`;
      }
      return '';
    },
    summary: async ({ attributeValues }, _, { dataSources }) => {
      const personAlias = get(attributeValues, 'person.value', null);
      if (personAlias) {
        const person = await dataSources.Person.getFromAlias(personAlias);

        return get(person, 'attributeValues.jobTitle.value', '');
      }
      return '';
    },

    person: ({ attributeValues }, _, { dataSources }) => {
      if (attributeValues.person.value) {
        return dataSources.Person.getFromAlias(attributeValues.person.value);
      }
      return null;
    },

    youTubeId: ({ attributeValues }) =>
      get(attributeValues, 'youTubeId.value', ''),
  },
};
