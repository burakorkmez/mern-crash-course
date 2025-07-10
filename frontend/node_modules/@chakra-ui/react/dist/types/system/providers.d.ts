import { SystemStyleObject } from "@chakra-ui/styled-system";
import { CreateContextReturn } from "@chakra-ui/utils";
import { ThemeProviderProps as EmotionThemeProviderProps } from "@emotion/react";
import { type JSX } from "react";
export interface ThemeProviderProps extends EmotionThemeProviderProps {
    cssVarsRoot?: string;
}
export declare function ThemeProvider(props: ThemeProviderProps): JSX.Element;
export interface CSSVarsProps {
    /**
     * The element to attach the CSS custom properties to.
     * @default ":host, :root"
     */
    root?: string;
}
export declare function CSSVars({ root }: CSSVarsProps): JSX.Element;
/**
 * @deprecated - Prefer to use `createStylesContext` to provide better error messages
 *
 * @example
 *
 * ```jsx
 * import { createStylesContext } from "@chakra-ui/react"
 *
 * const [StylesProvider, useStyles] = createStylesContext("Component")
 * ```
 */
declare const StylesProvider: import("react").Provider<Record<string, SystemStyleObject>>, useStyles: () => Record<string, SystemStyleObject>;
export { StylesProvider, useStyles };
/**
 * Helper function that creates context with a standardized errorMessage related to the component
 * @param componentName
 * @returns [StylesProvider, useStyles]
 */
export declare function createStylesContext(componentName: string): CreateStyleContextReturn;
export type CreateStyleContextReturn = CreateContextReturn<Record<string, SystemStyleObject>>;
/**
 * Applies styles defined in `theme.styles.global` globally
 * using emotion's `Global` component
 */
export declare function GlobalStyle(): JSX.Element;
