'use strict';

var isEvent = require('./is-event.cjs');

function pointFromTouch(e, type = "page") {
  const point = e.touches[0] || e.changedTouches[0];
  return { x: point[`${type}X`], y: point[`${type}Y`] };
}
function pointFromMouse(point, type = "page") {
  return {
    x: point[`${type}X`],
    y: point[`${type}Y`]
  };
}
function getEventPoint(event, type = "page") {
  return isEvent.isTouchEvent(event) ? pointFromTouch(event, type) : pointFromMouse(event, type);
}

exports.getEventPoint = getEventPoint;
