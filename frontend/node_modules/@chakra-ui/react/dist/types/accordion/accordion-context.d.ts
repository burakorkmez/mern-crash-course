/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { UseAccordionItemReturn } from "./use-accordion";
export declare const AccordionStylesProvider: import("react").Provider<Record<string, SystemStyleObject>>, useAccordionStyles: () => Record<string, SystemStyleObject>;
type AccordionItemContext = Omit<UseAccordionItemReturn, "htmlProps">;
export declare const AccordionItemProvider: import("react").Provider<AccordionItemContext>, useAccordionItemContext: () => AccordionItemContext;
export declare const AccordionDescendantsProvider: import("react").Provider<import("../descendant").DescendantsManager<HTMLButtonElement, {}>>, useAccordionDescendantsContext: () => import("../descendant").DescendantsManager<HTMLButtonElement, {}>, useAccordionDescendants: () => import("../descendant").DescendantsManager<HTMLButtonElement, {}>, useAccordionDescendant: (options?: {
    disabled?: boolean | undefined;
    id?: string | undefined;
} | undefined) => import("../descendant/use-descendant").UseDescendantReturn<HTMLButtonElement, {}>;
export {};
