'use strict';

var isElement = require('./is-element.cjs');

function getOwnerWindow(node) {
  return getOwnerDocument(node)?.defaultView ?? window;
}
function getOwnerDocument(node) {
  return isElement.isHTMLElement(node) ? node.ownerDocument : document;
}
function getEventWindow(event) {
  return event.view ?? window;
}
function getActiveElement(node) {
  return getOwnerDocument(node).activeElement;
}

exports.getActiveElement = getActiveElement;
exports.getEventWindow = getEventWindow;
exports.getOwnerDocument = getOwnerDocument;
exports.getOwnerWindow = getOwnerWindow;
