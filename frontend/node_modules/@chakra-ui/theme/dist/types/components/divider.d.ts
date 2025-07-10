export declare const dividerTheme: {
    baseStyle?: {
        opacity: number;
        borderColor: string;
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    } | undefined;
    variants?: {
        solid: {
            borderStyle: string;
        };
        dashed: {
            borderStyle: string;
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "dashed" | "solid" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
