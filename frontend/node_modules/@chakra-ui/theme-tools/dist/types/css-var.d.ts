export declare function isDecimal(value: any): boolean;
export declare function addPrefix(value: string, prefix?: string): string;
export declare function toVarRef(name: string, fallback?: string): string;
export declare function toVar(value: string, prefix?: string): string;
export type CSSVar = {
    variable: string;
    reference: string;
};
export type CSSVarOptions = {
    fallback?: string | CSSVar;
    prefix?: string;
};
export declare function cssVar(name: string, options?: CSSVarOptions): {
    variable: string;
    reference: string;
};
