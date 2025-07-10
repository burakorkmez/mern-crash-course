import { ThemingProps } from "@chakra-ui/styled-system";
import { ThemeExtension } from "./extend-theme";
export declare function withDefaultColorScheme({ colorScheme, components, }: {
    colorScheme: ThemingProps["colorScheme"];
    components?: string[] | Record<string, any>;
}): ThemeExtension;
