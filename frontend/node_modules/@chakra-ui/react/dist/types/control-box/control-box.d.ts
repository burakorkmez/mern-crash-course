/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface ControlBoxOptions {
    type?: "checkbox" | "radio";
    _hover?: SystemStyleObject;
    _invalid?: SystemStyleObject;
    _disabled?: SystemStyleObject;
    _focus?: SystemStyleObject;
    _checked?: SystemStyleObject;
    _child?: SystemStyleObject;
    _checkedAndChild?: SystemStyleObject;
    _checkedAndDisabled?: SystemStyleObject;
    _checkedAndFocus?: SystemStyleObject;
    _checkedAndHover?: SystemStyleObject;
}
export type IControlBox = ControlBoxOptions;
interface BaseControlProps extends Omit<HTMLChakraProps<"div">, keyof ControlBoxOptions> {
}
export interface ControlBoxProps extends BaseControlProps, ControlBoxOptions {
}
/**
 * @deprecated This component will be removed in the next major release.
 */
export declare const ControlBox: React.FC<ControlBoxProps>;
export {};
