"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataConnectorRock = require("@apollosproject/data-connector-rock");

var _config = _interopRequireDefault(require("@apollosproject/config"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  ROCK_MAPPINGS
} = _config.default;

class WebsitePagesContentItem extends _dataConnectorRock.ContentItem.dataSource {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "normalizeSlug", slug => (0, _lodash.toLower)(slug).replace(/\s/g, ''));

    _defineProperty(this, "getContentChannelIdByTitle", title => this.request('ContentChannelItemSlugs').filter(`Slug eq '${this.normalizeSlug(title)}'`).select('ContentChannelItemId, Slug').first());

    _defineProperty(this, "getWebsitePageContentByTitle", async (website, title) => {
      // query ContentChannelItemSlugs by the title passed in
      // select the ContentChannelItemId
      // const contentChannelItemIds = await this
      //     .request('ContentChannelItemSlugs')
      //     .filter(`Slug eq '${normalizeWebPageTitle(title)}'`)
      //     .select('ContentChannelItemId, Slug')
      //     .get();
      const contentChannelIdBySlug = await this.getContentChannelIdByTitle(title); // Get the Content Channels for the specified Website

      const websiteContentChannelIds = (0, _lodash.get)(ROCK_MAPPINGS, `WEBSITE_CONTENT_CHANNEL_IDS.${website}`, null);

      if (websiteContentChannelIds && contentChannelIdBySlug) {
        // query ContentChannelItems by ContentChannelId and ContentChannelItemId
        // return the first result (we only want 1 item to be passed back since page title to page should be a 1-1 relationship)
        // const { contentChannelItemId } = first(contentChannelItemIds)
        const {
          contentChannelItemId
        } = contentChannelIdBySlug;
        return await this.request().filter(`(${[...websiteContentChannelIds].map(channelId => `(ContentChannelId eq ${channelId})`).join(' or ')}) and (Id eq ${contentChannelItemId})`).first();
      }

      return null;
    });
  }

}

