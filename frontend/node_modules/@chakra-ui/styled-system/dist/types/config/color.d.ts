import * as CSS from "csstype";
import { Config } from "../utils/prop-config";
import { Token } from "../utils";
export declare const color: Config;
export interface ColorProps {
    /**
     * The CSS `color` property
     */
    textColor?: Token<CSS.Property.Color, "colors">;
    /**
     * The CSS `color` property
     */
    color?: Token<CSS.Property.Color, "colors">;
    /**
     * The CSS `accent-color` property
     */
    accentColor?: Token<CSS.Property.Color, "colors">;
    /**
     * The CSS `fill` property for icon svgs and paths
     */
    fill?: Token<CSS.Property.Color, "colors">;
    /**
     * The CSS `stroke` property for icon svgs and paths
     */
    stroke?: Token<CSS.Property.Color, "colors">;
    /**
     * The CSS `text-fill-color` property
     */
    textFillColor?: Token<CSS.Property.Color, "colors">;
}
