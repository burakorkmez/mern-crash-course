import { BoxProps } from "./box";
/**
 * As a constraint, you can't pass size related props
 * Only `size` would be allowed
 */
type Omitted = "size" | "boxSize" | "width" | "height" | "w" | "h";
export interface SquareProps extends Omit<BoxProps, Omitted> {
    /**
     * The size (width and height) of the square
     */
    size?: BoxProps["width"];
    /**
     * If `true`, the content will be centered in the square
     *
     * @default false
     */
    centerContent?: boolean;
}
export declare const Square: import("../system").ComponentWithAs<"div", SquareProps>;
export {};
