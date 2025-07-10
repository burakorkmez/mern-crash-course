export declare function useId(idProp: string | undefined, prefix?: string | undefined): string;
export declare function useIds(idProp: string | undefined, ...prefixes: string[]): string[];
export declare function useOptionalPart<T>(partId: string): {
    ref: (node: T) => void;
    id: string | null;
    isRendered: boolean;
};
