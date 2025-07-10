import { ResponsiveValue, SystemStyleObject } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface IndicatorOptions {
    /**
     * The x offset of the indicator
     */
    offsetX?: SystemStyleObject["left"];
    /**
     * The y offset of the indicator
     */
    offsetY?: SystemStyleObject["top"];
    /**
     * The x and y offset of the indicator
     */
    offset?: SystemStyleObject["top"];
    /**
     * The placement of the indicator
     * @default "top-end"
     */
    placement?: ResponsiveValue<"bottom-end" | "bottom-start" | "top-end" | "top-start" | "bottom-center" | "top-center" | "middle-center" | "middle-end" | "middle-start">;
}
export interface IndicatorProps extends Omit<HTMLChakraProps<"div">, keyof IndicatorOptions>, IndicatorOptions {
}
export declare const Indicator: import("../system").ComponentWithAs<"div", IndicatorProps>;
