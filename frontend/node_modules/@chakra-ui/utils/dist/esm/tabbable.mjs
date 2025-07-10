import { isHTMLElement, isHiddenElement, isDisabledElement, isContentEditableElement } from './is-element.mjs';

const hasDisplayNone = (element) => window.getComputedStyle(element).display === "none";
const hasTabIndex = (element) => element.hasAttribute("tabindex");
const hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function hasFocusWithin(element) {
  if (!document.activeElement)
    return false;
  return element.contains(document.activeElement);
}
function isFocusable(element) {
  if (!isHTMLElement(element) || isHiddenElement(element) || isDisabledElement(element)) {
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
  if (isContentEditableElement(element))
    return true;
  return hasTabIndex(element);
}
function isTabbable(element) {
  if (!element)
    return false;
  return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

export { hasDisplayNone, hasFocusWithin, hasNegativeTabIndex, hasTabIndex, isFocusable, isTabbable };
