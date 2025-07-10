import { isHTMLElement } from './is-element.mjs';

function getOwnerWindow(node) {
  return getOwnerDocument(node)?.defaultView ?? window;
}
function getOwnerDocument(node) {
  return isHTMLElement(node) ? node.ownerDocument : document;
}
function getEventWindow(event) {
  return event.view ?? window;
}
function getActiveElement(node) {
  return getOwnerDocument(node).activeElement;
}

export { getActiveElement, getEventWindow, getOwnerDocument, getOwnerWindow };
