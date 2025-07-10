export interface ColorModeScriptProps {
    type?: "localStorage" | "cookie";
    initialColorMode?: "light" | "dark" | "system";
    storageKey?: string;
    nonce?: string;
}
export declare function getScriptSrc(props?: ColorModeScriptProps): string;
export declare function ColorModeScript(props?: ColorModeScriptProps): import("react/jsx-runtime").JSX.Element;
