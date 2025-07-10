/// <reference types="react" />
export interface ShowProps {
    /**
     * A custom css media query that determines when the `children` are rendered.
     * Will render `children` if that query resolves to `true`.
     */
    breakpoint?: string;
    /**
     * A value from the `breakpoints` section in the theme. Will render `children`
     * from that breakpoint and below. Default breakpoint values: `sm`, `md`, `lg`, `xl`, `2xl`.
     */
    below?: string;
    /**
     * A value from the `breakpoints` section in the theme. Will render `children`
     * from that breakpoint and above. Default breakpoint values: `sm`, `md`, `lg`, `xl`, `2xl`.
     */
    above?: string;
    ssr?: boolean;
    children?: React.ReactNode;
}
/**
 * `Show` wraps a component to render if the provided media query matches.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/show-hide
 */
export declare function Show(props: ShowProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Show {
    var displayName: string;
}
