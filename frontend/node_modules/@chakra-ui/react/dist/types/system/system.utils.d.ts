import { type JSX } from "react";
/**
 * All html and svg elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
export type DOMElements = keyof JSX.IntrinsicElements;
export declare function isTag(target: any): boolean;
export declare function getDisplayName(primitive: any): string;
