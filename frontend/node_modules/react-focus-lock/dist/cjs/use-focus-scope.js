"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFocusScope = exports.useFocusController = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _scope = require("./scope");
var _medium = require("./medium");
var _util = require("./util");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var collapseRefs = function collapseRefs(shards) {
  return shards.map(_util.extractRef).filter(Boolean);
};
var withMedium = function withMedium(fn) {
  return new Promise(function (resolve) {
    return _medium.mediumEffect.useMedium(function () {
      resolve(fn.apply(void 0, arguments));
    });
  });
};
var useFocusController = exports.useFocusController = function useFocusController() {
  for (var _len = arguments.length, shards = new Array(_len), _key = 0; _key < _len; _key++) {
    shards[_key] = arguments[_key];
  }
  if (!shards.length) {
    throw new Error('useFocusController requires at least one target element');
  }
  var ref = (0, _react.useRef)(shards);
  ref.current = shards;
  return (0, _react.useMemo)(function () {
    return {
      autoFocus: function autoFocus() {
        var focusOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return withMedium(function (car) {
          return car.moveFocusInside(collapseRefs(ref.current), null, focusOptions);
        });
      },
      focusNext: function focusNext(options) {
        return withMedium(function (car) {
          car.moveFocusInside(collapseRefs(ref.current), null);
          car.focusNextElement(document.activeElement, _objectSpread({
            scope: collapseRefs(ref.current)
          }, options));
        });
      },
      focusPrev: function focusPrev(options) {
        return withMedium(function (car) {
          car.moveFocusInside(collapseRefs(ref.current), null);
          car.focusPrevElement(document.activeElement, _objectSpread({
            scope: collapseRefs(ref.current)
          }, options));
        });
      },
      focusFirst: function focusFirst(options) {
        return withMedium(function (car) {
          car.focusFirstElement(collapseRefs(ref.current), options);
        });
      },
      focusLast: function focusLast(options) {
        return withMedium(function (car) {
          car.focusLastElement(collapseRefs(ref.current), options);
        });
      }
    };
  }, []);
};
var useFocusScope = exports.useFocusScope = function useFocusScope() {
  var scope = (0, _react.useContext)(_scope.focusScope);
  if (!scope) {
    throw new Error('FocusLock is required to operate with FocusScope');
  }
  return useFocusController.apply(void 0, [scope.observed].concat((0, _toConsumableArray2["default"])(scope.shards)));
};