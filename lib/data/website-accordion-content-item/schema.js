"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSchema = require("@apollosproject/data-schema");

var _apolloServer = require("apollo-server");

var _default = _apolloServer.gql`
    type WebsiteAccordionContentItem implements ContentItem & Node {
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
    }
`;

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL3dlYnNpdGUtYWNjb3JkaW9uLWNvbnRlbnQtaXRlbS9zY2hlbWEuanMiXSwibmFtZXMiOlsiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O2VBRWVBLGlCQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudEl0ZW1TY2hlbWEgfSBmcm9tICdAYXBvbGxvc3Byb2plY3QvZGF0YS1zY2hlbWEnO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGdxbGBcbiAgICB0eXBlIFdlYnNpdGVBY2NvcmRpb25Db250ZW50SXRlbSBpbXBsZW1lbnRzIENvbnRlbnRJdGVtICYgTm9kZSB7XG4gICAgICAgIGlkOiBJRCFcbiAgICAgICAgdGl0bGU6IFN0cmluZ1xuICAgICAgICBjb3ZlckltYWdlOiBJbWFnZU1lZGlhXG4gICAgICAgIGltYWdlczogW0ltYWdlTWVkaWFdXG4gICAgICAgIHZpZGVvczogW1ZpZGVvTWVkaWFdXG4gICAgICAgIGF1ZGlvczogW0F1ZGlvTWVkaWFdXG4gICAgICAgIGh0bWxDb250ZW50OiBTdHJpbmdcbiAgICAgICAgc3VtbWFyeTogU3RyaW5nXG4gICAgICAgIGNoaWxkQ29udGVudEl0ZW1zQ29ubmVjdGlvbihcbiAgICAgICAgICAgIGZpcnN0OiBJbnRcbiAgICAgICAgICAgIGFmdGVyOiBTdHJpbmdcbiAgICAgICAgKTogQ29udGVudEl0ZW1zQ29ubmVjdGlvblxuICAgICAgICBzaWJsaW5nQ29udGVudEl0ZW1zQ29ubmVjdGlvbihcbiAgICAgICAgICAgIGZpcnN0OiBJbnRcbiAgICAgICAgICAgIGFmdGVyOiBTdHJpbmdcbiAgICAgICAgKTogQ29udGVudEl0ZW1zQ29ubmVjdGlvblxuICAgICAgICBwYXJlbnRDaGFubmVsOiBDb250ZW50Q2hhbm5lbFxuICAgICAgICB0aGVtZTogVGhlbWVcbiAgICB9XG5gOyJdfQ==