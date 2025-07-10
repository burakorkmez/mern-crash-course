interface FocusLockFocusOptions {
    focusOptions?: FocusOptions;
}
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
export declare const moveFocusInside: (topNode: HTMLElement, lastNode: Element, options?: FocusLockFocusOptions) => void;
export {};
