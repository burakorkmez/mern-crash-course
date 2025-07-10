'use strict';

var isElement = require('./is-element.cjs');

const hasDisplayNone = (element) => window.getComputedStyle(element).display === "none";
const hasTabIndex = (element) => element.hasAttribute("tabindex");
const hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function hasFocusWithin(element) {
  if (!document.activeElement)
    return false;
  return element.contains(document.activeElement);
}
function isFocusable(element) {
  if (!isElement.isHTMLElement(element) || isElement.isHiddenElement(element) || isElement.isDisabledElement(element)) {
    return false;
  }
  const { localName } = element;
  const focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0)
    return true;
  const others = {
    a: () => element.hasAttribute("href"),
    audio: () => element.hasAttribute("controls"),
    video: () => element.hasAttribute("controls")
  };
  if (localName in others) {
    return others[localName]();
  }
  if (isElement.isContentEditableElement(element))
    return true;
  return hasTabIndex(element);
}
function isTabbable(element) {
  if (!element)
    return false;
  return isElement.isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

exports.hasDisplayNone = hasDisplayNone;
exports.hasFocusWithin = hasFocusWithin;
exports.hasNegativeTabIndex = hasNegativeTabIndex;
exports.hasTabIndex = hasTabIndex;
exports.isFocusable = isFocusable;
exports.isTabbable = isTabbable;
