import { ResponsiveValue } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
interface AspectRatioOptions {
    /**
     * The aspect ratio of the Box. Common values are:
     *
     * `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
     */
    ratio?: ResponsiveValue<number>;
}
export interface AspectRatioProps extends Omit<HTMLChakraProps<"div">, "aspectRatio">, AspectRatioOptions {
}
/**
 * React component used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 *
 * @see Docs https://chakra-ui.com/aspectratiobox
 */
export declare const AspectRatio: import("../system").ComponentWithAs<"div", AspectRatioProps>;
export {};
