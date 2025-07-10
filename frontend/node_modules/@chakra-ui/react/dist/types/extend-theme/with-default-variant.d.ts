import { ThemingProps } from "@chakra-ui/styled-system";
import { ThemeExtension } from "./extend-theme";
export declare function withDefaultVariant({ variant, components, }: {
    variant: ThemingProps["variant"];
    components?: string[] | Record<string, any>;
}): ThemeExtension;
