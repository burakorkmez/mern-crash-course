export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;
export declare function assignRef<T = any>(ref: ReactRef<T> | null | undefined, value: T): void;
export declare function mergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]): (node: T | null) => void;
export declare function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]): (node: T | null) => void;
