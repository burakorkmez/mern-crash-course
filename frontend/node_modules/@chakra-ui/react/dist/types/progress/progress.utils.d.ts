/// <reference types="react" />
import { keyframes } from "@emotion/react";
type Keyframe = ReturnType<typeof keyframes>;
export declare const spin: Keyframe;
export declare const rotate: Keyframe;
export declare const progress: Keyframe;
export declare const stripe: Keyframe;
export interface GetProgressPropsOptions {
    value?: number;
    min: number;
    max: number;
    valueText?: string;
    getValueText?(value: number, percent: number): string;
    isIndeterminate?: boolean;
    role?: React.AriaRole;
}
/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
export declare function getProgressProps(options: GetProgressPropsOptions): {
    bind: {
        "data-indeterminate": string | undefined;
        "aria-valuemax": number;
        "aria-valuemin": number;
        "aria-valuenow": number | undefined;
        "aria-valuetext": string | undefined;
        role: import("react").AriaRole;
    };
    percent: number;
    value: number;
};
export {};
