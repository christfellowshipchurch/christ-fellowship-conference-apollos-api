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
        return await this.request().filter(`(${[...websiteContentChannelIds].map(channelId => `(ContentChannelId eq ${channelId})`).join(' or ')}) and (Id eq ${contentChannelItemId})`).first(); // if (websiteContentChannelItems) {
        //     return first(websiteContentChannelItems);
        // }
      }

      return null;
    });
  }

}

exports.default = WebsitePagesContentItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL3dlYnNpdGUtcGFnZXMtY29udGVudC1pdGVtL2RhdGEtc291cmNlLmpzIl0sIm5hbWVzIjpbIlJPQ0tfTUFQUElOR1MiLCJBcG9sbG9zQ29uZmlnIiwiV2Vic2l0ZVBhZ2VzQ29udGVudEl0ZW0iLCJDb250ZW50SXRlbSIsImRhdGFTb3VyY2UiLCJzbHVnIiwicmVwbGFjZSIsInRpdGxlIiwicmVxdWVzdCIsImZpbHRlciIsIm5vcm1hbGl6ZVNsdWciLCJzZWxlY3QiLCJmaXJzdCIsIndlYnNpdGUiLCJjb250ZW50Q2hhbm5lbElkQnlTbHVnIiwiZ2V0Q29udGVudENoYW5uZWxJZEJ5VGl0bGUiLCJ3ZWJzaXRlQ29udGVudENoYW5uZWxJZHMiLCJjb250ZW50Q2hhbm5lbEl0ZW1JZCIsIm1hcCIsImNoYW5uZWxJZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBSUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQW9CQyxlQUExQjs7QUFFZSxNQUFNQyx1QkFBTixTQUFzQ0MsK0JBQVlDLFVBQWxELENBQTZEO0FBQUE7QUFBQTs7QUFBQSwyQ0FDdkRDLElBQUQsSUFBVSxxQkFBUUEsSUFBUixFQUFjQyxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLENBRDhDOztBQUFBLHdEQUsxQ0MsS0FBRCxJQUFXLEtBQ25DQyxPQURtQyxDQUMzQix5QkFEMkIsRUFFbkNDLE1BRm1DLENBRTNCLFlBQVcsS0FBS0MsYUFBTCxDQUFtQkgsS0FBbkIsQ0FBMEIsR0FGVixFQUduQ0ksTUFIbUMsQ0FHNUIsNEJBSDRCLEVBSW5DQyxLQUptQyxFQUxnQzs7QUFBQSwwREFXekMsT0FBT0MsT0FBUCxFQUFnQk4sS0FBaEIsS0FBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxZQUFNTyxzQkFBc0IsR0FBRyxNQUFNLEtBQUtDLDBCQUFMLENBQWdDUixLQUFoQyxDQUFyQyxDQVRxRCxDQVdyRDs7QUFDQSxZQUFNUyx3QkFBd0IsR0FBRyxpQkFDN0JoQixhQUQ2QixFQUU1QiwrQkFBOEJhLE9BQVEsRUFGVixFQUc3QixJQUg2QixDQUFqQzs7QUFLQSxVQUFJRyx3QkFBd0IsSUFBSUYsc0JBQWhDLEVBQXdEO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRUcsVUFBQUE7QUFBRixZQUEyQkgsc0JBQWpDO0FBQ0EsZUFBTyxNQUFNLEtBQUtOLE9BQUwsR0FDUkMsTUFEUSxDQUVKLElBQUcsQ0FBQyxHQUFHTyx3QkFBSixFQUE4QkUsR0FBOUIsQ0FDQ0MsU0FBRCxJQUFnQix3QkFBdUJBLFNBQVUsR0FEakQsRUFFRkMsSUFGRSxDQUVHLE1BRkgsQ0FFVyxnQkFBZUgsb0JBQXFCLEdBSjlDLEVBTVJMLEtBTlEsRUFBYixDQUxvRCxDQWFwRDtBQUNBO0FBQ0E7QUFDSDs7QUFFRCxhQUFPLElBQVA7QUFDSCxLQS9DdUU7QUFBQTs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRJdGVtLCBDb250ZW50Q2hhbm5lbCB9IGZyb20gJ0BhcG9sbG9zcHJvamVjdC9kYXRhLWNvbm5lY3Rvci1yb2NrJztcbmltcG9ydCBBcG9sbG9zQ29uZmlnIGZyb20gJ0BhcG9sbG9zcHJvamVjdC9jb25maWcnO1xuaW1wb3J0IHtcbiAgICBnZXQsIHRvTG93ZXIsIGlzRW1wdHlcbn0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgeyBST0NLX01BUFBJTkdTIH0gPSBBcG9sbG9zQ29uZmlnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJzaXRlUGFnZXNDb250ZW50SXRlbSBleHRlbmRzIENvbnRlbnRJdGVtLmRhdGFTb3VyY2Uge1xuICAgIG5vcm1hbGl6ZVNsdWcgPSAoc2x1ZykgPT4gdG9Mb3dlcihzbHVnKS5yZXBsYWNlKC9cXHMvZywgJycpO1xuXG4gICAgLy8gcXVlcnkgQ29udGVudENoYW5uZWxJdGVtU2x1Z3MgYnkgdGhlIHRpdGxlIHBhc3NlZCBpblxuICAgIC8vIHNlbGVjdCB0aGUgZmlyc3QgQ29udGVudENoYW5uZWxJdGVtSWRcbiAgICBnZXRDb250ZW50Q2hhbm5lbElkQnlUaXRsZSA9ICh0aXRsZSkgPT4gdGhpc1xuICAgICAgICAucmVxdWVzdCgnQ29udGVudENoYW5uZWxJdGVtU2x1Z3MnKVxuICAgICAgICAuZmlsdGVyKGBTbHVnIGVxICcke3RoaXMubm9ybWFsaXplU2x1Zyh0aXRsZSl9J2ApXG4gICAgICAgIC5zZWxlY3QoJ0NvbnRlbnRDaGFubmVsSXRlbUlkLCBTbHVnJylcbiAgICAgICAgLmZpcnN0KCk7XG5cbiAgICBnZXRXZWJzaXRlUGFnZUNvbnRlbnRCeVRpdGxlID0gYXN5bmMgKHdlYnNpdGUsIHRpdGxlKSA9PiB7XG4gICAgICAgIC8vIHF1ZXJ5IENvbnRlbnRDaGFubmVsSXRlbVNsdWdzIGJ5IHRoZSB0aXRsZSBwYXNzZWQgaW5cbiAgICAgICAgLy8gc2VsZWN0IHRoZSBDb250ZW50Q2hhbm5lbEl0ZW1JZFxuICAgICAgICAvLyBjb25zdCBjb250ZW50Q2hhbm5lbEl0ZW1JZHMgPSBhd2FpdCB0aGlzXG4gICAgICAgIC8vICAgICAucmVxdWVzdCgnQ29udGVudENoYW5uZWxJdGVtU2x1Z3MnKVxuICAgICAgICAvLyAgICAgLmZpbHRlcihgU2x1ZyBlcSAnJHtub3JtYWxpemVXZWJQYWdlVGl0bGUodGl0bGUpfSdgKVxuICAgICAgICAvLyAgICAgLnNlbGVjdCgnQ29udGVudENoYW5uZWxJdGVtSWQsIFNsdWcnKVxuICAgICAgICAvLyAgICAgLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDaGFubmVsSWRCeVNsdWcgPSBhd2FpdCB0aGlzLmdldENvbnRlbnRDaGFubmVsSWRCeVRpdGxlKHRpdGxlKVxuXG4gICAgICAgIC8vIEdldCB0aGUgQ29udGVudCBDaGFubmVscyBmb3IgdGhlIHNwZWNpZmllZCBXZWJzaXRlXG4gICAgICAgIGNvbnN0IHdlYnNpdGVDb250ZW50Q2hhbm5lbElkcyA9IGdldChcbiAgICAgICAgICAgIFJPQ0tfTUFQUElOR1MsXG4gICAgICAgICAgICBgV0VCU0lURV9DT05URU5UX0NIQU5ORUxfSURTLiR7d2Vic2l0ZX1gLFxuICAgICAgICAgICAgbnVsbCk7XG5cbiAgICAgICAgaWYgKHdlYnNpdGVDb250ZW50Q2hhbm5lbElkcyAmJiBjb250ZW50Q2hhbm5lbElkQnlTbHVnKSB7XG4gICAgICAgICAgICAvLyBxdWVyeSBDb250ZW50Q2hhbm5lbEl0ZW1zIGJ5IENvbnRlbnRDaGFubmVsSWQgYW5kIENvbnRlbnRDaGFubmVsSXRlbUlkXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IHJlc3VsdCAod2Ugb25seSB3YW50IDEgaXRlbSB0byBiZSBwYXNzZWQgYmFjayBzaW5jZSBwYWdlIHRpdGxlIHRvIHBhZ2Ugc2hvdWxkIGJlIGEgMS0xIHJlbGF0aW9uc2hpcClcbiAgICAgICAgICAgIC8vIGNvbnN0IHsgY29udGVudENoYW5uZWxJdGVtSWQgfSA9IGZpcnN0KGNvbnRlbnRDaGFubmVsSXRlbUlkcylcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudENoYW5uZWxJdGVtSWQgfSA9IGNvbnRlbnRDaGFubmVsSWRCeVNsdWdcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGAoJHtbLi4ud2Vic2l0ZUNvbnRlbnRDaGFubmVsSWRzXS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbm5lbElkKSA9PiBgKENvbnRlbnRDaGFubmVsSWQgZXEgJHtjaGFubmVsSWR9KWBcbiAgICAgICAgICAgICAgICAgICAgKS5qb2luKCcgb3IgJyl9KSBhbmQgKElkIGVxICR7Y29udGVudENoYW5uZWxJdGVtSWR9KWBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmZpcnN0KCk7XG5cbiAgICAgICAgICAgIC8vIGlmICh3ZWJzaXRlQ29udGVudENoYW5uZWxJdGVtcykge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmaXJzdCh3ZWJzaXRlQ29udGVudENoYW5uZWxJdGVtcyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19