import { HTMLChakraProps } from "../system";
export interface TableCellProps extends HTMLChakraProps<"td"> {
    /**
     * Aligns the cell content to the right
     * @default false
     */
    isNumeric?: boolean;
}
export declare const Td: import("../system").ComponentWithAs<"td", TableCellProps>;
