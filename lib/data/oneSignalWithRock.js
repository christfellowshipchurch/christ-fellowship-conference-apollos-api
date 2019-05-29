"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolver = void 0;

/* eslint-disable import/prefer-default-export */
const resolver = {
  Mutation: {
    updateUserPushSettings: async (root, {
      input
    }, {
      dataSources
    }) => {
      // register the changes w/ one signal
      const returnValue = await dataSources.OneSignal.updatePushSettings(input); // if the pushProviderUserId is changing, we need ot register the device with rock.

      if (input.pushProviderUserId != null) {
        await dataSources.PersonalDevice.addPersonalDevice({
          pushId: input.pushProviderUserId
        });
      } // return the original return value (which is currentPerson)


      return returnValue;
    }
  }
};
exports.resolver = resolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL29uZVNpZ25hbFdpdGhSb2NrLmpzIl0sIm5hbWVzIjpbInJlc29sdmVyIiwiTXV0YXRpb24iLCJ1cGRhdGVVc2VyUHVzaFNldHRpbmdzIiwicm9vdCIsImlucHV0IiwiZGF0YVNvdXJjZXMiLCJyZXR1cm5WYWx1ZSIsIk9uZVNpZ25hbCIsInVwZGF0ZVB1c2hTZXR0aW5ncyIsInB1c2hQcm92aWRlclVzZXJJZCIsIlBlcnNvbmFsRGV2aWNlIiwiYWRkUGVyc29uYWxEZXZpY2UiLCJwdXNoSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFFBQVEsR0FBRztBQUN0QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLHNCQUFzQixFQUFFLE9BQU9DLElBQVAsRUFBYTtBQUFFQyxNQUFBQTtBQUFGLEtBQWIsRUFBd0I7QUFBRUMsTUFBQUE7QUFBRixLQUF4QixLQUE0QztBQUNsRTtBQUNBLFlBQU1DLFdBQVcsR0FBRyxNQUFNRCxXQUFXLENBQUNFLFNBQVosQ0FBc0JDLGtCQUF0QixDQUF5Q0osS0FBekMsQ0FBMUIsQ0FGa0UsQ0FJbEU7O0FBQ0EsVUFBSUEsS0FBSyxDQUFDSyxrQkFBTixJQUE0QixJQUFoQyxFQUFzQztBQUNwQyxjQUFNSixXQUFXLENBQUNLLGNBQVosQ0FBMkJDLGlCQUEzQixDQUE2QztBQUNqREMsVUFBQUEsTUFBTSxFQUFFUixLQUFLLENBQUNLO0FBRG1DLFNBQTdDLENBQU47QUFHRCxPQVRpRSxDQVdsRTs7O0FBQ0EsYUFBT0gsV0FBUDtBQUNEO0FBZE87QUFEWSxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyID0ge1xuICBNdXRhdGlvbjoge1xuICAgIHVwZGF0ZVVzZXJQdXNoU2V0dGluZ3M6IGFzeW5jIChyb290LCB7IGlucHV0IH0sIHsgZGF0YVNvdXJjZXMgfSkgPT4ge1xuICAgICAgLy8gcmVnaXN0ZXIgdGhlIGNoYW5nZXMgdy8gb25lIHNpZ25hbFxuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBhd2FpdCBkYXRhU291cmNlcy5PbmVTaWduYWwudXBkYXRlUHVzaFNldHRpbmdzKGlucHV0KTtcblxuICAgICAgLy8gaWYgdGhlIHB1c2hQcm92aWRlclVzZXJJZCBpcyBjaGFuZ2luZywgd2UgbmVlZCBvdCByZWdpc3RlciB0aGUgZGV2aWNlIHdpdGggcm9jay5cbiAgICAgIGlmIChpbnB1dC5wdXNoUHJvdmlkZXJVc2VySWQgIT0gbnVsbCkge1xuICAgICAgICBhd2FpdCBkYXRhU291cmNlcy5QZXJzb25hbERldmljZS5hZGRQZXJzb25hbERldmljZSh7XG4gICAgICAgICAgcHVzaElkOiBpbnB1dC5wdXNoUHJvdmlkZXJVc2VySWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm4gdGhlIG9yaWdpbmFsIHJldHVybiB2YWx1ZSAod2hpY2ggaXMgY3VycmVudFBlcnNvbilcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==