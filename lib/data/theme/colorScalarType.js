"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _graphql.GraphQLScalarType({
  name: 'Color',
  description: 'A rgb color string',

  serialize(value) {
    return (0, _color.default)(value).rgb().string();
  },

  parseValue(value) {
    return (0, _color.default)(value);
  },

  parseLiteral({
    value
  }) {
    return (0, _color.default)(value);
  }

});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL3RoZW1lL2NvbG9yU2NhbGFyVHlwZS5qcyJdLCJuYW1lcyI6WyJHcmFwaFFMU2NhbGFyVHlwZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNlcmlhbGl6ZSIsInZhbHVlIiwicmdiIiwic3RyaW5nIiwicGFyc2VWYWx1ZSIsInBhcnNlTGl0ZXJhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWUsSUFBSUEsMEJBQUosQ0FBc0I7QUFDbkNDLEVBQUFBLElBQUksRUFBRSxPQUQ2QjtBQUVuQ0MsRUFBQUEsV0FBVyxFQUFFLG9CQUZzQjs7QUFHbkNDLEVBQUFBLFNBQVMsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsV0FBTyxvQkFBTUEsS0FBTixFQUNKQyxHQURJLEdBRUpDLE1BRkksRUFBUDtBQUdELEdBUGtDOztBQVFuQ0MsRUFBQUEsVUFBVSxDQUFDSCxLQUFELEVBQVE7QUFDaEIsV0FBTyxvQkFBTUEsS0FBTixDQUFQO0FBQ0QsR0FWa0M7O0FBV25DSSxFQUFBQSxZQUFZLENBQUM7QUFBRUosSUFBQUE7QUFBRixHQUFELEVBQVk7QUFDdEIsV0FBTyxvQkFBTUEsS0FBTixDQUFQO0FBQ0Q7O0FBYmtDLENBQXRCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ2NvbG9yJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgbmFtZTogJ0NvbG9yJyxcbiAgZGVzY3JpcHRpb246ICdBIHJnYiBjb2xvciBzdHJpbmcnLFxuICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICByZXR1cm4gY29sb3IodmFsdWUpXG4gICAgICAucmdiKClcbiAgICAgIC5zdHJpbmcoKTtcbiAgfSxcbiAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiBjb2xvcih2YWx1ZSk7XG4gIH0sXG4gIHBhcnNlTGl0ZXJhbCh7IHZhbHVlIH0pIHtcbiAgICByZXR1cm4gY29sb3IodmFsdWUpO1xuICB9LFxufSk7XG4iXX0=