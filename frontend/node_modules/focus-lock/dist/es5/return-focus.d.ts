declare type SetRef = () => Element | null;
declare type Ref = null | (() => Element | null);
declare type ElementLocation = {
    current: SetRef;
    parent: Ref;
    left: Ref;
    right: Ref;
};
declare type Location = {
    stack: ReadonlyArray<ElementLocation>;
    ownerDocument: Document;
    element: SetRef;
};
export declare const recordElementLocation: (element: Element | null) => Location | null;
/**
 * Captures the current focused element to restore focus as close as possible in the future
 * Handles situations where the focused element is removed from the DOM or no longer focusable
 * moving focus to the closest focusable element
 * @param targetElement - element where focus should be restored
 * @returns a function returning a new element to focus
 */
export declare const captureFocusRestore: (targetElement: Element | null) => (() => Element | undefined);
export {};
