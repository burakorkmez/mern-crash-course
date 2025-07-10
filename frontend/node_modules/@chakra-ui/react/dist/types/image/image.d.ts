/// <reference types="react" />
import { SystemProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { NativeImageOptions } from "./native-image";
import { FallbackStrategy, UseImageProps } from "./use-image";
interface ImageOptions extends NativeImageOptions {
    /**
     * Fallback image `src` to show if image is loading or image fails.
     *
     * Note 🚨: We recommend you use a local image
     */
    fallbackSrc?: string;
    /**
     * Fallback element to show if image is loading or image fails.
     * @type React.ReactElement
     */
    fallback?: React.ReactElement;
    /**
     * Defines loading strategy
     */
    loading?: "eager" | "lazy";
    /**
     * How the image to fit within its bounds.
     * It maps to css `object-fit` property.
     * @type SystemProps["objectFit"]
     */
    fit?: SystemProps["objectFit"];
    /**
     * How to align the image within its bounds.
     * It maps to css `object-position` property.
     * @type SystemProps["objectPosition"]
     */
    align?: SystemProps["objectPosition"];
    /**
     * If `true`, opt out of the `fallbackSrc` logic and use as `img`
     *
     * @default false
     */
    ignoreFallback?: boolean;
    /**
     * - beforeLoadOrError(default): loads the fallbackImage while loading the src
     * - onError: loads the fallbackImage only if there is an error fetching the src
     *
     * @default "beforeLoadOrError"
     * @see Issue https://github.com/chakra-ui/chakra-ui/issues/5581
     */
    fallbackStrategy?: FallbackStrategy;
    /**
     * Defining which referrer is sent when fetching the resource.
     * @type React.HTMLAttributeReferrerPolicy
     */
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}
export interface ImageProps extends UseImageProps, Omit<HTMLChakraProps<"img">, keyof UseImageProps>, ImageOptions {
}
/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://chakra-ui.com/image
 */
export declare const Image: import("../system").ComponentWithAs<"img", ImageProps>;
export {};
