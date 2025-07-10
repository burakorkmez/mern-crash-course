/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseEditableProps, UseEditableReturn } from "./use-editable";
type RenderProps = Pick<UseEditableReturn, "isEditing" | "onSubmit" | "onCancel" | "onEdit">;
type MaybeRenderProp<P> = React.ReactNode | ((props: P) => React.ReactNode);
interface BaseEditableProps extends Omit<HTMLChakraProps<"div">, "onChange" | "value" | "defaultValue" | "onSubmit" | "onBlur"> {
}
export interface EditableProps extends UseEditableProps, Omit<BaseEditableProps, "children">, ThemingProps<"Editable"> {
    children?: MaybeRenderProp<RenderProps>;
}
/**
 * Editable
 *
 * The wrapper that provides context and logic for all editable
 * components. It renders a `div`
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/editable
 */
export declare const Editable: import("../system").ComponentWithAs<"div", EditableProps>;
export {};
