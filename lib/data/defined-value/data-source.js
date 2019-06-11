"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rockApolloDataSource = _interopRequireDefault(require("@apollosproject/rock-apollo-data-source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DefinedValue extends _rockApolloDataSource.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "resource", 'DefinedValues');

    _defineProperty(this, "getIdentifierType", identifier => {
      const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      const intRegex = /\D/g;

      if (identifier.match(guidRegex)) {
        return {
          type: 'guid',
          value: identifier,
          query: `Guid eq (guid'${identifier}')`
        };
      } else if (!identifier.match(intRegex)) {
        return {
          type: 'int',
          value: identifier,
          query: `Id eq ${identifier}`
        };
      }

      return {
        type: 'custom',
        value: identifier,
        query: null
      };
    });

    _defineProperty(this, "getDefinedValueByIdentifier", id => {
      if (!id || id === '') return null;
      const type = this.getIdentifierType(id);
      return type.query ? this.request().filter(type.query).first() : null;
    });
  }

}

exports.default = DefinedValue;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL2RlZmluZWQtdmFsdWUvZGF0YS1zb3VyY2UuanMiXSwibmFtZXMiOlsiRGVmaW5lZFZhbHVlIiwiUm9ja0Fwb2xsb0RhdGFTb3VyY2UiLCJpZGVudGlmaWVyIiwiZ3VpZFJlZ2V4IiwiaW50UmVnZXgiLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInF1ZXJ5IiwiaWQiLCJnZXRJZGVudGlmaWVyVHlwZSIsInJlcXVlc3QiLCJmaWx0ZXIiLCJmaXJzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFZSxNQUFNQSxZQUFOLFNBQTJCQyw2QkFBM0IsQ0FBZ0Q7QUFBQTtBQUFBOztBQUFBLHNDQUNoRCxlQURnRDs7QUFBQSwrQ0FJdENDLFVBQUQsSUFBZ0I7QUFDaEMsWUFBTUMsU0FBUyxHQUFHLDRFQUFsQjtBQUNBLFlBQU1DLFFBQVEsR0FBRyxLQUFqQjs7QUFFQSxVQUFJRixVQUFVLENBQUNHLEtBQVgsQ0FBaUJGLFNBQWpCLENBQUosRUFBaUM7QUFDN0IsZUFBTztBQUFFRyxVQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBQUEsS0FBSyxFQUFFTCxVQUF2QjtBQUFtQ00sVUFBQUEsS0FBSyxFQUFHLGlCQUFnQk4sVUFBVztBQUF0RSxTQUFQO0FBQ0gsT0FGRCxNQUVPLElBQUksQ0FBQ0EsVUFBVSxDQUFDRyxLQUFYLENBQWlCRCxRQUFqQixDQUFMLEVBQWlDO0FBQ3BDLGVBQU87QUFBRUUsVUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsVUFBQUEsS0FBSyxFQUFFTCxVQUF0QjtBQUFrQ00sVUFBQUEsS0FBSyxFQUFHLFNBQVFOLFVBQVc7QUFBN0QsU0FBUDtBQUNIOztBQUVELGFBQU87QUFBRUksUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLEtBQUssRUFBRUwsVUFBekI7QUFBcUNNLFFBQUFBLEtBQUssRUFBRTtBQUE1QyxPQUFQO0FBQ0gsS0FmMEQ7O0FBQUEseURBaUI1QkMsRUFBRCxJQUFRO0FBQ2xDLFVBQUksQ0FBQ0EsRUFBRCxJQUFPQSxFQUFFLEtBQUssRUFBbEIsRUFBc0IsT0FBTyxJQUFQO0FBRXRCLFlBQU1ILElBQUksR0FBRyxLQUFLSSxpQkFBTCxDQUF1QkQsRUFBdkIsQ0FBYjtBQUVBLGFBQU9ILElBQUksQ0FBQ0UsS0FBTCxHQUNELEtBQUtHLE9BQUwsR0FBZUMsTUFBZixDQUFzQk4sSUFBSSxDQUFDRSxLQUEzQixFQUFrQ0ssS0FBbEMsRUFEQyxHQUVELElBRk47QUFHSCxLQXpCMEQ7QUFBQTs7QUFBQTs7O0FBMEI5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb2NrQXBvbGxvRGF0YVNvdXJjZSBmcm9tICdAYXBvbGxvc3Byb2plY3Qvcm9jay1hcG9sbG8tZGF0YS1zb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbmVkVmFsdWUgZXh0ZW5kcyBSb2NrQXBvbGxvRGF0YVNvdXJjZSB7XG4gICAgcmVzb3VyY2UgPSAnRGVmaW5lZFZhbHVlcyc7XG5cbiAgICAvLyBUT0RPIDogbW92ZSB0byB1dGlsc1xuICAgIGdldElkZW50aWZpZXJUeXBlID0gKGlkZW50aWZpZXIpID0+IHtcbiAgICAgICAgY29uc3QgZ3VpZFJlZ2V4ID0gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaTtcbiAgICAgICAgY29uc3QgaW50UmVnZXggPSAvXFxEL2c7XG5cbiAgICAgICAgaWYgKGlkZW50aWZpZXIubWF0Y2goZ3VpZFJlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2d1aWQnLCB2YWx1ZTogaWRlbnRpZmllciwgcXVlcnk6IGBHdWlkIGVxIChndWlkJyR7aWRlbnRpZmllcn0nKWAgfTtcbiAgICAgICAgfSBlbHNlIGlmICghaWRlbnRpZmllci5tYXRjaChpbnRSZWdleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdpbnQnLCB2YWx1ZTogaWRlbnRpZmllciwgcXVlcnk6IGBJZCBlcSAke2lkZW50aWZpZXJ9YCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2N1c3RvbScsIHZhbHVlOiBpZGVudGlmaWVyLCBxdWVyeTogbnVsbCB9O1xuICAgIH1cblxuICAgIGdldERlZmluZWRWYWx1ZUJ5SWRlbnRpZmllciA9IChpZCkgPT4ge1xuICAgICAgICBpZiAoIWlkIHx8IGlkID09PSAnJykgcmV0dXJuIG51bGxcblxuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRJZGVudGlmaWVyVHlwZShpZCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGUucXVlcnlcbiAgICAgICAgICAgID8gdGhpcy5yZXF1ZXN0KCkuZmlsdGVyKHR5cGUucXVlcnkpLmZpcnN0KClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG59OyJdfQ==