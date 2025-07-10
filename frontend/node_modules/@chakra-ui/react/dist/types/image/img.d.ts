import { HTMLChakraProps } from "../system";
import { NativeImageOptions } from "./native-image";
export interface ImgProps extends HTMLChakraProps<"img">, NativeImageOptions {
}
/**
 * Fallback component for most SSR users who want to use the native `img` with
 * support for chakra props
 */
export declare const Img: import("../system").ComponentWithAs<"img", ImgProps>;
