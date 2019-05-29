"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

var _default = _apolloServer.gql`
    extend type Query {
        getDefinedValueByIdentifier(identifier: String): DefinedValue
    }
    type DefinedValue implements Node {
        id: ID!
        value: String
    }
`;

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL2RlZmluZWQtdmFsdWUvc2NoZW1hLmpzIl0sIm5hbWVzIjpbImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztlQUVlQSxpQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBncWxgXG4gICAgZXh0ZW5kIHR5cGUgUXVlcnkge1xuICAgICAgICBnZXREZWZpbmVkVmFsdWVCeUlkZW50aWZpZXIoaWRlbnRpZmllcjogU3RyaW5nKTogRGVmaW5lZFZhbHVlXG4gICAgfVxuICAgIHR5cGUgRGVmaW5lZFZhbHVlIGltcGxlbWVudHMgTm9kZSB7XG4gICAgICAgIGlkOiBJRCFcbiAgICAgICAgdmFsdWU6IFN0cmluZ1xuICAgIH1cbmA7Il19