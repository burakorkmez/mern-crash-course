export declare const sliderTheme: {
    baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        container: {
            display: string;
            position: string;
            cursor: string;
            _disabled: {
                opacity: number;
                cursor: string;
                pointerEvents: string;
            };
        } | {
            h: string;
            px: string;
            w?: undefined;
            py?: undefined;
            display: string;
            position: string;
            cursor: string;
            _disabled: {
                opacity: number;
                cursor: string;
                pointerEvents: string;
            };
        } | {
            w: string;
            py: string;
            h?: undefined;
            px?: undefined;
            display: string;
            position: string;
            cursor: string;
            _disabled: {
                opacity: number;
                cursor: string;
                pointerEvents: string;
            };
        };
        track: {
            overflow: string;
            borderRadius: string;
            _dark: {
                [x: string]: string;
            };
            _disabled: {
                [x: string]: string | {
                    [x: string]: string;
                };
                _dark: {
                    [x: string]: string;
                };
            };
            bg: string;
        } | {
            overflow: string;
            borderRadius: string;
            _dark: {
                [x: string]: string;
            };
            _disabled: {
                [x: string]: string | {
                    [x: string]: string;
                };
                _dark: {
                    [x: string]: string;
                };
            };
            bg: string;
            h: string;
            w?: undefined;
        } | {
            overflow: string;
            borderRadius: string;
            _dark: {
                [x: string]: string;
            };
            _disabled: {
                [x: string]: string | {
                    [x: string]: string;
                };
                _dark: {
                    [x: string]: string;
                };
            };
            bg: string;
            w: string;
            h?: undefined;
        };
        thumb: {
            w: string;
            h: string;
            display: string;
            alignItems: string;
            justifyContent: string;
            position: string;
            outline: number;
            zIndex: number;
            borderRadius: string;
            bg: string;
            boxShadow: string;
            border: string;
            borderColor: string;
            transitionProperty: string;
            transitionDuration: string;
            _focusVisible: {
                boxShadow: string;
            };
            _active: {
                "--slider-thumb-scale": string;
            };
            _disabled: {
                bg: string;
            };
        } | {
            w: string;
            h: string;
            display: string;
            alignItems: string;
            justifyContent: string;
            position: string;
            outline: number;
            zIndex: number;
            borderRadius: string;
            bg: string;
            boxShadow: string;
            border: string;
            borderColor: string;
            transitionProperty: string;
            transitionDuration: string;
            _focusVisible: {
                boxShadow: string;
            };
            _active: {
                "--slider-thumb-scale": string;
            };
            _disabled: {
                bg: string;
            };
            left: string;
            top?: undefined;
        } | {
            w: string;
            h: string;
            display: string;
            alignItems: string;
            justifyContent: string;
            position: string;
            outline: number;
            zIndex: number;
            borderRadius: string;
            bg: string;
            boxShadow: string;
            border: string;
            borderColor: string;
            transitionProperty: string;
            transitionDuration: string;
            _focusVisible: {
                boxShadow: string;
            };
            _active: {
                "--slider-thumb-scale": string;
            };
            _disabled: {
                bg: string;
            };
            top: string;
            left?: undefined;
        };
        filledTrack: {
            [x: string]: string | {
                [x: string]: string;
            };
            width: string;
            height: string;
            _dark: {
                [x: string]: string;
            };
            bg: string;
        };
    }) | undefined;
    sizes?: {
        lg: {
            container: {
                [x: string]: string;
            };
        };
        md: {
            container: {
                [x: string]: string;
            };
        };
        sm: {
            container: {
                [x: string]: string;
            };
        };
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: "md" | "sm" | "lg" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
};
