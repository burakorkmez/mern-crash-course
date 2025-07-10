/// <reference types="react" />
import { DescendantOptions, DescendantsManager } from "./descendant";
export interface UseDescendantsReturn extends DescendantsManager<HTMLElement, Record<string, any>> {
}
export interface UseDescendantReturn<T extends HTMLElement, K extends Record<string, any> = {}> {
    descendants: DescendantsManager<T, K>;
    index: number;
    enabledIndex: number;
    register: React.RefCallback<T>;
}
export type DescendantContextReturn<T extends HTMLElement, K extends Record<string, any> = {}> = [
    React.Provider<DescendantsManager<T, K>>,
    () => DescendantsManager<T, K>,
    () => DescendantsManager<T, K>,
    (options?: DescendantOptions<K>) => UseDescendantReturn<T, K>
];
export declare function createDescendantContext<T extends HTMLElement = HTMLElement, K extends Record<string, any> = {}>(): DescendantContextReturn<T, K>;
