import { SystemProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface GridOptions {
    /**
     * Shorthand prop for `gridTemplateColumns`
     * @type SystemProps["gridTemplateColumns"]
     */
    templateColumns?: SystemProps["gridTemplateColumns"];
    /**
     * Shorthand prop for `gridGap`
     * @type SystemProps["gridGap"]
     */
    gap?: SystemProps["gridGap"];
    /**
     * Shorthand prop for `gridRowGap`
     * @type SystemProps["gridRowGap"]
     */
    rowGap?: SystemProps["gridRowGap"];
    /**
     * Shorthand prop for `gridColumnGap`
     * @type SystemProps["gridColumnGap"]
     */
    columnGap?: SystemProps["gridColumnGap"];
    /**
     * Shorthand prop for `gridAutoFlow`
     * @type SystemProps["gridAutoFlow"]
     */
    autoFlow?: SystemProps["gridAutoFlow"];
    /**
     * Shorthand prop for `gridAutoRows`
     * @type SystemProps["gridAutoRows"]
     */
    autoRows?: SystemProps["gridAutoRows"];
    /**
     * Shorthand prop for `gridAutoColumns`
     * @type SystemProps["gridAutoColumns"]
     */
    autoColumns?: SystemProps["gridAutoColumns"];
    /**
     * Shorthand prop for `gridTemplateRows`
     * @type SystemProps["gridTemplateRows"]
     */
    templateRows?: SystemProps["gridTemplateRows"];
    /**
     * Shorthand prop for `gridTemplateAreas`
     * @type SystemProps["gridTemplateAreas"]
     */
    templateAreas?: SystemProps["gridTemplateAreas"];
    /**
     * Shorthand prop for `gridColumn`
     * @type SystemProps["gridColumn"]
     */
    column?: SystemProps["gridColumn"];
    /**
     * Shorthand prop for `gridRow`
     * @type SystemProps["gridRow"]
     */
    row?: SystemProps["gridRow"];
}
export interface GridProps extends Omit<HTMLChakraProps<"div">, keyof GridOptions>, GridOptions {
}
/**
 * React component used to create grid layouts.
 *
 * It renders a `div` with `display: grid` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/grid
 */
export declare const Grid: import("../system").ComponentWithAs<"div", GridProps>;
