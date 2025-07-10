/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { Orientation } from "./step-context";
export interface StepperProps extends HTMLChakraProps<"div">, ThemingProps<"Stepper"> {
    /**
     * The active step index
     */
    index: number;
    /**
     * The orientation of the stepper
     * @default horizontal
     */
    orientation?: Orientation;
    /**
     * Whether to show or not the last separator while in vertical orientation
     */
    showLastSeparator?: boolean;
    /**
     */
    children: React.ReactNode;
}
export declare const Stepper: import("../system").ComponentWithAs<"div", StepperProps>;
