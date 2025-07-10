export interface Chunk {
    text: string;
    match: boolean;
}
export interface HighlightOptions {
    text: string;
    query: string | string[];
}
export declare function highlightWords({ text, query }: HighlightOptions): Chunk[];
