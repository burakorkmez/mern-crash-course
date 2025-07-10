import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
declare const useStatStyles: () => Record<string, SystemStyleObject>;
export { useStatStyles };
export interface StatProps extends HTMLChakraProps<"div">, ThemingProps<"Stat"> {
}
/**
 * The `Stat` component is used to display some statistics.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/stat
 */
export declare const Stat: import("../system").ComponentWithAs<"div", StatProps>;
