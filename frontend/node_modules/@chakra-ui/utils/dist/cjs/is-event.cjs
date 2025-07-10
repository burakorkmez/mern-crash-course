'use strict';

var owner = require('./owner.cjs');

function isMouseEvent(event) {
  const win = owner.getEventWindow(event);
  if (typeof win.PointerEvent !== "undefined" && event instanceof win.PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof win.MouseEvent;
}
function isTouchEvent(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}
function isMultiTouchEvent(event) {
  return isTouchEvent(event) && event.touches.length > 1;
}

exports.isMouseEvent = isMouseEvent;
exports.isMultiTouchEvent = isMultiTouchEvent;
exports.isTouchEvent = isTouchEvent;
