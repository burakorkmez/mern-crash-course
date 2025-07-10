import { FocusableElement } from "@chakra-ui/utils";
import type { RefObject } from "react";
export interface UseFocusOnHideOptions {
    focusRef: RefObject<FocusableElement | null>;
    shouldFocus?: boolean;
    visible?: boolean;
}
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */
export declare function useFocusOnHide(containerRef: RefObject<HTMLElement | null>, options: UseFocusOnHideOptions): void;
export interface UseFocusOnShowOptions {
    visible?: boolean;
    shouldFocus?: boolean;
    preventScroll?: boolean;
    focusRef?: React.RefObject<FocusableElement | null>;
}
export declare function useFocusOnShow<T extends HTMLElement>(target: React.RefObject<T | null> | T, options?: UseFocusOnShowOptions): void;
