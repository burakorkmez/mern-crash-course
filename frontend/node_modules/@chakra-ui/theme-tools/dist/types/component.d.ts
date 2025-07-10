import type { SystemStyleObject, StyleFunctionProps, SystemStyleInterpolation } from "@chakra-ui/styled-system";
import { type JSX } from "react";
export type { StyleConfig, MultiStyleConfig, SystemStyleObject, SystemStyleFunction, SystemStyleInterpolation, PartsStyleObject, PartsStyleFunction, PartsStyleInterpolation, } from "@chakra-ui/styled-system";
export type GlobalStyleProps = StyleFunctionProps;
export type GlobalStyles = {
    global?: SystemStyleInterpolation;
};
export type JSXElementStyles = {
    [K in keyof JSX.IntrinsicElements]?: SystemStyleObject;
};
export type Styles = GlobalStyles & JSXElementStyles;
export declare function mode<T>(light: T, dark: T): (props: Record<string, any> | StyleFunctionProps) => T;
export declare function orient<T>(options: {
    orientation?: "vertical" | "horizontal";
    vertical: T;
    horizontal: T;
}): T | {};
export type { StyleFunctionProps };
