/// <reference types="react" />
interface VisibilityProps {
    ssr?: boolean;
    breakpoint: string;
    hide?: boolean;
    children: React.ReactNode;
}
/**
 * Visibility
 *
 * React component to control the visibility of its
 * children based on the current breakpoint
 */
export declare function Visibility(props: VisibilityProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
