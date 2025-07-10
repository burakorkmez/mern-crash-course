export interface UseFocusOnMouseDownProps {
    enabled?: boolean;
    ref: React.RefObject<HTMLElement | null>;
    elements?: Array<React.RefObject<HTMLElement | null> | HTMLElement | null>;
}
/**
 * Polyfill to get `relatedTarget` working correctly consistently
 * across all browsers.
 *
 * It ensures that elements receives focus on pointer down if
 * it's not the active element.
 *
 * @internal
 */
export declare function useFocusOnPointerDown(props: UseFocusOnMouseDownProps): void;
