"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _serverCore = require("@apollosproject/server-core");

const resolver = {
  Query: {
    getDefinedValueByIdentifier: (root, {
      identifier
    }, {
      dataSources
    }) => dataSources.DefinedValue.getDefinedValueByIdentifier(identifier)
  },
  DefinedValue: {
    id: ({
      id
    }, args, context, {
      parentType
    }) => (0, _serverCore.createGlobalId)(id, parentType.name),
    value: ({
      value
    }, args, context) => value
  }
};
var _default = resolver;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL2RlZmluZWQtdmFsdWUvcmVzb2x2ZXIuanMiXSwibmFtZXMiOlsicmVzb2x2ZXIiLCJRdWVyeSIsImdldERlZmluZWRWYWx1ZUJ5SWRlbnRpZmllciIsInJvb3QiLCJpZGVudGlmaWVyIiwiZGF0YVNvdXJjZXMiLCJEZWZpbmVkVmFsdWUiLCJpZCIsImFyZ3MiLCJjb250ZXh0IiwicGFyZW50VHlwZSIsIm5hbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNiQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsMkJBQTJCLEVBQUUsQ0FBQ0MsSUFBRCxFQUFPO0FBQUVDLE1BQUFBO0FBQUYsS0FBUCxFQUF1QjtBQUFFQyxNQUFBQTtBQUFGLEtBQXZCLEtBQTJDQSxXQUFXLENBQUNDLFlBQVosQ0FBeUJKLDJCQUF6QixDQUFxREUsVUFBckQ7QUFEckUsR0FETTtBQUliRSxFQUFBQSxZQUFZLEVBQUU7QUFDVkMsSUFBQUEsRUFBRSxFQUFFLENBQUM7QUFBRUEsTUFBQUE7QUFBRixLQUFELEVBQVNDLElBQVQsRUFBZUMsT0FBZixFQUF3QjtBQUFFQyxNQUFBQTtBQUFGLEtBQXhCLEtBQ0EsZ0NBQWVILEVBQWYsRUFBbUJHLFVBQVUsQ0FBQ0MsSUFBOUIsQ0FGTTtBQUdWQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFQSxNQUFBQTtBQUFGLEtBQUQsRUFBWUosSUFBWixFQUFrQkMsT0FBbEIsS0FBOEJHO0FBSDNCO0FBSkQsQ0FBakI7ZUFXZVosUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbElkIH0gZnJvbSAnQGFwb2xsb3Nwcm9qZWN0L3NlcnZlci1jb3JlJztcblxuY29uc3QgcmVzb2x2ZXIgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgZ2V0RGVmaW5lZFZhbHVlQnlJZGVudGlmaWVyOiAocm9vdCwgeyBpZGVudGlmaWVyIH0sIHsgZGF0YVNvdXJjZXMgfSkgPT4gZGF0YVNvdXJjZXMuRGVmaW5lZFZhbHVlLmdldERlZmluZWRWYWx1ZUJ5SWRlbnRpZmllcihpZGVudGlmaWVyKVxuICAgIH0sXG4gICAgRGVmaW5lZFZhbHVlOiB7XG4gICAgICAgIGlkOiAoeyBpZCB9LCBhcmdzLCBjb250ZXh0LCB7IHBhcmVudFR5cGUgfSkgPT5cbiAgICAgICAgICAgIGNyZWF0ZUdsb2JhbElkKGlkLCBwYXJlbnRUeXBlLm5hbWUpLFxuICAgICAgICB2YWx1ZTogKHsgdmFsdWUgfSwgYXJncywgY29udGV4dCkgPT4gdmFsdWUsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlcjtcbiJdfQ==