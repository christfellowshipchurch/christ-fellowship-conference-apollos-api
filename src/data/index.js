import { gql } from 'apollo-server';

import { createApolloServerConfig } from '@apollosproject/server-core';

import * as Analytics from '@apollosproject/data-connector-analytics';
import * as Scripture from '@apollosproject/data-connector-bible';
import * as LiveStream from '@apollosproject/data-connector-church-online';
import * as Cloudinary from '@apollosproject/data-connector-cloudinary';
import * as OneSignal from '@apollosproject/data-connector-onesignal';
import * as Pass from '@apollosproject/data-connector-passes';
import * as Sms from '@apollosproject/data-connector-twilio';
import {
  Followings,
  Interactions,
  RockConstants,
  Person,
  ContentItem,
  ContentChannel,
  Sharable,
  Auth,
  PersonalDevice,
  Template,
  AuthSms,
  Campus,
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

const data = {
  Followings,
  ContentChannel,
  ContentItem,
  Person,
  // Cloudinary,
  Auth,
  AuthSms,
  Sms,
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
  Template,
  Campus,

  // Local Types
  DefinedValue,

  // Local Content Items
  WebsitePagesContentItem,
  WebsiteContentItem,
  WebsiteNavigation
  WebsiteGroupContentItem
};

const {
  dataSources,
  resolvers,
  schema,
  context,
  applyServerMiddleware,
} = createApolloServerConfig(data);

export { dataSources, resolvers, schema, context, applyServerMiddleware };

// the upload Scalar is added
export const testSchema = [
  gql`
    scalar Upload
  `,
  ...schema,
];
