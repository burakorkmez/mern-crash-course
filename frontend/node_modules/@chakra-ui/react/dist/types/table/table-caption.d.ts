import { HTMLChakraProps } from "../system";
export interface TableCaptionProps extends HTMLChakraProps<"caption"> {
    /**
     * The placement of the table caption. This sets the `caption-side` CSS attribute.
     * @default "bottom"
     */
    placement?: "top" | "bottom";
}
export declare const TableCaption: import("../system").ComponentWithAs<"caption", TableCaptionProps>;
