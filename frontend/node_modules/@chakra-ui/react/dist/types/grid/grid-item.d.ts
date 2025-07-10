import { ResponsiveValue, SystemProps } from "@chakra-ui/styled-system";
import { BoxProps } from "../box/box";
export interface GridItemProps extends BoxProps {
    /**
     * Shorthand prop for `gridArea`
     * @type SystemProps["gridArea"]
     */
    area?: SystemProps["gridArea"];
    /**
     * The number of columns the grid item should `span`.
     * @type ResponsiveValue<number | "auto">
     */
    colSpan?: ResponsiveValue<number | "auto">;
    /**
     * The column number the grid item should start.
     * @type ResponsiveValue<number | "auto">
     */
    colStart?: ResponsiveValue<number | "auto">;
    /**
     * @type ResponsiveValue<number | "auto">
     */
    colEnd?: ResponsiveValue<number | "auto">;
    /**
     * @type ResponsiveValue<number | "auto">
     */
    rowStart?: ResponsiveValue<number | "auto">;
    /**
     * @type ResponsiveValue<number | "auto">
     */
    rowEnd?: ResponsiveValue<number | "auto">;
    /**
     * @type ResponsiveValue<number | "auto">
     */
    rowSpan?: ResponsiveValue<number | "auto">;
}
export declare const GridItem: import("../system").ComponentWithAs<"div", GridItemProps>;
