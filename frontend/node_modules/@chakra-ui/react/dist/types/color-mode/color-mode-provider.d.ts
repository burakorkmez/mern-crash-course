/// <reference types="react" />
import { ColorMode, ColorModeOptions } from "./color-mode-types";
import { StorageManager } from "./storage-manager";
export interface ColorModeProviderProps {
    value?: ColorMode;
    children?: React.ReactNode;
    options?: ColorModeOptions;
    colorModeManager?: StorageManager;
}
/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
export declare const ColorModeProvider: React.FC<ColorModeProviderProps>;
/**
 * Locks the color mode to `dark`, without any way to change it.
 */
export declare function DarkMode(props: React.PropsWithChildren<{}>): import("react/jsx-runtime").JSX.Element;
export declare namespace DarkMode {
    var displayName: string;
}
/**
 * Locks the color mode to `light` without any way to change it.
 */
export declare function LightMode(props: React.PropsWithChildren<{}>): import("react/jsx-runtime").JSX.Element;
export declare namespace LightMode {
    var displayName: string;
}
