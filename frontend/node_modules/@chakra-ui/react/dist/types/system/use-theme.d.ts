import { WithCSSVar } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
/**
 * `useTheme` is a custom hook used to get the theme object from context.
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-theme
 */
export declare function useTheme<T extends object = Dict>(): WithCSSVar<T>;
