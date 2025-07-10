import { FocusableElement } from "./types";
export declare function isHTMLElement(el: any): el is HTMLElement;
export declare function isBrowser(): boolean;
export declare function isInputElement(element: FocusableElement): element is HTMLInputElement;
export declare function isActiveElement(element: FocusableElement): boolean;
export declare function isHiddenElement(element: HTMLElement): boolean;
export declare function isContentEditableElement(element: HTMLElement): boolean;
export declare function isDisabledElement(element: HTMLElement): boolean;
