"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFocusInside = void 0;
var commands_1 = require("./commands");
var focusSolver_1 = require("./focusSolver");
var guardCount = 0;
var lockDisabled = false;
/**
 * The main functionality of the focus-lock package
 *
 * Contains focus at a given node.
 * The last focused element will help to determine which element(first or last) should be focused.
 * The found element will be focused.
 *
 * This is one time action (move), not a persistent focus-lock
 *
 * HTML markers (see {@link import('./constants').FOCUS_AUTO} constants) can control autofocus
 * @see {@link focusSolver} for the same functionality without autofocus
 */
var moveFocusInside = function (topNode, lastNode, options) {
    if (options === void 0) { options = {}; }
    var focusable = (0, focusSolver_1.focusSolver)(topNode, lastNode);
    // global local side effect to countain recursive lock activation and resolve focus-fighting
    if (lockDisabled) {
        return;
    }
    if (focusable) {
        /** +FOCUS-FIGHTING prevention **/
        if (guardCount > 2) {
            // we have recursive entered back the lock activation
            console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' +
                'See https://github.com/theKashey/focus-lock/#focus-fighting');
            lockDisabled = true;
            setTimeout(function () {
                lockDisabled = false;
            }, 1);
            return;
        }
        guardCount++;
        (0, commands_1.focusOn)(focusable.node, options.focusOptions);
        guardCount--;
    }
};
exports.moveFocusInside = moveFocusInside;
