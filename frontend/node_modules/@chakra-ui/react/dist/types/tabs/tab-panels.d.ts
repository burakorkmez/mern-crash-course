import { HTMLChakraProps } from "../system";
export interface TabPanelsProps extends HTMLChakraProps<"div"> {
}
/**
 * TabPanel
 *
 * Used to manage the rendering of multiple tab panels. It uses
 * `cloneElement` to hide/show tab panels.
 *
 * It renders a `div` by default.
 */
export declare const TabPanels: import("../system").ComponentWithAs<"div", TabPanelsProps>;
