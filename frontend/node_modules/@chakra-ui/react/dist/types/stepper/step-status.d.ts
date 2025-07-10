/// <reference types="react" />
import { StepContext, StepStatusType } from "./step-context";
type MaybeRenderProp = React.ReactNode | ((props: StepContext) => React.ReactNode);
export interface StepStatusProps extends Partial<Record<StepStatusType, MaybeRenderProp>> {
}
export declare function StepStatus(props: StepStatusProps): import("react/jsx-runtime").JSX.Element | null;
export {};
