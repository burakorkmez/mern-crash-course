import { addDomEvent } from './add-dom-event.mjs';
import { isMouseEvent } from './is-event.mjs';
import { getEventPoint } from './event-point.mjs';

function filter(cb) {
  return (event) => {
    const isMouse = isMouseEvent(event);
    if (!isMouse || isMouse && event.button === 0) {
      cb(event);
    }
  };
}
function wrap(cb, filterPrimary = false) {
  function listener(event) {
    cb(event, { point: getEventPoint(event) });
  }
  const fn = filterPrimary ? filter(listener) : listener;
  return fn;
}
function addPointerEvent(target, type, cb, options) {
  return addDomEvent(target, type, wrap(cb, type === "pointerdown"), options);
}

export { addPointerEvent };
