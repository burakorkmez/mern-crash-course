export declare const skipLinkTheme: {
    baseStyle?: {
        borderRadius: string;
        fontWeight: string;
        _focusVisible: {
            [x: string]: string | {
                [x: string]: string;
            };
            boxShadow: string;
            padding: string;
            position: string;
            top: string;
            insetStart: string;
            _dark: {
                [x: string]: string;
            };
            bg: string;
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
