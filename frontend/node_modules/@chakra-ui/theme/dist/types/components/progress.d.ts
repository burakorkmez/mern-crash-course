export declare const progressTheme: {
    baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        label: {
            lineHeight: string;
            fontSize: string;
            fontWeight: string;
            color: string;
        };
        filledTrack: any;
        track: {
            bg: string;
        };
    }) | undefined;
    sizes?: {
        xs: {
            track: {
                h: string;
            };
        };
        sm: {
            track: {
                h: string;
            };
        };
        md: {
            track: {
                h: string;
            };
        };
        lg: {
            track: {
                h: string;
            };
        };
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("label" | "track" | "filledTrack")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: "md" | "xs" | "sm" | "lg" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("label" | "track" | "filledTrack")[];
};
