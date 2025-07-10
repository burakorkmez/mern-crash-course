'use strict';

function callAll(...fns) {
  return function mergedFn(...args) {
    fns.forEach((fn) => fn?.(...args));
  };
}
function callAllHandlers(...fns) {
  return function func(event) {
    fns.some((fn) => {
      fn?.(event);
      return event?.defaultPrevented;
    });
  };
}

exports.callAll = callAll;
exports.callAllHandlers = callAllHandlers;
