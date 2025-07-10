import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseAccordionProps } from "./use-accordion";
export interface AccordionProps extends UseAccordionProps, Omit<HTMLChakraProps<"div">, keyof UseAccordionProps>, ThemingProps<"Accordion"> {
    /**
     * If `true`, height animation and transitions will be disabled.
     *
     * @default false
     */
    reduceMotion?: boolean;
}
/**
 * The wrapper that provides context and focus management
 * for all accordion items.
 *
 * It wraps all accordion items in a `div` for better grouping.
 * @see Docs https://chakra-ui.com/accordion
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
 */
export declare const Accordion: import("../system").ComponentWithAs<"div", AccordionProps>;
