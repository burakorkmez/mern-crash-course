/// <reference types="react" />
import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseTabsProps } from "./use-tabs";
declare const useTabsStyles: () => Record<string, SystemStyleObject>;
export { useTabsStyles };
interface TabsOptions {
    /**
     * If `true`, tabs will stretch to width of the tablist.
     * @default false
     */
    isFitted?: boolean;
    /**
     * The alignment of the tabs
     */
    align?: "start" | "end" | "center";
}
export interface TabsProps extends UseTabsProps, ThemingProps<"Tabs">, Omit<HTMLChakraProps<"div">, "onChange">, TabsOptions {
    children: React.ReactNode;
}
/**
 * Tabs
 *
 * Provides context and logic for all tabs components.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/tabs
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/
 */
export declare const Tabs: import("../system").ComponentWithAs<"div", TabsProps>;
