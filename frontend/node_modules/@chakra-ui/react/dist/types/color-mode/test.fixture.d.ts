import * as React from "react";
export declare const DummyComponent: () => import("react/jsx-runtime").JSX.Element;
export declare const resetCounter: () => void;
export declare const MemoizedComponent: React.NamedExoticComponent<object>;
export declare const RegularComponent: () => import("react/jsx-runtime").JSX.Element;
export declare const getColorModeButton: () => HTMLElement;
export declare const defaultThemeOptions: {
    readonly useSystemColorMode: false;
    readonly initialColorMode: "light";
    readonly cssVarPrefix: "chakra";
};
export declare function mockMatchMedia(query: string): void;
export declare function mockLocalStorage(colorMode: string): void;
export declare function mockCookieStorage(colorMode: string | null): void;
