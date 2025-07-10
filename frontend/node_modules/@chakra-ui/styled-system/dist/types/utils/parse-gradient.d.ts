import { Transform } from "./types";
export declare const globalSet: Set<string>;
export declare function parseGradient(value: string | null | undefined, theme: Record<string, any>): string | null | undefined;
export declare const isCSSFunction: (value: unknown) => boolean;
export declare const gradientTransform: Transform;
