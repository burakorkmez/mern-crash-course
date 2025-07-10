import { HTMLChakraProps } from "../system";
export interface AccordionButtonProps extends HTMLChakraProps<"button"> {
}
/**
 * AccordionButton is used expands and collapses an accordion item.
 * It must be a child of `AccordionItem`.
 *
 * Note 🚨: Each accordion button must be wrapped in a heading tag,
 * that is appropriate for the information architecture of the page.
 */
export declare const AccordionButton: import("../system").ComponentWithAs<"button", AccordionButtonProps>;
