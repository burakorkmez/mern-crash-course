/// <reference types="react" />
import { EventOrValue, UseCheckboxGroupProps } from "./checkbox-types";
/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-checkbox-group
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
export declare function useCheckboxGroup(props?: UseCheckboxGroupProps): {
    value: (string | number)[];
    isDisabled: boolean | undefined;
    onChange: (eventOrValue: EventOrValue) => void;
    setValue: import("react").Dispatch<import("react").SetStateAction<(string | number)[]>>;
    getCheckboxProps: (props?: Record<string, any>) => {
        [x: string]: any;
        onChange: (eventOrValue: EventOrValue) => void;
    };
};
export type UseCheckboxGroupReturn = ReturnType<typeof useCheckboxGroup>;
