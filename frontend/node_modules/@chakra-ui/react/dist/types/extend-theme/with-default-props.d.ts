import { ComponentDefaultProps } from "@chakra-ui/theme";
export declare function withDefaultProps({ defaultProps: { colorScheme, variant, size }, components, }: {
    defaultProps: ComponentDefaultProps;
    components?: string[] | Record<string, any>;
}): (theme: Record<string, any>) => any;
