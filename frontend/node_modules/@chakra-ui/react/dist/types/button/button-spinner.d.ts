import { HTMLChakraProps } from "../system";
import { ButtonSpinnerOptions } from "./button-types";
interface ButtonSpinnerProps extends HTMLChakraProps<"div">, ButtonSpinnerOptions {
}
export declare function ButtonSpinner(props: ButtonSpinnerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ButtonSpinner {
    var displayName: string;
}
export {};
