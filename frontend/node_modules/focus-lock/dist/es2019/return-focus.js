import { getTabbableNodes } from './utils/DOMutils';
function weakRef(value) {
    if (!value)
        return null;
    // #68 Safari 14.1 dont have it yet
    // FIXME: remove in 2025
    if (typeof WeakRef === 'undefined') {
        return () => value || null;
    }
    const w = value ? new WeakRef(value) : null;
    return () => (w === null || w === void 0 ? void 0 : w.deref()) || null;
}
export const recordElementLocation = (element) => {
    if (!element) {
        return null;
    }
    const stack = [];
    let currentElement = element;
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
        stack,
        ownerDocument: element.ownerDocument,
    };
};
const restoreFocusTo = (location) => {
    var _a, _b, _c, _d, _e;
    if (!location) {
        return undefined;
    }
    const { stack, ownerDocument } = location;
    const visibilityCache = new Map();
    for (const line of stack) {
        const parent = (_a = line.parent) === null || _a === void 0 ? void 0 : _a.call(line);
        // is it still here?
        if (parent && ownerDocument.contains(parent)) {
            const left = (_b = line.left) === null || _b === void 0 ? void 0 : _b.call(line);
            const savedCurrent = line.current();
            const current = parent.contains(savedCurrent) ? savedCurrent : undefined;
            const right = (_c = line.right) === null || _c === void 0 ? void 0 : _c.call(line);
            const focusables = getTabbableNodes([parent], visibilityCache);
            let aim = 
            // that is element itself
            (_e = (_d = current !== null && current !== void 0 ? current : 
            // or something in it's place
            left === null || left === void 0 ? void 0 : left.nextElementSibling) !== null && _d !== void 0 ? _d : 
            // or somebody to the right, still close enough
            right) !== null && _e !== void 0 ? _e : 
            // or somebody to the left, something?
            left;
            while (aim) {
                for (const focusable of focusables) {
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
export const captureFocusRestore = (targetElement) => {
    const location = recordElementLocation(targetElement);
    return () => {
        return restoreFocusTo(location);
    };
};
