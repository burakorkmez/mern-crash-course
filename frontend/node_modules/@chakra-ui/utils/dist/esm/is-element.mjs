function isHTMLElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isBrowser() {
  return Boolean(globalThis?.document);
}
function isInputElement(element) {
  return isHTMLElement(element) && element.localName === "input" && "select" in element;
}
function isActiveElement(element) {
  const doc = isHTMLElement(element) ? element.ownerDocument : document;
  return doc.activeElement === element;
}
function isHiddenElement(element) {
  if (element.parentElement && isHiddenElement(element.parentElement))
    return true;
  return element.hidden;
}
function isContentEditableElement(element) {
  const value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isDisabledElement(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}

export { isActiveElement, isBrowser, isContentEditableElement, isDisabledElement, isHTMLElement, isHiddenElement, isInputElement };
