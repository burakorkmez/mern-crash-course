import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
declare const useTableStyles: () => Record<string, SystemStyleObject>;
export { useTableStyles };
export interface TableOptions {
    layout?: SystemStyleObject["tableLayout"];
}
export interface TableProps extends HTMLChakraProps<"table">, TableOptions, ThemingProps<"Table"> {
}
/**
 * The `Table` component is used to organize and display data efficiently. It renders a `<table>` element by default.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/table
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/table/
 */
export declare const Table: import("../system").ComponentWithAs<"table", TableProps>;
