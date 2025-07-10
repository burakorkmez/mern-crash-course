export declare const drawerTheme: {
    baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        overlay: {
            bg: string;
            zIndex: string;
        };
        dialogContainer: {
            display: string;
            zIndex: string;
            justifyContent: string;
        };
        dialog: any;
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
            overflow: string;
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
        size?: "md" | "full" | "xs" | "sm" | "lg" | "xl" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("overlay" | "header" | "body" | "footer" | "dialogContainer" | "dialog" | "closeButton")[];
};
