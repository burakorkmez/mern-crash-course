type Predicate<R = any> = (value: any, path: string[]) => R;
export type MappedObject<T, K> = {
    [Prop in keyof T]: T[Prop] extends Array<any> ? MappedObject<T[Prop][number], K>[] : T[Prop] extends Record<string, unknown> ? MappedObject<T[Prop], K> : K;
};
export type WalkObjectStopFn = (value: any, path: string[]) => boolean;
export type WalkObjectOptions = {
    stop?: WalkObjectStopFn;
    getKey?(prop: string): string;
};
export declare function walkObject<T, K>(target: T, predicate: Predicate<K>, options?: WalkObjectOptions): MappedObject<T, ReturnType<Predicate<K>>>;
export {};
