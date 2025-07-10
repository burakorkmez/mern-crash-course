declare const vars: Record<"color" | "shadow" | "bg", {
    variable: string;
    reference: string;
}>;
export declare const badgeTheme: {
    baseStyle?: {
        px: number;
        textTransform: string;
        fontSize: string;
        borderRadius: string;
        fontWeight: string;
        bg: string;
        color: string;
        boxShadow: string;
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    } | undefined;
    variants?: {
        solid: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            [x: string]: string | {
                [x: string]: string;
            };
            _dark: {
                [x: string]: string;
            };
        };
        subtle: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            [x: string]: string | {
                [x: string]: string;
            };
            _dark: {
                [x: string]: string;
            };
        };
        outline: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            [x: string]: string | {
                [x: string]: string;
            };
            _dark: {
                [x: string]: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "outline" | "solid" | "subtle" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
export { vars as badgeVars };
