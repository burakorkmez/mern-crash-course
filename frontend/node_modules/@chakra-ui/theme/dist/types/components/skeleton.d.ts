export declare const skeletonTheme: {
    baseStyle?: {
        [x: string]: string | number | {
            [x: string]: string;
        };
        _dark: {
            [x: string]: string;
        };
        background: string;
        borderColor: string;
        opacity: number;
        borderRadius: string;
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
