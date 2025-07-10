import { UseMediaQueryOptions } from "./use-media-query";
/**
 * React hook used to get the user's animation preference.
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-prefers-reduced-motion
 */
export declare function usePrefersReducedMotion(options?: UseMediaQueryOptions): boolean;
/**
 * React hook for getting the user's color mode preference.
 */
export declare function useColorModePreference(options?: UseMediaQueryOptions): "dark" | "light" | undefined;
