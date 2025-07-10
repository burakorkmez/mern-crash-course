type MediaQueryListener = (this: MediaQueryList) => void;
interface MediaQueryList {
    readonly matches: boolean;
    readonly media: string;
    onchange: MediaQueryListener | null;
    addListener(listener: MediaQueryListener): void;
    removeListener(listener: MediaQueryListener): void;
    addEventListener(type: "change", listener: MediaQueryListener): void;
    removeEventListener(type: "change", listener: MediaQueryListener): void;
    dispatchEvent(event: Event): boolean;
}
export default class MatchMedia {
    private mediaQueries;
    private prevMatchMap;
    private mediaQueryList;
    constructor();
    private compileQuery;
    private evalQuery;
    /**
     *
     * Adds a listener function for the window resize event
     * @private
     */
    private handleResize;
    private addListener;
    private removeListener;
    /**
     * Returns an array listing the media queries for which the matchMedia has registered listeners
     * @public
     */
    getMediaQueries(): string[];
    /**
     * Returns a copy of the array of listeners for the specified media query
     * @public
     */
    getListeners(mediaQuery: string): MediaQueryListener[];
    /**
     * Clears all registered media queries and their listeners
     * @public
     */
    clear(): void;
    /**
     * Clears all registered media queries and their listeners,
     * and destroys the implementation of `window.matchMedia`
     * @public
     */
    destroy(): void;
}
export {};
