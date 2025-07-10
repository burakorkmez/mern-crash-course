/// <reference types="react" />
export declare const PinInputDescendantsProvider: import("react").Provider<import("../descendant").DescendantsManager<HTMLInputElement, {}>>, usePinInputDescendantsContext: () => import("../descendant").DescendantsManager<HTMLInputElement, {}>, usePinInputDescendants: () => import("../descendant").DescendantsManager<HTMLInputElement, {}>, usePinInputDescendant: (options?: {
    disabled?: boolean | undefined;
    id?: string | undefined;
} | undefined) => import("../descendant/use-descendant").UseDescendantReturn<HTMLInputElement, {}>;
export type PinInputContext = Omit<UsePinInputReturn, "descendants"> & {
    /**
     * Sets the pin input component to the disabled state
     */
    isDisabled?: boolean;
    /**
     * Sets the pin input component to the invalid state
     */
    isInvalid?: boolean;
};
export declare const PinInputProvider: import("react").Provider<PinInputContext>, usePinInputContext: () => PinInputContext;
export interface UsePinInputProps {
    /**
     * If `true`, the pin input receives focus on mount
     */
    autoFocus?: boolean;
    /**
     * The value of the pin input. This is the value
     * that will be returned when the pin input is filled
     */
    value?: string;
    /**
     * The default value of the pin input
     */
    defaultValue?: string;
    /**
     * Function called on input change
     */
    onChange?: (value: string) => void;
    /**
     * Function called when all inputs have valid values
     */
    onComplete?: (value: string) => void;
    /**
     * The placeholder for the pin input
     */
    placeholder?: string;
    /**
     * If `true`, focus will move automatically to the next input once filled
     * @default true
     */
    manageFocus?: boolean;
    /**
     * If `true`, the pin input component signals to its fields that they should
     * use `autocomplete="one-time-code"`.
     */
    otp?: boolean;
    /**
     * The top-level id string that will be applied to the input fields.
     * The index of the input will be appended to this top-level id.
     *
     * @example
     * if id="foo", the first input will have `foo-0`
     */
    id?: string;
    /**
     * If `true`, the pin input component is put in the disabled state
     */
    isDisabled?: boolean;
    /**
     * If `true`, the pin input component is put in the invalid state
     */
    isInvalid?: boolean;
    /**
     * The type of values the pin-input should allow
     */
    type?: "alphanumeric" | "number";
    /**
     * If `true`, the input's value will be masked just like `type=password`
     */
    mask?: boolean;
}
/**
 * @internal
 */
export declare function usePinInput(props?: UsePinInputProps): {
    getInputProps: (props: InputProps & {
        index: number;
    }) => InputProps;
    id: string;
    descendants: import("../descendant").DescendantsManager<HTMLInputElement, {}>;
    values: string[];
    setValue: (value: string, index: number, handleFocus?: boolean) => void;
    setValues: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    clear: () => void;
};
export type UsePinInputReturn = ReturnType<typeof usePinInput>;
export interface UsePinInputFieldProps extends InputProps {
    ref?: React.Ref<HTMLInputElement>;
    index?: number;
}
/**
 * @internal
 */
export declare function usePinInputField(props?: UsePinInputFieldProps, ref?: React.Ref<any>): InputProps;
interface InputProps extends Omit<React.ComponentPropsWithRef<"input">, "color" | "height" | "width"> {
}
export {};
