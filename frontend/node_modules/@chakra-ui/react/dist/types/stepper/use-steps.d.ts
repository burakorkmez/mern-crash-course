export type UseStepsProps = {
    index?: number;
    count?: number;
};
export type StepStatus = "complete" | "active" | "incomplete";
export interface UseStepsReturn {
    activeStep: number;
    setActiveStep: (step: number) => void;
    activeStepPercent: number;
    isActiveStep: (step: number) => boolean;
    isCompleteStep: (step: number) => boolean;
    isIncompleteStep: (step: number) => boolean;
    getStatus: (step: number) => StepStatus;
    goToNext: VoidFunction;
    goToPrevious: VoidFunction;
}
export declare function useSteps(props?: UseStepsProps): UseStepsReturn;
