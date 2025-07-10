/// <reference types="react" />
import { InputDOMAttributes, PropGetter } from "@chakra-ui/utils";
type EventOrValue = React.ChangeEvent<HTMLInputElement> | string | number;
export interface UseRadioGroupProps {
    /**
     * The value of the radio to be `checked`
     * (in controlled mode)
     */
    value?: string;
    /**
     * The value of the radio to be `checked`
     * initially (in uncontrolled mode)
     */
    defaultValue?: string;
    /**
     * Function called once a radio is checked
     * @param nextValue the value of the checked radio
     */
    onChange?(nextValue: string): void;
    /**
     * If `true`, all wrapped radio inputs will be disabled
     *
     * @default false
     */
    isDisabled?: boolean;
    /**
     * If `true` and `isDisabled` is true, all wrapped radio inputs will remain
     * focusable but not interactive.
     *
     * @default false
     */
    isFocusable?: boolean;
    /**
     * The `name` attribute forwarded to each `radio` element
     */
    name?: string;
    /**
     * If `true`, input elements will receive
     * `checked` attribute instead of `isChecked`.
     *
     * This assumes, you're using native radio inputs
     *
     * @default false
     */
    isNative?: boolean;
}
/**
 * `useRadioGroup` is a custom hook that provides all the state management logic for a group of radios.
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-radio-group
 */
export declare function useRadioGroup(props?: UseRadioGroupProps): {
    getRootProps: PropGetter;
    getRadioProps: PropGetter<InputDOMAttributes & {
        isChecked?: boolean | undefined;
    }, InputDOMAttributes>;
    name: string;
    ref: import("react").MutableRefObject<any>;
    focus: () => void;
    setValue: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    value: string | number;
    onChange: (eventOrValue: EventOrValue) => void;
    isDisabled: boolean | undefined;
    isFocusable: boolean | undefined;
    htmlProps: {};
};
export type UseRadioGroupReturn = ReturnType<typeof useRadioGroup>;
export {};
