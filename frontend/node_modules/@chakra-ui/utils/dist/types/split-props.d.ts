type Dict = Record<string, unknown>;
type PredicateFn = (key: string) => boolean;
type Key = PredicateFn | string[];
export declare function splitProps(props: Dict, ...keys: Key[]): Dict[];
export {};
