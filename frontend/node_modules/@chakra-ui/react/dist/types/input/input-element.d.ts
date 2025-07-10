import { HTMLChakraProps } from "../system";
export interface InputElementProps extends HTMLChakraProps<"div"> {
    placement?: "left" | "right";
}
export type InputLeftElementProps = Omit<InputElementProps, "placement">;
export declare const InputLeftElement: import("../system").ComponentWithAs<"div", InputLeftElementProps>;
export type InputRightElementProps = Omit<InputElementProps, "placement">;
export declare const InputRightElement: import("../system").ComponentWithAs<"div", InputRightElementProps>;
