export declare const breadcrumbTheme: {
    baseStyle?: {
        link: {
            [x: string]: string | {
                cursor: string;
                _hover: {
                    [x: string]: string;
                };
                _focusVisible: {
                    boxShadow: string;
                };
            };
            transitionProperty: string;
            transitionDuration: string;
            transitionTimingFunction: string;
            outline: string;
            color: string;
            textDecoration: string;
            "&:not([aria-current=page])": {
                cursor: string;
                _hover: {
                    [x: string]: string;
                };
                _focusVisible: {
                    boxShadow: string;
                };
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "link" | "separator" | "item")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "link" | "separator" | "item")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "link" | "separator" | "item")[];
};
