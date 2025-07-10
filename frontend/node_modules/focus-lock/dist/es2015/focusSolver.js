import { NEW_FOCUS, newFocus } from './solver';
import { getFocusableNodes } from './utils/DOMutils';
import { getAllAffectedNodes } from './utils/all-affected';
import { asArray, getFirst } from './utils/array';
import { pickAutofocus } from './utils/auto-focus';
import { getActiveElement } from './utils/getActiveElement';
import { isDefined, isNotAGuard } from './utils/is';
import { allParentAutofocusables, getTopCommonParent } from './utils/parenting';
var reorderNodes = function (srcNodes, dstNodes) {
    var remap = new Map();
    // no Set(dstNodes) for IE11 :(
    dstNodes.forEach(function (entity) { return remap.set(entity.node, entity); });
    // remap to dstNodes
    return srcNodes.map(function (node) { return remap.get(node); }).filter(isDefined);
};
/**
 * contains the main logic of the `focus-lock` package.
 *
 * ! you probably dont need this function !
 *
 * given top node(s) and the last active element returns the element to be focused next
 * @returns element which should be focused to move focus inside
 * @param topNode
 * @param lastNode
 */
export var focusSolver = function (topNode, lastNode) {
    var activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
    var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
    var visibilityCache = new Map();
    var anyFocusable = getFocusableNodes(entries, visibilityCache);
    var innerElements = anyFocusable.filter(function (_a) {
        var node = _a.node;
        return isNotAGuard(node);
    });
    if (!innerElements[0]) {
        return undefined;
    }
    var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var orderedInnerElements = reorderNodes(outerNodes, innerElements);
    // collect inner focusable and separately tabbables
    var innerFocusables = orderedInnerElements.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var innerTabbable = orderedInnerElements.filter(function (_a) {
        var tabIndex = _a.tabIndex;
        return tabIndex >= 0;
    }).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
    if (newId === NEW_FOCUS) {
        var focusNode = 
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) ||
            pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache));
        if (focusNode) {
            return { node: focusNode };
        }
        else {
            console.warn('focus-lock: cannot find any node to move focus into');
            return undefined;
        }
    }
    if (newId === undefined) {
        return newId;
    }
    return orderedInnerElements[newId];
};
