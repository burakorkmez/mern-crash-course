export declare const modalTheme: {
    baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        overlay: {
            bg: string;
            zIndex: string;
        };
        dialogContainer: {
            display: string;
            zIndex: string;
            justifyContent: string;
            alignItems: string;
            overflow: string;
            overscrollBehaviorY: string;
        };
        dialog: {
            [x: string]: string | {
                [x: string]: string;
            } | undefined;
            borderRadius: string;
            color: string;
            my: string;
            mx: string | undefined;
            zIndex: string;
            maxH: string | undefined;
            _dark: {
                [x: string]: string;
            };
            bg: string;
            boxShadow: string;
        };
        header: {
            px: string;
            py: string;
            fontSize: string;
            fontWeight: string;
        };
        closeButton: {
            position: string;
            top: string;
            insetEnd: string;
        };
        body: {
            px: string;
            py: string;
            flex: string;
            overflow: string | undefined;
        };
        footer: {
            px: string;
            py: string;
        };
    }) | undefined;
    sizes?: {
        xs: {
            dialog: {
                maxW: string;
            };
        };
        sm: {
            dialog: {
                maxW: string;
            };
        };
        md: {
            dialog: {
                maxW: string;
            };
        };
        lg: {
            dialog: {
                maxW: string;
            };
        };
        xl: {
            dialog: {
                maxW: string;
            };
        };
        "2xl": {
            dialog: {
                maxW: string;
            };
        };
        "3xl": {
            dialog: {
                maxW: string;
            };
        };
        "4xl": {
            dialog: {
                maxW: string;
            };
        };
        "5xl": {
            dialog: {
                maxW: string;
            };
        };
        "6xl": {
            dialog: {
                maxW: string;
            };
        };
        full: {
            dialog: {
                maxW: string;
            };
        };
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("overlay" | "header" | "body" | "footer" | "dialogContainer" | "dialog" | "closeButton")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: "md" | "full" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("overlay" | "header" | "body" | "footer" | "dialogContainer" | "dialog" | "closeButton")[];
};
