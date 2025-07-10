import { ColorMode } from "./color-mode-types";
type UtilOptions = {
    preventTransition?: boolean;
    nonce?: string;
};
export declare function getColorModeUtils(options?: UtilOptions): {
    setDataset: (value: ColorMode) => void;
    setClassName(dark: boolean): void;
    query(): MediaQueryList;
    getSystemTheme(fallback?: ColorMode): "light" | "dark";
    addListener(fn: (cm: ColorMode) => unknown): () => void;
    preventTransition(): () => void;
};
export {};
