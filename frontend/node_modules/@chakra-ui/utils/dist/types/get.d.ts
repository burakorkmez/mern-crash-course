/**
 * Get value from a deeply nested object using a string path.
 * Memorizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param fallback  - the fallback value
 */
export declare function get(obj: Record<string, any>, path: string | number, fallback?: any, index?: number): any;
type Get = (obj: Readonly<object>, path: string | number, fallback?: any, index?: number) => any;
export declare const memoizedGet: Get;
export {};
