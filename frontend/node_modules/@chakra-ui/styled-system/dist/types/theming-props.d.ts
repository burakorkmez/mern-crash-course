import { ThemeTypings } from "./theme.types";
import { ResponsiveValue } from "./utils";
export interface ThemingProps<ThemeComponent extends string = any> {
    variant?: ResponsiveValue<ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["variants"] : string>;
    size?: ResponsiveValue<ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["sizes"] : string>;
    colorScheme?: ThemeTypings["colorSchemes"];
    orientation?: "vertical" | "horizontal";
    styleConfig?: Record<string, any>;
}
export declare function omitThemingProps<T extends ThemingProps>(props: T): Omit<T, "colorScheme" | "size" | "variant" | "styleConfig">;
