"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSchema = require("@apollosproject/data-schema");

var _apolloServer = require("apollo-server");

var _default = _apolloServer.gql`
    type CallToAction {
        call: String
        action: String
    }

    type WebsiteContentItem implements ContentItem & Node {
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

        contentLayout: String
        imageAlt: String
        imageRatio: String
        callsToAction: [CallToAction]
        target: String
        subtitle: String
    }
`;

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL3dlYnNpdGUtY29udGVudC1pdGVtL3NjaGVtYS5qcyJdLCJuYW1lcyI6WyJncWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7ZUFFZUEsaUJBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZW50SXRlbVNjaGVtYSB9IGZyb20gJ0BhcG9sbG9zcHJvamVjdC9kYXRhLXNjaGVtYSc7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZ3FsYFxuICAgIHR5cGUgQ2FsbFRvQWN0aW9uIHtcbiAgICAgICAgY2FsbDogU3RyaW5nXG4gICAgICAgIGFjdGlvbjogU3RyaW5nXG4gICAgfVxuXG4gICAgdHlwZSBXZWJzaXRlQ29udGVudEl0ZW0gaW1wbGVtZW50cyBDb250ZW50SXRlbSAmIE5vZGUge1xuICAgICAgICBpZDogSUQhXG4gICAgICAgIHRpdGxlOiBTdHJpbmdcbiAgICAgICAgY292ZXJJbWFnZTogSW1hZ2VNZWRpYVxuICAgICAgICBpbWFnZXM6IFtJbWFnZU1lZGlhXVxuICAgICAgICB2aWRlb3M6IFtWaWRlb01lZGlhXVxuICAgICAgICBhdWRpb3M6IFtBdWRpb01lZGlhXVxuICAgICAgICBodG1sQ29udGVudDogU3RyaW5nXG4gICAgICAgIHN1bW1hcnk6IFN0cmluZ1xuICAgICAgICBjaGlsZENvbnRlbnRJdGVtc0Nvbm5lY3Rpb24oXG4gICAgICAgICAgICBmaXJzdDogSW50XG4gICAgICAgICAgICBhZnRlcjogU3RyaW5nXG4gICAgICAgICk6IENvbnRlbnRJdGVtc0Nvbm5lY3Rpb25cbiAgICAgICAgc2libGluZ0NvbnRlbnRJdGVtc0Nvbm5lY3Rpb24oXG4gICAgICAgICAgICBmaXJzdDogSW50XG4gICAgICAgICAgICBhZnRlcjogU3RyaW5nXG4gICAgICAgICk6IENvbnRlbnRJdGVtc0Nvbm5lY3Rpb25cbiAgICAgICAgcGFyZW50Q2hhbm5lbDogQ29udGVudENoYW5uZWxcbiAgICAgICAgdGhlbWU6IFRoZW1lXG5cbiAgICAgICAgY29udGVudExheW91dDogU3RyaW5nXG4gICAgICAgIGltYWdlQWx0OiBTdHJpbmdcbiAgICAgICAgaW1hZ2VSYXRpbzogU3RyaW5nXG4gICAgICAgIGNhbGxzVG9BY3Rpb246IFtDYWxsVG9BY3Rpb25dXG4gICAgICAgIHRhcmdldDogU3RyaW5nXG4gICAgICAgIHN1YnRpdGxlOiBTdHJpbmdcbiAgICB9XG5gOyJdfQ==