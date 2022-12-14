(function (React) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var ImageView = function ImageView(props) {
      return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("a", {
        href: props.record.params.imageUrl
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        src: props.record.params.imageUrl,
        alt: "profile-photo",
        width: "100",
        height: "100"
      })));
    };

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.Component1 = ImageView;
    AdminJS.UserComponents.Component2 = ImageView;
    AdminJS.UserComponents.Component3 = ImageView;
    AdminJS.UserComponents.Component4 = ImageView;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9pbWFnZV92aWV3LnRzeCIsIi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEltYWdlVmlldyA9IHByb3BzPT57XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvcHMucmVjb3JkLnBhcmFtcy5pbWFnZVVybH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5yZWNvcmQucGFyYW1zLmltYWdlVXJsfSBcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZS1waG90b1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VWaWV3OyIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IENvbXBvbmVudDEgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvaW1hZ2VfdmlldydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MSA9IENvbXBvbmVudDFcbmltcG9ydCBDb21wb25lbnQyIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2ltYWdlX3ZpZXcnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDIgPSBDb21wb25lbnQyXG5pbXBvcnQgQ29tcG9uZW50MyBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9pbWFnZV92aWV3J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQzID0gQ29tcG9uZW50M1xuaW1wb3J0IENvbXBvbmVudDQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvaW1hZ2VfdmlldydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50NCA9IENvbXBvbmVudDQiXSwibmFtZXMiOlsiSW1hZ2VWaWV3IiwicHJvcHMiLCJSZWFjdCIsInJlY29yZCIsInBhcmFtcyIsImltYWdlVXJsIiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiQ29tcG9uZW50MSIsIkNvbXBvbmVudDIiLCJDb21wb25lbnQzIiwiQ29tcG9uZW50NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEtBQUssRUFBRTtJQUNqQixFQUFBLG9CQUNRQyx5QkFDSSxDQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxlQUFBQSx5QkFBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLEVBQUE7SUFBRyxJQUFBLElBQUksRUFBRUQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLFFBQUFBO09BQzdCLGVBQUFILHlCQUFBLENBQUEsYUFBQSxDQUFBLEtBQUEsRUFBQTtJQUFLLElBQUEsR0FBRyxFQUFFRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsUUFBOUI7SUFDQSxJQUFBLEdBQUcsRUFBQyxlQURKO0lBRUEsSUFBQSxLQUFLLEVBQUMsS0FGTjtJQUVZLElBQUEsTUFBTSxFQUFDLEtBQUE7SUFGbkIsR0FBQSxDQURBLENBREosQ0FEUixDQUFBO0lBVUgsQ0FYTDs7SUNGQUMsT0FBTyxDQUFDQyxjQUFSLEdBQXlCLEVBQXpCLENBQUE7SUFFQUQsT0FBTyxDQUFDQyxjQUFSLENBQXVCQyxVQUF2QixHQUFvQ0EsU0FBcEMsQ0FBQTtJQUVBRixPQUFPLENBQUNDLGNBQVIsQ0FBdUJFLFVBQXZCLEdBQW9DQSxTQUFwQyxDQUFBO0lBRUFILE9BQU8sQ0FBQ0MsY0FBUixDQUF1QkcsVUFBdkIsR0FBb0NBLFNBQXBDLENBQUE7SUFFQUosT0FBTyxDQUFDQyxjQUFSLENBQXVCSSxVQUF2QixHQUFvQ0EsU0FBcEM7Ozs7OzsifQ==
