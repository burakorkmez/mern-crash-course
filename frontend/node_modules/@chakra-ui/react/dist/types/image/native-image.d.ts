/// <reference types="react" />
import { PropsOf } from "../system";
export interface NativeImageOptions {
    /**
     * The native HTML `width` attribute to the passed to the `img`
     */
    htmlWidth?: string | number;
    /**
     * The native HTML `height` attribute to the passed to the `img`
     */
    htmlHeight?: string | number;
}
interface NativeImageProps extends PropsOf<"img">, NativeImageOptions {
}
export declare const NativeImage: import("../system").ComponentWithAs<import("react").ElementType, NativeImageProps>;
export {};
