"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusSolver = void 0;
var solver_1 = require("./solver");
var DOMutils_1 = require("./utils/DOMutils");
var all_affected_1 = require("./utils/all-affected");
var array_1 = require("./utils/array");
var auto_focus_1 = require("./utils/auto-focus");
var getActiveElement_1 = require("./utils/getActiveElement");
var is_1 = require("./utils/is");
var parenting_1 = require("./utils/parenting");
var reorderNodes = function (srcNodes, dstNodes) {
    var remap = new Map();
    // no Set(dstNodes) for IE11 :(
    dstNodes.forEach(function (entity) { return remap.set(entity.node, entity); });
    // remap to dstNodes
    return srcNodes.map(function (node) { return remap.get(node); }).filter(is_1.isDefined);
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
var focusSolver = function (topNode, lastNode) {
    var activeElement = (0, getActiveElement_1.getActiveElement)((0, array_1.asArray)(topNode).length > 0 ? document : (0, array_1.getFirst)(topNode).ownerDocument);
    var entries = (0, all_affected_1.getAllAffectedNodes)(topNode).filter(is_1.isNotAGuard);
    var commonParent = (0, parenting_1.getTopCommonParent)(activeElement || topNode, topNode, entries);
    var visibilityCache = new Map();
    var anyFocusable = (0, DOMutils_1.getFocusableNodes)(entries, visibilityCache);
    var innerElements = anyFocusable.filter(function (_a) {
        var node = _a.node;
        return (0, is_1.isNotAGuard)(node);
    });
    if (!innerElements[0]) {
        return undefined;
    }
    var outerNodes = (0, DOMutils_1.getFocusableNodes)([commonParent], visibilityCache).map(function (_a) {
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
    var newId = (0, solver_1.newFocus)(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
    if (newId === solver_1.NEW_FOCUS) {
        var focusNode = 
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        (0, auto_focus_1.pickAutofocus)(anyFocusable, innerTabbable, (0, parenting_1.allParentAutofocusables)(entries, visibilityCache)) ||
            (0, auto_focus_1.pickAutofocus)(anyFocusable, innerFocusables, (0, parenting_1.allParentAutofocusables)(entries, visibilityCache));
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
exports.focusSolver = focusSolver;
