import { ResponsiveValue, WithCSSVar } from "./utils";
type Theme = WithCSSVar<Record<string, any>>;
type Config = {
    parts?: string[];
    baseStyle?: Record<string, any>;
    variants?: Record<string, any>;
    sizes?: Record<string, any>;
};
type ValueType = ResponsiveValue<string | boolean>;
type Values = {
    theme: Theme;
    variant?: ValueType;
    size?: ValueType;
};
export declare function resolveStyleConfig(config: Config): (props: Values) => any;
export {};
