import { HTMLChakraProps } from "../system";
export interface CheckboxIconProps extends HTMLChakraProps<"svg"> {
    /**
     * @default false
     */
    isIndeterminate?: boolean;
    /**
     * @default false
     */
    isChecked?: boolean;
}
/**
 * CheckboxIcon is used to visually indicate the checked or indeterminate
 * state of a checkbox.
 *
 * @todo allow users pass their own icon svgs
 */
export declare function CheckboxIcon(props: CheckboxIconProps): import("react/jsx-runtime").JSX.Element | null;
