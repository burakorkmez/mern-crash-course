"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNanoEvents = void 0;
var createNanoEvents = exports.createNanoEvents = function createNanoEvents() {
  return {
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var i = 0, callbacks = this.events[event] || [], length = callbacks.length; i < length; i++) {
        callbacks[i].apply(callbacks, args);
      }
    },
    events: {},
    on: function on(event, cb) {
      var _this$events,
        _this = this;
      ((_this$events = this.events)[event] || (_this$events[event] = [])).push(cb);
      return function () {
        var _this$events$event;
        _this.events[event] = (_this$events$event = _this.events[event]) === null || _this$events$event === void 0 ? void 0 : _this$events$event.filter(function (i) {
          return cb !== i;
        });
      };
    }
  };
};