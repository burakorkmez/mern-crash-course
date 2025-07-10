import _extends from "@babel/runtime/helpers/esm/extends";
import { useContext, useMemo, useRef } from 'react';
import { focusScope } from './scope';
import { mediumEffect } from './medium';
import { extractRef } from './util';
var collapseRefs = function collapseRefs(shards) {
  return shards.map(extractRef).filter(Boolean);
};
var withMedium = function withMedium(fn) {
  return new Promise(function (resolve) {
    return mediumEffect.useMedium(function () {
      resolve(fn.apply(void 0, arguments));
    });
  });
};
export var useFocusController = function useFocusController() {
  for (var _len = arguments.length, shards = new Array(_len), _key = 0; _key < _len; _key++) {
    shards[_key] = arguments[_key];
  }
  if (!shards.length) {
    throw new Error('useFocusController requires at least one target element');
  }
  var ref = useRef(shards);
  ref.current = shards;
  return useMemo(function () {
    return {
      autoFocus: function autoFocus(focusOptions) {
        if (focusOptions === void 0) {
          focusOptions = {};
        }
        return withMedium(function (car) {
          return car.moveFocusInside(collapseRefs(ref.current), null, focusOptions);
        });
      },
      focusNext: function focusNext(options) {
        return withMedium(function (car) {
          car.moveFocusInside(collapseRefs(ref.current), null);
          car.focusNextElement(document.activeElement, _extends({
            scope: collapseRefs(ref.current)
          }, options));
        });
      },
      focusPrev: function focusPrev(options) {
        return withMedium(function (car) {
          car.moveFocusInside(collapseRefs(ref.current), null);
          car.focusPrevElement(document.activeElement, _extends({
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
export var useFocusScope = function useFocusScope() {
  var scope = useContext(focusScope);
  if (!scope) {
    throw new Error('FocusLock is required to operate with FocusScope');
  }
  return useFocusController.apply(void 0, [scope.observed].concat(scope.shards));
};