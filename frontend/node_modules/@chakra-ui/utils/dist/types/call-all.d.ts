import { AnyFunction } from "./types";
export declare function callAll<T extends AnyFunction>(...fns: (T | undefined)[]): (...args: Parameters<T>) => void;
export declare function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]): (event: Parameters<T>[0]) => void;