exports.default = WebsitePagesContentItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL3dlYnNpdGUtcGFnZXMtY29udGVudC1pdGVtL2RhdGEtc291cmNlLmpzIl0sIm5hbWVzIjpbIlJPQ0tfTUFQUElOR1MiLCJBcG9sbG9zQ29uZmlnIiwiV2Vic2l0ZVBhZ2VzQ29udGVudEl0ZW0iLCJDb250ZW50SXRlbSIsImRhdGFTb3VyY2UiLCJzbHVnIiwicmVwbGFjZSIsInRpdGxlIiwicmVxdWVzdCIsImZpbHRlciIsIm5vcm1hbGl6ZVNsdWciLCJzZWxlY3QiLCJmaXJzdCIsIndlYnNpdGUiLCJjb250ZW50Q2hhbm5lbElkQnlTbHVnIiwiZ2V0Q29udGVudENoYW5uZWxJZEJ5VGl0bGUiLCJ3ZWJzaXRlQ29udGVudENoYW5uZWxJZHMiLCJjb250ZW50Q2hhbm5lbEl0ZW1JZCIsIm1hcCIsImNoYW5uZWxJZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBSUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQW9CQyxlQUExQjs7QUFFZSxNQUFNQyx1QkFBTixTQUFzQ0MsK0JBQVlDLFVBQWxELENBQTZEO0FBQUE7QUFBQTs7QUFBQSwyQ0FDdkRDLElBQUQsSUFBVSxxQkFBUUEsSUFBUixFQUFjQyxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLENBRDhDOztBQUFBLHdEQUsxQ0MsS0FBRCxJQUFXLEtBQ25DQyxPQURtQyxDQUMzQix5QkFEMkIsRUFFbkNDLE1BRm1DLENBRTNCLFlBQVcsS0FBS0MsYUFBTCxDQUFtQkgsS0FBbkIsQ0FBMEIsR0FGVixFQUduQ0ksTUFIbUMsQ0FHNUIsNEJBSDRCLEVBSW5DQyxLQUptQyxFQUxnQzs7QUFBQSwwREFXekMsT0FBT0MsT0FBUCxFQUFnQk4sS0FBaEIsS0FBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxZQUFNTyxzQkFBc0IsR0FBRyxNQUFNLEtBQUtDLDBCQUFMLENBQWdDUixLQUFoQyxDQUFyQyxDQVRxRCxDQVdyRDs7QUFDQSxZQUFNUyx3QkFBd0IsR0FBRyxpQkFDN0JoQixhQUQ2QixFQUU1QiwrQkFBOEJhLE9BQVEsRUFGVixFQUc3QixJQUg2QixDQUFqQzs7QUFLQSxVQUFJRyx3QkFBd0IsSUFBSUYsc0JBQWhDLEVBQXdEO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRUcsVUFBQUE7QUFBRixZQUEyQkgsc0JBQWpDO0FBQ0EsZUFBTyxNQUFNLEtBQUtOLE9BQUwsR0FDUkMsTUFEUSxDQUVKLElBQUcsQ0FBQyxHQUFHTyx3QkFBSixFQUE4QkUsR0FBOUIsQ0FDQ0MsU0FBRCxJQUFnQix3QkFBdUJBLFNBQVUsR0FEakQsRUFFRkMsSUFGRSxDQUVHLE1BRkgsQ0FFVyxnQkFBZUgsb0JBQXFCLEdBSjlDLEVBTVJMLEtBTlEsRUFBYjtBQU9IOztBQUVELGFBQU8sSUFBUDtBQUNILEtBM0N1RTtBQUFBOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudEl0ZW0sIENvbnRlbnRDaGFubmVsIH0gZnJvbSAnQGFwb2xsb3Nwcm9qZWN0L2RhdGEtY29ubmVjdG9yLXJvY2snO1xuaW1wb3J0IEFwb2xsb3NDb25maWcgZnJvbSAnQGFwb2xsb3Nwcm9qZWN0L2NvbmZpZyc7XG5pbXBvcnQge1xuICAgIGdldCwgdG9Mb3dlciwgaXNFbXB0eVxufSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB7IFJPQ0tfTUFQUElOR1MgfSA9IEFwb2xsb3NDb25maWc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYnNpdGVQYWdlc0NvbnRlbnRJdGVtIGV4dGVuZHMgQ29udGVudEl0ZW0uZGF0YVNvdXJjZSB7XG4gICAgbm9ybWFsaXplU2x1ZyA9IChzbHVnKSA9PiB0b0xvd2VyKHNsdWcpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG5cbiAgICAvLyBxdWVyeSBDb250ZW50Q2hhbm5lbEl0ZW1TbHVncyBieSB0aGUgdGl0bGUgcGFzc2VkIGluXG4gICAgLy8gc2VsZWN0IHRoZSBmaXJzdCBDb250ZW50Q2hhbm5lbEl0ZW1JZFxuICAgIGdldENvbnRlbnRDaGFubmVsSWRCeVRpdGxlID0gKHRpdGxlKSA9PiB0aGlzXG4gICAgICAgIC5yZXF1ZXN0KCdDb250ZW50Q2hhbm5lbEl0ZW1TbHVncycpXG4gICAgICAgIC5maWx0ZXIoYFNsdWcgZXEgJyR7dGhpcy5ub3JtYWxpemVTbHVnKHRpdGxlKX0nYClcbiAgICAgICAgLnNlbGVjdCgnQ29udGVudENoYW5uZWxJdGVtSWQsIFNsdWcnKVxuICAgICAgICAuZmlyc3QoKTtcblxuICAgIGdldFdlYnNpdGVQYWdlQ29udGVudEJ5VGl0bGUgPSBhc3luYyAod2Vic2l0ZSwgdGl0bGUpID0+IHtcbiAgICAgICAgLy8gcXVlcnkgQ29udGVudENoYW5uZWxJdGVtU2x1Z3MgYnkgdGhlIHRpdGxlIHBhc3NlZCBpblxuICAgICAgICAvLyBzZWxlY3QgdGhlIENvbnRlbnRDaGFubmVsSXRlbUlkXG4gICAgICAgIC8vIGNvbnN0IGNvbnRlbnRDaGFubmVsSXRlbUlkcyA9IGF3YWl0IHRoaXNcbiAgICAgICAgLy8gICAgIC5yZXF1ZXN0KCdDb250ZW50Q2hhbm5lbEl0ZW1TbHVncycpXG4gICAgICAgIC8vICAgICAuZmlsdGVyKGBTbHVnIGVxICcke25vcm1hbGl6ZVdlYlBhZ2VUaXRsZSh0aXRsZSl9J2ApXG4gICAgICAgIC8vICAgICAuc2VsZWN0KCdDb250ZW50Q2hhbm5lbEl0ZW1JZCwgU2x1ZycpXG4gICAgICAgIC8vICAgICAuZ2V0KCk7XG5cbiAgICAgICAgY29uc3QgY29udGVudENoYW5uZWxJZEJ5U2x1ZyA9IGF3YWl0IHRoaXMuZ2V0Q29udGVudENoYW5uZWxJZEJ5VGl0bGUodGl0bGUpXG5cbiAgICAgICAgLy8gR2V0IHRoZSBDb250ZW50IENoYW5uZWxzIGZvciB0aGUgc3BlY2lmaWVkIFdlYnNpdGVcbiAgICAgICAgY29uc3Qgd2Vic2l0ZUNvbnRlbnRDaGFubmVsSWRzID0gZ2V0KFxuICAgICAgICAgICAgUk9DS19NQVBQSU5HUyxcbiAgICAgICAgICAgIGBXRUJTSVRFX0NPTlRFTlRfQ0hBTk5FTF9JRFMuJHt3ZWJzaXRlfWAsXG4gICAgICAgICAgICBudWxsKTtcblxuICAgICAgICBpZiAod2Vic2l0ZUNvbnRlbnRDaGFubmVsSWRzICYmIGNvbnRlbnRDaGFubmVsSWRCeVNsdWcpIHtcbiAgICAgICAgICAgIC8vIHF1ZXJ5IENvbnRlbnRDaGFubmVsSXRlbXMgYnkgQ29udGVudENoYW5uZWxJZCBhbmQgQ29udGVudENoYW5uZWxJdGVtSWRcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgcmVzdWx0ICh3ZSBvbmx5IHdhbnQgMSBpdGVtIHRvIGJlIHBhc3NlZCBiYWNrIHNpbmNlIHBhZ2UgdGl0bGUgdG8gcGFnZSBzaG91bGQgYmUgYSAxLTEgcmVsYXRpb25zaGlwKVxuICAgICAgICAgICAgLy8gY29uc3QgeyBjb250ZW50Q2hhbm5lbEl0ZW1JZCB9ID0gZmlyc3QoY29udGVudENoYW5uZWxJdGVtSWRzKVxuICAgICAgICAgICAgY29uc3QgeyBjb250ZW50Q2hhbm5lbEl0ZW1JZCB9ID0gY29udGVudENoYW5uZWxJZEJ5U2x1Z1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCgpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgYCgke1suLi53ZWJzaXRlQ29udGVudENoYW5uZWxJZHNdLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFubmVsSWQpID0+IGAoQ29udGVudENoYW5uZWxJZCBlcSAke2NoYW5uZWxJZH0pYFxuICAgICAgICAgICAgICAgICAgICApLmpvaW4oJyBvciAnKX0pIGFuZCAoSWQgZXEgJHtjb250ZW50Q2hhbm5lbEl0ZW1JZH0pYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmlyc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXX0=