import { Union } from "../utils";
export type SemanticValue<Conditions extends string, Token extends string = string> = Union<Token> | Partial<Record<"default" | Conditions, Union<Token>>>;
export type PlainToken = {
    isSemantic: false;
    value: string | number;
};
export type SemanticToken = {
    isSemantic: true;
    value: string | number | SemanticValue<string>;
};
export type FlatToken = PlainToken | SemanticToken;
export type FlatTokens = Record<string, FlatToken>;
export type FlattenTokensParam = {
    tokens?: object;
    semanticTokens?: object;
};
export declare function flattenTokens(theme: Record<string, any>): FlatTokens;
