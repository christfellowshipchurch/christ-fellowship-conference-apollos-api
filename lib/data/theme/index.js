"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = exports.resolver = exports.schema = void 0;

var _apolloServer = require("apollo-server");

var _randomcolor = _interopRequireDefault(require("randomcolor"));

var _colorScalarType = _interopRequireDefault(require("./colorScalarType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = _apolloServer.gql`
  type Theme {
    type: ThemeType
    colors: ThemeColors
  }

  enum ThemeType {
    LIGHT
    DARK
  }

  scalar Color

  type ThemeColors {
    primary: Color
    secondary: Color
    screen: Color
    paper: Color
    alert: Color
  }
`;
exports.schema = schema;
const resolver = {
  Theme: {
    type: () => 'DARK',
    // todo: infer theme type from data
    colors: seed => {
      // todo: don't generate a random theme :)
      const baseColors = (0, _randomcolor.default)({
        seed,
        count: 2,
        luminosity: 'bright'
      });
      return {
        primary: baseColors[0],
        secondary: baseColors[1],
        screen: (0, _randomcolor.default)({
          seed,
          hue: baseColors[0],
          luminosity: 'dark'
        }),
        paper: (0, _randomcolor.default)({
          seed,
          hue: baseColors[1],
          luminosity: 'dark'
        }),
        alert: (0, _randomcolor.default)({
          seed,
          hue: 'red'
        })
      };
    }
  },
  Color: _colorScalarType.default
};
exports.resolver = resolver;

class model {} // todo


exports.model = model;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbInNjaGVtYSIsImdxbCIsInJlc29sdmVyIiwiVGhlbWUiLCJ0eXBlIiwiY29sb3JzIiwic2VlZCIsImJhc2VDb2xvcnMiLCJjb3VudCIsImx1bWlub3NpdHkiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwic2NyZWVuIiwiaHVlIiwicGFwZXIiLCJhbGVydCIsIkNvbG9yIiwiY29sb3JTY2FsYXJUeXBlIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUVPLE1BQU1BLE1BQU0sR0FBR0MsaUJBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQW5COztBQXNCQSxNQUFNQyxRQUFRLEdBQUc7QUFDdEJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUUsTUFBTSxNQURQO0FBQ2U7QUFDcEJDLElBQUFBLE1BQU0sRUFBR0MsSUFBRCxJQUFVO0FBQ2hCO0FBQ0EsWUFBTUMsVUFBVSxHQUFHLDBCQUFZO0FBQUVELFFBQUFBLElBQUY7QUFBUUUsUUFBQUEsS0FBSyxFQUFFLENBQWY7QUFBa0JDLFFBQUFBLFVBQVUsRUFBRTtBQUE5QixPQUFaLENBQW5CO0FBQ0EsYUFBTztBQUNMQyxRQUFBQSxPQUFPLEVBQUVILFVBQVUsQ0FBQyxDQUFELENBRGQ7QUFFTEksUUFBQUEsU0FBUyxFQUFFSixVQUFVLENBQUMsQ0FBRCxDQUZoQjtBQUdMSyxRQUFBQSxNQUFNLEVBQUUsMEJBQVk7QUFDbEJOLFVBQUFBLElBRGtCO0FBRWxCTyxVQUFBQSxHQUFHLEVBQUVOLFVBQVUsQ0FBQyxDQUFELENBRkc7QUFHbEJFLFVBQUFBLFVBQVUsRUFBRTtBQUhNLFNBQVosQ0FISDtBQVFMSyxRQUFBQSxLQUFLLEVBQUUsMEJBQVk7QUFDakJSLFVBQUFBLElBRGlCO0FBRWpCTyxVQUFBQSxHQUFHLEVBQUVOLFVBQVUsQ0FBQyxDQUFELENBRkU7QUFHakJFLFVBQUFBLFVBQVUsRUFBRTtBQUhLLFNBQVosQ0FSRjtBQWFMTSxRQUFBQSxLQUFLLEVBQUUsMEJBQVk7QUFDakJULFVBQUFBLElBRGlCO0FBRWpCTyxVQUFBQSxHQUFHLEVBQUU7QUFGWSxTQUFaO0FBYkYsT0FBUDtBQWtCRDtBQXZCSSxHQURlO0FBMEJ0QkcsRUFBQUEsS0FBSyxFQUFFQztBQTFCZSxDQUFqQjs7O0FBNkJBLE1BQU1DLEtBQU4sQ0FBWSxFLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcbmltcG9ydCByYW5kb21Db2xvciBmcm9tICdyYW5kb21jb2xvcic7XG5cbmltcG9ydCBjb2xvclNjYWxhclR5cGUgZnJvbSAnLi9jb2xvclNjYWxhclR5cGUnO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFRoZW1lIHtcbiAgICB0eXBlOiBUaGVtZVR5cGVcbiAgICBjb2xvcnM6IFRoZW1lQ29sb3JzXG4gIH1cblxuICBlbnVtIFRoZW1lVHlwZSB7XG4gICAgTElHSFRcbiAgICBEQVJLXG4gIH1cblxuICBzY2FsYXIgQ29sb3JcblxuICB0eXBlIFRoZW1lQ29sb3JzIHtcbiAgICBwcmltYXJ5OiBDb2xvclxuICAgIHNlY29uZGFyeTogQ29sb3JcbiAgICBzY3JlZW46IENvbG9yXG4gICAgcGFwZXI6IENvbG9yXG4gICAgYWxlcnQ6IENvbG9yXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlciA9IHtcbiAgVGhlbWU6IHtcbiAgICB0eXBlOiAoKSA9PiAnREFSSycsIC8vIHRvZG86IGluZmVyIHRoZW1lIHR5cGUgZnJvbSBkYXRhXG4gICAgY29sb3JzOiAoc2VlZCkgPT4ge1xuICAgICAgLy8gdG9kbzogZG9uJ3QgZ2VuZXJhdGUgYSByYW5kb20gdGhlbWUgOilcbiAgICAgIGNvbnN0IGJhc2VDb2xvcnMgPSByYW5kb21Db2xvcih7IHNlZWQsIGNvdW50OiAyLCBsdW1pbm9zaXR5OiAnYnJpZ2h0JyB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaW1hcnk6IGJhc2VDb2xvcnNbMF0sXG4gICAgICAgIHNlY29uZGFyeTogYmFzZUNvbG9yc1sxXSxcbiAgICAgICAgc2NyZWVuOiByYW5kb21Db2xvcih7XG4gICAgICAgICAgc2VlZCxcbiAgICAgICAgICBodWU6IGJhc2VDb2xvcnNbMF0sXG4gICAgICAgICAgbHVtaW5vc2l0eTogJ2RhcmsnLFxuICAgICAgICB9KSxcbiAgICAgICAgcGFwZXI6IHJhbmRvbUNvbG9yKHtcbiAgICAgICAgICBzZWVkLFxuICAgICAgICAgIGh1ZTogYmFzZUNvbG9yc1sxXSxcbiAgICAgICAgICBsdW1pbm9zaXR5OiAnZGFyaycsXG4gICAgICAgIH0pLFxuICAgICAgICBhbGVydDogcmFuZG9tQ29sb3Ioe1xuICAgICAgICAgIHNlZWQsXG4gICAgICAgICAgaHVlOiAncmVkJyxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIENvbG9yOiBjb2xvclNjYWxhclR5cGUsXG59O1xuXG5leHBvcnQgY2xhc3MgbW9kZWwge30gLy8gdG9kb1xuIl19