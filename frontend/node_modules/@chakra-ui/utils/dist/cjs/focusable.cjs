'use strict';

var tabbable = require('./tabbable.cjs');

const focusableElList = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
const focusableElSelector = focusableElList.join();
const isVisible = (el) => el.offsetWidth > 0 && el.offsetHeight > 0;
function getAllFocusable(container) {
  const focusableEls = Array.from(
    container.querySelectorAll(focusableElSelector)
  );
  focusableEls.unshift(container);
  return focusableEls.filter((el) => tabbable.isFocusable(el) && isVisible(el));
}
function getFirstFocusable(container) {
  const allFocusable = getAllFocusable(container);
  return allFocusable.length ? allFocusable[0] : null;
}
function getAllTabbable(container, fallbackToFocusable) {
  const allFocusable = Array.from(
    container.querySelectorAll(focusableElSelector)
  );
  const allTabbable = allFocusable.filter(tabbable.isTabbable);
  if (tabbable.isTabbable(container)) {
    allTabbable.unshift(container);
  }
  if (!allTabbable.length && fallbackToFocusable) {
    return allFocusable;
  }
  return allTabbable;
}
function getFirstTabbableIn(container, fallbackToFocusable) {
  const [first] = getAllTabbable(container, fallbackToFocusable);
  return first || null;
}
function getLastTabbableIn(container, fallbackToFocusable) {
  const allTabbable = getAllTabbable(container, fallbackToFocusable);
  return allTabbable[allTabbable.length - 1] || null;
}
function getNextTabbable(container, fallbackToFocusable) {
  const allFocusable = getAllFocusable(container);
  const index = allFocusable.indexOf(document.activeElement);
  const slice = allFocusable.slice(index + 1);
  return slice.find(tabbable.isTabbable) || allFocusable.find(tabbable.isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
function getPreviousTabbable(container, fallbackToFocusable) {
  const allFocusable = getAllFocusable(container).reverse();
  const index = allFocusable.indexOf(document.activeElement);
  const slice = allFocusable.slice(index + 1);
  return slice.find(tabbable.isTabbable) || allFocusable.find(tabbable.isTabbable) || (fallbackToFocusable ? slice[0] : null);
}

exports.getAllFocusable = getAllFocusable;
exports.getAllTabbable = getAllTabbable;
exports.getFirstFocusable = getFirstFocusable;
exports.getFirstTabbableIn = getFirstTabbableIn;
exports.getLastTabbableIn = getLastTabbableIn;
exports.getNextTabbable = getNextTabbable;
exports.getPreviousTabbable = getPreviousTabbable;
