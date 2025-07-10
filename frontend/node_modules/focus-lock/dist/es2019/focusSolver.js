import { NEW_FOCUS, newFocus } from './solver';
import { getFocusableNodes } from './utils/DOMutils';
import { getAllAffectedNodes } from './utils/all-affected';
import { asArray, getFirst } from './utils/array';
import { pickAutofocus } from './utils/auto-focus';
import { getActiveElement } from './utils/getActiveElement';
import { isDefined, isNotAGuard } from './utils/is';
import { allParentAutofocusables, getTopCommonParent } from './utils/parenting';
const reorderNodes = (srcNodes, dstNodes) => {
    const remap = new Map();
    // no Set(dstNodes) for IE11 :(
    dstNodes.forEach((entity) => remap.set(entity.node, entity));
    // remap to dstNodes
    return srcNodes.map((node) => remap.get(node)).filter(isDefined);
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
export const focusSolver = (topNode, lastNode) => {
    const activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
    const entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    const commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
    const visibilityCache = new Map();
    const anyFocusable = getFocusableNodes(entries, visibilityCache);
    const innerElements = anyFocusable.filter(({ node }) => isNotAGuard(node));
    if (!innerElements[0]) {
        return undefined;
    }
    const outerNodes = getFocusableNodes([commonParent], visibilityCache).map(({ node }) => node);
    const orderedInnerElements = reorderNodes(outerNodes, innerElements);
    // collect inner focusable and separately tabbables
    const innerFocusables = orderedInnerElements.map(({ node }) => node);
    const innerTabbable = orderedInnerElements.filter(({ tabIndex }) => tabIndex >= 0).map(({ node }) => node);
    const newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
    if (newId === NEW_FOCUS) {
        const focusNode = 
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
