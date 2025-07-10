/// <reference types="react" />
import { HTMLChakraProps } from "../system";
import { UseAccordionItemProps } from "./use-accordion";
export interface AccordionItemProps extends Omit<HTMLChakraProps<"div">, keyof UseAccordionItemProps | "children">, UseAccordionItemProps {
    children?: React.ReactNode | ((props: {
        isExpanded: boolean;
        isDisabled: boolean;
    }) => React.ReactNode);
}
/**
 * AccordionItem is a single accordion that provides the open-close
 * behavior when the accordion button is clicked.
 *
 * It also provides context for the accordion button and panel.
 */
export declare const AccordionItem: import("../system").ComponentWithAs<"div", AccordionItemProps>;
