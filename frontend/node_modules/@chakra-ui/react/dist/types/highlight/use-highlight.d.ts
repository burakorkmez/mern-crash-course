import { HighlightOptions } from "./highlight-words";
export interface UseHighlightProps extends HighlightOptions {
}
export declare function useHighlight(props: UseHighlightProps): import("./highlight-words").Chunk[];
