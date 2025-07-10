import { Dict } from "@chakra-ui/utils";
type StringOrNumber = string | number;
export declare function useChakra<T extends Dict = Dict>(): {
    theme: T;
    forced?: boolean | undefined;
    colorMode: import("../color-mode").ColorMode;
    toggleColorMode: () => void;
    setColorMode: (value: any) => void;
};
/**
 * `useToken` is a custom hook used to resolve design tokens from the theme.
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-token
 */
export declare function useToken<T extends StringOrNumber | StringOrNumber[]>(scale: string, token: T, fallback?: T): T;
export declare function getToken<T extends StringOrNumber | StringOrNumber[]>(scale: string, token: T, fallback?: T): (theme: Dict) => T;
export {};
