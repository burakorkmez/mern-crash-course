import { focusOn } from './commands';
import { focusSolver } from './focusSolver';
let guardCount = 0;
let lockDisabled = false;
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
export const moveFocusInside = (topNode, lastNode, options = {}) => {
    const focusable = focusSolver(topNode, lastNode);
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
            setTimeout(() => {
                lockDisabled = false;
            }, 1);
            return;
        }
        guardCount++;
        focusOn(focusable.node, options.focusOptions);
        guardCount--;
    }
};
