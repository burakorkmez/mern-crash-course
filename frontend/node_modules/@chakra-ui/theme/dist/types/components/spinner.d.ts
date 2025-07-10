export declare const spinnerTheme: {
    baseStyle?: {
        width: string[];
        height: string[];
    } | undefined;
    sizes?: {
        xs: {
            [x: string]: string;
        };
        sm: {
            [x: string]: string;
        };
        md: {
            [x: string]: string;
        };
        lg: {
            [x: string]: string;
        };
        xl: {
            [x: string]: string;
        };
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    } | undefined;
    defaultProps?: {
        size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
