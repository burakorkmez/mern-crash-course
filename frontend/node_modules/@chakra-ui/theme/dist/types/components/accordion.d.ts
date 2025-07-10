export declare const accordionTheme: {
    baseStyle?: {
        container: {
            borderTopWidth: string;
            borderColor: string;
            _last: {
                borderBottomWidth: string;
            };
        };
        button: {
            transitionProperty: string;
            transitionDuration: string;
            fontSize: string;
            _focusVisible: {
                boxShadow: string;
            };
            _hover: {
                bg: string;
            };
            _disabled: {
                opacity: number;
                cursor: string;
            };
            px: string;
            py: string;
        };
        panel: {
            pt: string;
            px: string;
            pb: string;
        };
        icon: {
            fontSize: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "root" | "button" | "panel" | "icon")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "root" | "button" | "panel" | "icon")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "root" | "button" | "panel" | "icon")[];
};
