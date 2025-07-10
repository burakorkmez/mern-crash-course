/// <reference types="react" />
import type { PropGetter } from "@chakra-ui/utils";
import { CheckboxState, UseCheckboxProps } from "./checkbox-types";
/**
 * useCheckbox that provides all the state and focus management logic
 * for a checkbox. It is consumed by the `Checkbox` component
 *
 * @see Docs https://chakra-ui.com/checkbox#hooks
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
export declare function useCheckbox(props?: UseCheckboxProps): {
    state: CheckboxState;
    getRootProps: PropGetter;
    getCheckboxProps: PropGetter;
    getIndicatorProps: PropGetter;
    getInputProps: PropGetter;
    getLabelProps: PropGetter;
    htmlProps: Omit<{
        isDisabled?: boolean | undefined;
        isReadOnly?: boolean | undefined;
        isInvalid?: boolean | undefined;
        isRequired?: boolean | undefined;
        onBlur?: ((event: import("react").FocusEvent<HTMLInputElement, Element>) => void) | undefined;
        onFocus?: ((event: import("react").FocusEvent<HTMLInputElement, Element>) => void) | undefined;
        id?: string | undefined;
        "aria-describedby"?: string | undefined;
    }, "id" | "aria-describedby" | "onFocus" | "onBlur" | "isDisabled" | "isRequired" | "isInvalid" | "isReadOnly">;
};
export type UseCheckboxReturn = ReturnType<typeof useCheckbox>;
