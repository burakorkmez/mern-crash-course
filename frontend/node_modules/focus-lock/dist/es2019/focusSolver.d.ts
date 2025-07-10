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
export declare const focusSolver: (topNode: Element | Element[], lastNode: Element | null) => undefined | {
    node: HTMLElement;
};
