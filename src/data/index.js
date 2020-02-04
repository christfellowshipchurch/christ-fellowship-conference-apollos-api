import { gql } from 'apollo-server';

import { createApolloServerConfig } from '@apollosproject/server-core';

import * as Analytics from '@apollosproject/data-connector-analytics';
import * as Scripture from '@apollosproject/data-connector-bible';
import * as LiveStream from '@apollosproject/data-connector-church-online';
import * as Cloudinary from '@apollosproject/data-connector-cloudinary';
import * as OneSignal from '@apollosproject/data-connector-onesignal';
import * as Search from '@apollosproject/data-connector-algolia-search';
import * as Pass from '@apollosproject/data-connector-passes';
import * as Sms from '@apollosproject/data-connector-twilio';
import {
  Followings,
  Interactions,
  RockConstants,
  Sharable,
  PersonalDevice,
  Template,
  AuthSms,
  Campus,
  BinaryFiles,
  Features,
  Events,
  Family,
} from '@apollosproject/data-connector-rock';
import * as Theme from './theme';

// This module is used to attach Rock User updating to the OneSignal module.
// This module includes a Resolver that overides a resolver defined in `OneSignal`
import * as OneSignalWithRock from './oneSignalWithRock';

// Localized Modules
import * as WebsitePagesContentItem from './website-pages-content-item';
import * as WebsiteContentItem from './website-content-item';
import * as WebsiteNavigation from './website-navigation';
import * as WebsiteGroupContentItem from './website-group-content-item';
import * as DefinedValue from './defined-value';
import * as DefinedValueList from './defined-value-list';

import * as Breakout from './breakout';
import * as ContentChannel from './content-channels';
import * as Auth from './extended-auth';
import * as AuthenticatedUser from './authenticated-user';
import * as ContentItem from './content-items';
import * as EventTicketContentItem from './event-ticket';
import * as ConferenceSpeakerContentItem from './conference-speaker';
import * as ConferenceGroupContentItem from './conference-group';
import * as Person from './rock-people';
import * as Group from './rock-groups';
import * as AppNavigationContentItem from './app-navigation';
import * as ConferenceScheduleContentItem from './conference-schedule';

const data = {
  Followings,
  ContentChannel,
  ContentItem,
  Person,
  Cloudinary,
  Auth,
  // AuthSms,
  // Sms,
  LiveStream,
  Theme,
  Scripture,
  Interactions,
  RockConstants,
  Sharable,
  Analytics,
  OneSignal,
  PersonalDevice,
  OneSignalWithRock,
  Pass,
  // Search,
  Template,
  Campus,
  Features,
  Group,
  BinaryFiles,
  Events,

  // Local Types
  DefinedValue,
  DefinedValueList,

  // Local Content Items
  WebsitePagesContentItem,
  WebsiteContentItem,
  WebsiteNavigation,
  WebsiteGroupContentItem,

  // Conference Specific
  Breakout,

  // Family,
  // UniversalContentItem: ContentItem, // alias
  // DevotionalContentItem: ContentItem, // alias
  // ContentSeriesContentItem: ContentItem, // alias
  // MediaContentItem: ContentItem, // alias
  EventTicketContentItem,
  ConferenceSpeakerContentItem,
  ConferenceGroupContentItem,
  AppNavigationContentItem,
  ConferenceScheduleContentItem,
  // AuthenticatedUser,
};

const {
  dataSources,
  resolvers,
  schema,
  context,
  applyServerMiddleware,
  setupJobs,
} = createApolloServerConfig(data);

export {
  dataSources,
  resolvers,
  schema,
  context,
  applyServerMiddleware,
  setupJobs,
};

// the upload Scalar is added
export const testSchema = [
  gql`
    scalar Upload
  `,
  ...schema,
];
