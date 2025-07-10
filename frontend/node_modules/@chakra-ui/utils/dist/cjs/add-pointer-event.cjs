'use strict';

var addDomEvent = require('./add-dom-event.cjs');
var isEvent = require('./is-event.cjs');
var eventPoint = require('./event-point.cjs');

function filter(cb) {
  return (event) => {
    const isMouse = isEvent.isMouseEvent(event);
    if (!isMouse || isMouse && event.button === 0) {
      cb(event);
    }
  };
}
function wrap(cb, filterPrimary = false) {
  function listener(event) {
    cb(event, { point: eventPoint.getEventPoint(event) });
  }
  const fn = filterPrimary ? filter(listener) : listener;
  return fn;
}
function addPointerEvent(target, type, cb, options) {
  return addDomEvent.addDomEvent(target, type, wrap(cb, type === "pointerdown"), options);
}

exports.addPointerEvent = addPointerEvent;
