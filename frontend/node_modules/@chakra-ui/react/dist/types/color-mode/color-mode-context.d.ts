/// <reference types="react" />
import { ColorModeContextType } from "./color-mode-types";
export declare const ColorModeContext: import("react").Context<ColorModeContextType>;
/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */
export declare function useColorMode(): ColorModeContextType;
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export declare function useColorModeValue<TLight = unknown, TDark = unknown>(light: TLight, dark: TDark): TLight | TDark;
