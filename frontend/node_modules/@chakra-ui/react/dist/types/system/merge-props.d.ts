interface Props {
    [key: string]: any;
}
type TupleTypes<T extends any[]> = T[number];
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare function mergeProps<T extends Props>(...args: T[]): UnionToIntersection<TupleTypes<T[]>>;
export {};
