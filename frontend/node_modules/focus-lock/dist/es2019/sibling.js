import { focusOn } from './commands';
import { getTabbableNodes, contains, getFocusableNodes } from './utils/DOMutils';
import { asArray } from './utils/array';
/**
 * for a given `element` in a given `scope` returns focusable siblings
 * @param element - base element
 * @param scope - common parent. Can be document, but better to narrow it down for performance reasons
 * @returns {prev,next} - references to a focusable element before and after
 * @returns undefined - if operation is not applicable
 */
export const getRelativeFocusable = (element, scope, useTabbables) => {
    if (!element || !scope) {
        console.error('no element or scope given');
        return {};
    }
    const shards = asArray(scope);
    if (shards.every((shard) => !contains(shard, element))) {
        console.error('Active element is not contained in the scope');
        return {};
    }
    const focusables = useTabbables
        ? getTabbableNodes(shards, new Map())
        : getFocusableNodes(shards, new Map());
    const current = focusables.findIndex(({ node }) => node === element);
    if (current === -1) {
        // an edge case, when anchor element is not found
        return undefined;
    }
    return {
        prev: focusables[current - 1],
        next: focusables[current + 1],
        first: focusables[0],
        last: focusables[focusables.length - 1],
    };
};
const getBoundary = (shards, useTabbables) => {
    const set = useTabbables
        ? getTabbableNodes(asArray(shards), new Map())
        : getFocusableNodes(asArray(shards), new Map());
    return {
        first: set[0],
        last: set[set.length - 1],
    };
};
const defaultOptions = (options) => Object.assign({
    scope: document.body,
    cycle: true,
    onlyTabbable: true,
}, options);
const moveFocus = (fromElement, options = {}, cb) => {
    const newOptions = defaultOptions(options);
    const solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
    if (!solution) {
        return;
    }
    const target = cb(solution, newOptions.cycle);
    if (target) {
        focusOn(target.node, newOptions.focusOptions);
    }
};
/**
 * focuses next element in the tab-order
 * @param fromElement - common parent to scope active element search or tab cycle order
 * @param {FocusNextOptions} [options] - focus options
 */
export const focusNextElement = (fromElement, options = {}) => {
    moveFocus(fromElement, options, ({ next, first }, cycle) => next || (cycle && first));
};
/**
 * focuses prev element in the tab order
 * @param fromElement - common parent to scope active element search or tab cycle order
 * @param {FocusNextOptions} [options] - focus options
 */
export const focusPrevElement = (fromElement, options = {}) => {
    moveFocus(fromElement, options, ({ prev, last }, cycle) => prev || (cycle && last));
};
const pickBoundary = (scope, options, what) => {
    var _a;
    const boundary = getBoundary(scope, (_a = options.onlyTabbable) !== null && _a !== void 0 ? _a : true);
    const node = boundary[what];
    if (node) {
        focusOn(node.node, options.focusOptions);
    }
};
/**
 * focuses first element in the tab-order
 * @param {FocusNextOptions} options - focus options
 */
export const focusFirstElement = (scope, options = {}) => {
    pickBoundary(scope, options, 'first');
};
/**
 * focuses last element in the tab order
 * @param {FocusNextOptions} options - focus options
 */
export const focusLastElement = (scope, options = {}) => {
    pickBoundary(scope, options, 'last');
};
