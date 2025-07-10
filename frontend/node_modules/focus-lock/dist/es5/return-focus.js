"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captureFocusRestore = exports.recordElementLocation = void 0;
var DOMutils_1 = require("./utils/DOMutils");
function weakRef(value) {
    if (!value)
        return null;
    // #68 Safari 14.1 dont have it yet
    // FIXME: remove in 2025
    if (typeof WeakRef === 'undefined') {
        return function () { return value || null; };
    }
    var w = value ? new WeakRef(value) : null;
    return function () { return (w === null || w === void 0 ? void 0 : w.deref()) || null; };
}
var recordElementLocation = function (element) {
    if (!element) {
        return null;
    }
    var stack = [];
    var currentElement = element;
    while (currentElement && currentElement !== document.body) {
        stack.push({
            current: weakRef(currentElement),
            parent: weakRef(currentElement.parentElement),
            left: weakRef(currentElement.previousElementSibling),
            right: weakRef(currentElement.nextElementSibling),
        });
        currentElement = currentElement.parentElement;
    }
    return {
        element: weakRef(element),
        stack: stack,
        ownerDocument: element.ownerDocument,
    };
};
exports.recordElementLocation = recordElementLocation;
var restoreFocusTo = function (location) {
    var _a, _b, _c, _d, _e;
    if (!location) {
        return undefined;
    }
    var stack = location.stack, ownerDocument = location.ownerDocument;
    var visibilityCache = new Map();
    for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
        var line = stack_1[_i];
        var parent_1 = (_a = line.parent) === null || _a === void 0 ? void 0 : _a.call(line);
        // is it still here?
        if (parent_1 && ownerDocument.contains(parent_1)) {
            var left = (_b = line.left) === null || _b === void 0 ? void 0 : _b.call(line);
            var savedCurrent = line.current();
            var current = parent_1.contains(savedCurrent) ? savedCurrent : undefined;
            var right = (_c = line.right) === null || _c === void 0 ? void 0 : _c.call(line);
            var focusables = (0, DOMutils_1.getTabbableNodes)([parent_1], visibilityCache);
            var aim = 
            // that is element itself
            (_e = (_d = current !== null && current !== void 0 ? current : 
            // or something in it's place
            left === null || left === void 0 ? void 0 : left.nextElementSibling) !== null && _d !== void 0 ? _d : 
            // or somebody to the right, still close enough
            right) !== null && _e !== void 0 ? _e : 
            // or somebody to the left, something?
            left;
            while (aim) {
                for (var _f = 0, focusables_1 = focusables; _f < focusables_1.length; _f++) {
                    var focusable = focusables_1[_f];
                    if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) {
                        return focusable.node;
                    }
                }
                aim = aim.nextElementSibling;
            }
            if (focusables.length) {
                // if parent contains a focusable - move there
                return focusables[0].node;
            }
        }
    }
    // nothing matched
    return undefined;
};
/**
 * Captures the current focused element to restore focus as close as possible in the future
 * Handles situations where the focused element is removed from the DOM or no longer focusable
 * moving focus to the closest focusable element
 * @param targetElement - element where focus should be restored
 * @returns a function returning a new element to focus
 */
var captureFocusRestore = function (targetElement) {
    var location = (0, exports.recordElementLocation)(targetElement);
    return function () {
        return restoreFocusTo(location);
    };
};
exports.captureFocusRestore = captureFocusRestore;
