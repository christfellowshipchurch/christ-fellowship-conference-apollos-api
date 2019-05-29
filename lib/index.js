"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "testSchema", {
  enumerable: true,
  get: function () {
    return _server.testSchema;
  }
});

var _config = _interopRequireDefault(require("dotenv/config"));

var _config2 = _interopRequireDefault(require("./config"));

var _server = _interopRequireWildcard(require("./server"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
// eslint-disable-line
// eslint-disable-line import/prefer-default-export
// Use the port, if provided.
const {
  PORT
} = process.env;
if (!PORT && process.env.NODE_ENV !== 'test') console.warn('Add `ENV=4000` if you are having trouble connecting to the server. By default, PORT is random.');

_server.default.listen({
  port: PORT
}, () => {
  console.log(`🚀 Server ready at http://0.0.0.0:${PORT}`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQT1JUIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uc29sZSIsIndhcm4iLCJzZXJ2ZXIiLCJsaXN0ZW4iLCJwb3J0IiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRm9DO0FBQ0w7QUFHUTtBQUV2QztBQUNBLE1BQU07QUFBRUEsRUFBQUE7QUFBRixJQUFXQyxPQUFPLENBQUNDLEdBQXpCO0FBQ0EsSUFBSSxDQUFDRixJQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLE1BQXRDLEVBQ0VDLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLGdHQURGOztBQUlGQyxnQkFBT0MsTUFBUCxDQUFjO0FBQUVDLEVBQUFBLElBQUksRUFBRVI7QUFBUixDQUFkLEVBQThCLE1BQU07QUFDbENJLEVBQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFhLHFDQUFvQ1QsSUFBSyxFQUF0RDtBQUNELENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudi9jb25maWcnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IHNlcnZlciBmcm9tICcuL3NlcnZlcic7XG5cbmV4cG9ydCB7IHRlc3RTY2hlbWEgfSBmcm9tICcuL3NlcnZlcic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuXG4vLyBVc2UgdGhlIHBvcnQsIGlmIHByb3ZpZGVkLlxuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcbmlmICghUE9SVCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKVxuICBjb25zb2xlLndhcm4oXG4gICAgJ0FkZCBgRU5WPTQwMDBgIGlmIHlvdSBhcmUgaGF2aW5nIHRyb3VibGUgY29ubmVjdGluZyB0byB0aGUgc2VydmVyLiBCeSBkZWZhdWx0LCBQT1JUIGlzIHJhbmRvbS4nXG4gICk7XG5cbnNlcnZlci5saXN0ZW4oeyBwb3J0OiBQT1JUIH0sICgpID0+IHtcbiAgY29uc29sZS5sb2coYPCfmoAgU2VydmVyIHJlYWR5IGF0IGh0dHA6Ly8wLjAuMC4wOiR7UE9SVH1gKTtcbn0pO1xuIl19