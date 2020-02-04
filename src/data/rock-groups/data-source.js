import RockApolloDataSource from '@apollosproject/rock-apollo-data-source';
import { Group as coreGroup } from '@apollosproject/data-connector-rock';
import ApollosConfig from '@apollosproject/config';
import { flatten } from 'lodash'

const { ROCK_MAPPINGS } = ApollosConfig;
export default class Group extends coreGroup.dataSource {
  resource = 'Groups';

  expanded = true;

  groupTypeMap = {
    Serving: ROCK_MAPPINGS.SERVING_GROUP_TYPE_ID,
    Community: ROCK_MAPPINGS.COMMUNITY_GROUP_TYPE_ID,
    Family: ROCK_MAPPINGS.FAMILY_GROUP_TYPE_ID,
    Breakout: ROCK_MAPPINGS.BREAKOUT_GROUP_TYPE_ID,
  };

  getFromGuid = (guid) =>
    this.request()
      .filter(`Guid eq (guid'${guid}')`)
      .transform((list) => list[0])
      .get();

  /**
   * TODO : add proper support for checking Int v Guid
   *      : move Int v Guid checking to data-source
   */
  getChildrenFromParentId = (id) =>
    this.request()
      .filter(`ParentGroupId eq ${id} and IsPublic and IsActive`)
      .get();

  getFromId = (id) => {
    if (!id) return false;
    let _id = id
    if (typeof id === 'object') _id = id.id
    const regexNotDigit = /\D/g;
    const idNotNumber = _id.toString().match(regexNotDigit);

    return idNotNumber
      ? this.getFromGuid(_id)
      : this.request()
        .find(_id)
        .get();
  };

  getGroups = () => this.request().get();

  getFromTypeId = (id) => {
    if (!id) return false;
    const regexNotDigit = /\D/g;
    const idNotNumber = id.toString().match(regexNotDigit);

    return idNotNumber
      ? []
      : this.request()
        .filter(`GroupTypeId eq ${id} and IsPublic and IsActive`)
        .get();
  };
}
