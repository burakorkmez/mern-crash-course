import { ColorMode } from "./color-mode-types";
export declare const STORAGE_KEY = "chakra-ui-color-mode";
type MaybeColorMode = ColorMode | undefined;
export interface StorageManager {
    type: "cookie" | "localStorage";
    ssr?: boolean;
    get(init?: ColorMode): MaybeColorMode;
    set(value: ColorMode | "system"): void;
}
export declare function createLocalStorageManager(key: string): StorageManager;
export declare const localStorageManager: StorageManager;
export declare function createCookieStorageManager(key: string, cookie?: string): StorageManager;
export declare const cookieStorageManager: StorageManager;
export declare const cookieStorageManagerSSR: (cookie: string) => StorageManager;
export {};
