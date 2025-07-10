export declare const tooltipTheme: {
    baseStyle?: {
        [x: string]: string | {
            [x: string]: string;
        };
        bg: string;
        color: string;
        _dark: {
            [x: string]: string;
        };
        px: string;
        py: string;
        borderRadius: string;
        fontWeight: string;
        fontSize: string;
        boxShadow: string;
        maxW: string;
        zIndex: string;
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
