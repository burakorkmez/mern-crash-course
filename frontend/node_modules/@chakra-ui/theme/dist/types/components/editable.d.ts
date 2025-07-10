export declare const editableTheme: {
    baseStyle?: {
        preview: {
            borderRadius: string;
            py: string;
            transitionProperty: string;
            transitionDuration: string;
        };
        input: {
            borderRadius: string;
            py: string;
            transitionProperty: string;
            transitionDuration: string;
            width: string;
            _focusVisible: {
                boxShadow: string;
            };
            _placeholder: {
                opacity: number;
            };
        };
        textarea: {
            borderRadius: string;
            py: string;
            transitionProperty: string;
            transitionDuration: string;
            width: string;
            _focusVisible: {
                boxShadow: string;
            };
            _placeholder: {
                opacity: number;
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("textarea" | "preview" | "input")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("textarea" | "preview" | "input")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("textarea" | "preview" | "input")[];
};
