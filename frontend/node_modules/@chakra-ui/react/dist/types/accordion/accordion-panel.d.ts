import { HTMLChakraProps } from "../system";
import { CollapseProps } from "../transition";
export interface AccordionPanelProps extends HTMLChakraProps<"div"> {
    /**
     * The properties passed to the underlying `Collapse` component.
     */
    motionProps?: CollapseProps;
}
/**
 * Accordion panel that holds the content for each accordion.
 * It shows and hides based on the state login from the `AccordionItem`.
 *
 * It uses the `Collapse` component to animate its height.
 */
export declare const AccordionPanel: import("../system").ComponentWithAs<"div", AccordionPanelProps>;
