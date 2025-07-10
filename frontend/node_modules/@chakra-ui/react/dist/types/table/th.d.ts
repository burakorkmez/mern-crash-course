import { HTMLChakraProps } from "../system";
export interface TableColumnHeaderProps extends HTMLChakraProps<"th"> {
    /**
     * Aligns the cell content to the right
     * @default false
     */
    isNumeric?: boolean;
}
export declare const Th: import("../system").ComponentWithAs<"th", TableColumnHeaderProps>;
