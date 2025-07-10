export declare const popoverTheme: {
    baseStyle?: {
        popper: {
            zIndex: string;
        };
        content: {
            [x: string]: string | {
                [x: string]: string;
                outline?: undefined;
                boxShadow?: undefined;
            } | {
                outline: number;
                boxShadow: string;
            };
            bg: string;
            _dark: {
                [x: string]: string;
            };
            width: string;
            border: string;
            borderColor: string;
            borderRadius: string;
            boxShadow: string;
            zIndex: string;
            _focusVisible: {
                outline: number;
                boxShadow: string;
            };
        };
        header: {
            px: number;
            py: number;
            borderBottomWidth: string;
        };
        body: {
            px: number;
            py: number;
        };
        footer: {
            px: number;
            py: number;
            borderTopWidth: string;
        };
        closeButton: {
            position: string;
            borderRadius: string;
            top: number;
            insetEnd: number;
            padding: number;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("content" | "header" | "body" | "footer" | "closeButton" | "popper" | "arrow")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("content" | "header" | "body" | "footer" | "closeButton" | "popper" | "arrow")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("content" | "header" | "body" | "footer" | "closeButton" | "popper" | "arrow")[];
};
