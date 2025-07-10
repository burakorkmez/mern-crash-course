export declare function addPrefix(value: string, prefix?: string): string;
export declare function toVarReference(name: string, fallback?: string): string;
export declare function toVarDefinition(value: string, prefix?: string): string;
export declare function cssVar(name: string, fallback?: string, cssVarPrefix?: string): {
    variable: string;
    reference: string;
};
type VarDefinition = ReturnType<typeof cssVar>;
export declare function defineCssVars<K extends string>(scope: string, keys: Array<K | [K, string]>): Record<K, VarDefinition>;
export {};
