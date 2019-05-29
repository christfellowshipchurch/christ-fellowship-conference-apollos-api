"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resolvers", {
  enumerable: true,
  get: function () {
    return _data.resolvers;
  }
});
Object.defineProperty(exports, "schema", {
  enumerable: true,
  get: function () {
    return _data.schema;
  }
});
Object.defineProperty(exports, "testSchema", {
  enumerable: true,
  get: function () {
    return _data.testSchema;
  }
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

var _rockApolloDataSource = require("@apollosproject/rock-apollo-data-source");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
const extensions = isDev ? [() => new _rockApolloDataSource.RockLoggingExtension()] : [];
const apolloServer = new _apolloServerExpress.ApolloServer({
  typeDefs: _data.schema,
  resolvers: _data.resolvers,
  dataSources: _data.dataSources,
  context: _data.context,
  introspection: true,
  extensions,
  formatError: error => {
    console.error(error.extensions.exception.stacktrace.join('\n'));
    return error;
  },
  playground: {
    settings: {
      'editor.cursorShape': 'line'
    }
  },
  cacheControl: {
    stripFormattedExtensions: false,
    calculateHttpHeaders: true,
    defaultMaxAge: 600
  }
});
const app = (0, _express.default)();
apolloServer.applyMiddleware({
  app
});
apolloServer.applyMiddleware({
  app,
  path: '/'
});
(0, _data.applyServerMiddleware)({
  app,
  dataSources: _data.dataSources,
  context: _data.context
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaXNEZXYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJleHRlbnNpb25zIiwiUm9ja0xvZ2dpbmdFeHRlbnNpb24iLCJhcG9sbG9TZXJ2ZXIiLCJBcG9sbG9TZXJ2ZXIiLCJ0eXBlRGVmcyIsInNjaGVtYSIsInJlc29sdmVycyIsImRhdGFTb3VyY2VzIiwiY29udGV4dCIsImludHJvc3BlY3Rpb24iLCJmb3JtYXRFcnJvciIsImVycm9yIiwiY29uc29sZSIsImV4Y2VwdGlvbiIsInN0YWNrdHJhY2UiLCJqb2luIiwicGxheWdyb3VuZCIsInNldHRpbmdzIiwiY2FjaGVDb250cm9sIiwic3RyaXBGb3JtYXR0ZWRFeHRlbnNpb25zIiwiY2FsY3VsYXRlSHR0cEhlYWRlcnMiLCJkZWZhdWx0TWF4QWdlIiwiYXBwIiwiYXBwbHlNaWRkbGV3YXJlIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBV0EsTUFBTUEsS0FBSyxHQUNUQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUF6QixJQUF5Q0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsTUFEcEU7QUFHQSxNQUFNQyxVQUFVLEdBQUdKLEtBQUssR0FBRyxDQUFDLE1BQU0sSUFBSUssMENBQUosRUFBUCxDQUFILEdBQXdDLEVBQWhFO0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlDLGlDQUFKLENBQWlCO0FBQ3BDQyxFQUFBQSxRQUFRLEVBQUVDLFlBRDBCO0FBRXBDQyxFQUFBQSxTQUFTLEVBQVRBLGVBRm9DO0FBR3BDQyxFQUFBQSxXQUFXLEVBQVhBLGlCQUhvQztBQUlwQ0MsRUFBQUEsT0FBTyxFQUFQQSxhQUpvQztBQUtwQ0MsRUFBQUEsYUFBYSxFQUFFLElBTHFCO0FBTXBDVCxFQUFBQSxVQU5vQztBQU9wQ1UsRUFBQUEsV0FBVyxFQUFHQyxLQUFELElBQVc7QUFDdEJDLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFLLENBQUNYLFVBQU4sQ0FBaUJhLFNBQWpCLENBQTJCQyxVQUEzQixDQUFzQ0MsSUFBdEMsQ0FBMkMsSUFBM0MsQ0FBZDtBQUNBLFdBQU9KLEtBQVA7QUFDRCxHQVZtQztBQVdwQ0ssRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFFBQVEsRUFBRTtBQUNSLDRCQUFzQjtBQURkO0FBREEsR0FYd0I7QUFnQnBDQyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsd0JBQXdCLEVBQUUsS0FEZDtBQUVaQyxJQUFBQSxvQkFBb0IsRUFBRSxJQUZWO0FBR1pDLElBQUFBLGFBQWEsRUFBRTtBQUhIO0FBaEJzQixDQUFqQixDQUFyQjtBQXVCQSxNQUFNQyxHQUFHLEdBQUcsdUJBQVo7QUFFQXBCLFlBQVksQ0FBQ3FCLGVBQWIsQ0FBNkI7QUFBRUQsRUFBQUE7QUFBRixDQUE3QjtBQUNBcEIsWUFBWSxDQUFDcUIsZUFBYixDQUE2QjtBQUFFRCxFQUFBQSxHQUFGO0FBQU9FLEVBQUFBLElBQUksRUFBRTtBQUFiLENBQTdCO0FBQ0EsaUNBQXNCO0FBQUVGLEVBQUFBLEdBQUY7QUFBT2YsRUFBQUEsV0FBVyxFQUFYQSxpQkFBUDtBQUFvQkMsRUFBQUEsT0FBTyxFQUFQQTtBQUFwQixDQUF0QjtlQUVlYyxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUm9ja0xvZ2dpbmdFeHRlbnNpb24gfSBmcm9tICdAYXBvbGxvc3Byb2plY3Qvcm9jay1hcG9sbG8tZGF0YS1zb3VyY2UnO1xuXG5pbXBvcnQge1xuICByZXNvbHZlcnMsXG4gIHNjaGVtYSxcbiAgdGVzdFNjaGVtYSxcbiAgY29udGV4dCxcbiAgZGF0YVNvdXJjZXMsXG4gIGFwcGx5U2VydmVyTWlkZGxld2FyZSxcbn0gZnJvbSAnLi9kYXRhJztcblxuZXhwb3J0IHsgcmVzb2x2ZXJzLCBzY2hlbWEsIHRlc3RTY2hlbWEgfTtcblxuY29uc3QgaXNEZXYgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCc7XG5cbmNvbnN0IGV4dGVuc2lvbnMgPSBpc0RldiA/IFsoKSA9PiBuZXcgUm9ja0xvZ2dpbmdFeHRlbnNpb24oKV0gOiBbXTtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHR5cGVEZWZzOiBzY2hlbWEsXG4gIHJlc29sdmVycyxcbiAgZGF0YVNvdXJjZXMsXG4gIGNvbnRleHQsXG4gIGludHJvc3BlY3Rpb246IHRydWUsXG4gIGV4dGVuc2lvbnMsXG4gIGZvcm1hdEVycm9yOiAoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLmV4dGVuc2lvbnMuZXhjZXB0aW9uLnN0YWNrdHJhY2Uuam9pbignXFxuJykpO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfSxcbiAgcGxheWdyb3VuZDoge1xuICAgIHNldHRpbmdzOiB7XG4gICAgICAnZWRpdG9yLmN1cnNvclNoYXBlJzogJ2xpbmUnLFxuICAgIH0sXG4gIH0sXG4gIGNhY2hlQ29udHJvbDoge1xuICAgIHN0cmlwRm9ybWF0dGVkRXh0ZW5zaW9uczogZmFsc2UsXG4gICAgY2FsY3VsYXRlSHR0cEhlYWRlcnM6IHRydWUsXG4gICAgZGVmYXVsdE1heEFnZTogNjAwLFxuICB9LFxufSk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBvbGxvU2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KTtcbmFwb2xsb1NlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAsIHBhdGg6ICcvJyB9KTtcbmFwcGx5U2VydmVyTWlkZGxld2FyZSh7IGFwcCwgZGF0YVNvdXJjZXMsIGNvbnRleHQgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdfQ==