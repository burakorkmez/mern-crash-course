export declare const formTheme: {
    baseStyle?: {
        container: {
            width: string;
            position: string;
        };
        requiredIndicator: {
            [x: string]: string | {
                [x: string]: string;
            };
            marginStart: string;
            _dark: {
                [x: string]: string;
            };
            color: string;
        };
        helperText: {
            [x: string]: string | {
                [x: string]: string;
            };
            mt: string;
            _dark: {
                [x: string]: string;
            };
            color: string;
            lineHeight: string;
            fontSize: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "requiredIndicator" | "helperText")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "requiredIndicator" | "helperText")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "requiredIndicator" | "helperText")[];
};
