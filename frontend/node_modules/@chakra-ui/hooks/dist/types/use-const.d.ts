type InitFn<T> = () => T;
export declare function useConst<T extends any>(init: T | InitFn<T>): T;
export {};
