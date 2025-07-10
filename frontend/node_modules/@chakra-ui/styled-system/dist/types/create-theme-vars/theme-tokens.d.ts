declare const tokens: readonly ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "gradients", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur", "breakpoints"];
export type ThemeScale = (typeof tokens)[number] | "transition.duration" | "transition.property" | "transition.easing";
export declare function extractTokens(theme: Record<string, any>): {
    [x: string]: any;
};
export declare function extractSemanticTokens(theme: Record<string, any>): any;
export declare function omitVars(rawTheme: Record<string, any>): {
    [x: string]: any;
};
export {};
