export declare const kbdTheme: {
    baseStyle?: {
        [x: string]: string | {
            [x: string]: string;
        };
        _dark: {
            [x: string]: string;
        };
        bg: string;
        borderRadius: string;
        borderWidth: string;
        borderBottomWidth: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        px: string;
        whiteSpace: string;
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
