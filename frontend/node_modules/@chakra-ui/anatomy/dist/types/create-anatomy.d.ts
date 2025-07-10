export interface AnatomyPart {
    selector: string;
    className: string;
    toString(): string;
}
export type AnatomyInstance<T extends string> = Omit<Anatomy<T>, "parts">;
export type AnatomyPartName<T> = T extends AnatomyInstance<infer U> ? U : never;
export interface Anatomy<T extends string> {
    toPart: (part: string) => AnatomyPart;
    parts: <U extends string>(...parts: U[]) => AnatomyInstance<U>;
    extend: <V extends string>(...parts: V[]) => AnatomyInstance<T | V>;
    readonly keys: T[];
    selectors: () => Record<T, string>;
    classnames: () => Record<T, string>;
    __type: T;
}
/**
 * Used to define the anatomy/parts of a component in a way that provides
 * a consistent API for `className`, css selector and `theming`.
 */
export declare function anatomy<T extends string = string>(name: string, map?: any): Anatomy<T>;
