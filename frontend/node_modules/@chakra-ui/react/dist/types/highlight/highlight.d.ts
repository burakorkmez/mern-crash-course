import { SystemStyleObject } from "@chakra-ui/styled-system";
import { type JSX } from "react";
import { Chunk } from "./highlight-words";
export interface HighlightProps {
    query: string | string[];
    children: string | ((props: Chunk[]) => React.ReactNode);
    styles?: SystemStyleObject;
}
/**
 * `Highlight` allows you to highlight substrings of a text.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/highlight
 */
export declare function Highlight(props: HighlightProps): JSX.Element;
