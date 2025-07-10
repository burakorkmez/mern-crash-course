/**
 * returns current active element. If the active element is a "container" itself(shadowRoot or iframe) returns active element inside it
 * @param [inDocument]
 */
export declare const getActiveElement: (inDocument?: Document | ShadowRoot | undefined) => HTMLElement | undefined;
