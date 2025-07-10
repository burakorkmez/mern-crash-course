import { StyleProps, SystemStyleObject } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { CSSObject, FunctionInterpolation } from "@emotion/styled";
import { ElementType } from "react";
import { AsProps, ChakraComponent, ChakraProps, PropsOf } from "./system.types";
import { DOMElements } from "./system.utils";
type StyleResolverProps = SystemStyleObject & {
    __css?: SystemStyleObject;
    sx?: SystemStyleObject;
    theme: any;
    css?: CSSObject;
};
interface GetStyleObject {
    (options: {
        baseStyle?: SystemStyleObject | ((props: StyleResolverProps) => SystemStyleObject);
    }): FunctionInterpolation<StyleResolverProps>;
}
/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example, take a component defined this way:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
export declare const toCSSObject: GetStyleObject;
export interface ChakraStyledOptions extends Dict {
    shouldForwardProp?(prop: string): boolean;
    label?: string;
    baseStyle?: SystemStyleObject | ((props: StyleResolverProps) => SystemStyleObject);
}
export declare function styled<T extends ElementType, P extends object = {}>(component: T, options?: ChakraStyledOptions): ChakraComponent<T, P>;
export type HTMLChakraComponents = {
    [Tag in DOMElements]: ChakraComponent<Tag, {}>;
};
export type HTMLChakraProps<T extends ElementType> = Omit<PropsOf<T>, "ref" | keyof StyleProps> & ChakraProps & AsProps;
export {};
