export declare const linkTheme: {
    baseStyle?: {
        transitionProperty: string;
        transitionDuration: string;
        transitionTimingFunction: string;
        cursor: string;
        textDecoration: string;
        outline: string;
        color: string;
        _hover: {
            textDecoration: string;
        };
        _focusVisible: {
            boxShadow: string;
        };
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
