/// <reference types="react" />
export type StepStatusType = "active" | "complete" | "incomplete";
export type Orientation = "horizontal" | "vertical";
export interface StepContext {
    /**
     * The status of the step
     * @type "active" | "complete" | "incomplete"
     */
    status: StepStatusType;
    /**
     * The total number of steps
     */
    count: number;
    /**
     * The index of the step
     */
    index: number;
    /**
     * The orientation of the stepper
     */
    orientation: Orientation;
    /**
     * Whether the step is the last step
     */
    isLast: boolean;
    /**
     * Whether the step is the first step
     */
    isFirst: boolean;
    /**
     * Whether to show or not the last separator while in vertical orientation
     */
    showLastSeparator?: boolean;
}
export declare const StepContextProvider: import("react").Provider<StepContext>, useStepContext: () => StepContext;
export declare const StepperStylesProvider: import("react").Provider<Record<string, import("@chakra-ui/styled-system").SystemStyleObject>>, useStepperStyles: () => Record<string, import("@chakra-ui/styled-system").SystemStyleObject>;
