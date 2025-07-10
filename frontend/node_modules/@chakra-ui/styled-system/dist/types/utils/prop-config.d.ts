import * as CSS from "csstype";
import { ThemeScale } from "../create-theme-vars";
import type { CssTheme, Transform } from "./types";
type CSSProp = keyof CSS.Properties | (string & {});
type MaybeArray<T> = T | T[];
type MaybeThemeFunction<T> = T | ((theme: CssTheme) => T);
type StringUnion<T> = T | (string & {});
export interface PropConfig {
    /**
     * This is useful for props that need to leverage CSS variables
     * Static styles to append to the computed styles.
     *
     * It does not get replicated if value is responsive or styles are nested.
     */
    static?: Record<string, any>;
    /**
     * The theme scale this maps to
     */
    scale?: ThemeScale;
    /**
     * Css property or Css variable the prop maps to
     */
    property?: MaybeThemeFunction<MaybeArray<StringUnion<CSSProp>>>;
    /**
     * Function to transform the value passed
     */
    transform?: Transform;
    /**
     * Useful for `layerStyle`, tex`tStyles and `apply` where their
     * transform function returns theme aware styles
     */
    processResult?: boolean;
}
export type Config = Record<string, PropConfig | true>;
export declare function toConfig(scale: ThemeScale, transform?: Transform): <T extends CSSProp>(property: T | T[]) => PropConfig;
interface Opts {
    scale?: ThemeScale;
    property: {
        ltr: MaybeArray<CSSProp>;
        rtl: MaybeArray<CSSProp>;
    };
    transform?: Transform;
}
export declare function logical(options: Opts): PropConfig;
export {};
