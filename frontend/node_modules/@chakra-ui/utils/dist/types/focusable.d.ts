export declare function getAllFocusable<T extends HTMLElement>(container: T): T[];
export declare function getFirstFocusable<T extends HTMLElement>(container: T): T | null;
export declare function getAllTabbable<T extends HTMLElement>(container: T, fallbackToFocusable?: boolean): T[];
export declare function getFirstTabbableIn<T extends HTMLElement>(container: T, fallbackToFocusable?: boolean): T | null;
export declare function getLastTabbableIn<T extends HTMLElement>(container: T, fallbackToFocusable?: boolean): T | null;
export declare function getNextTabbable<T extends HTMLElement>(container: T, fallbackToFocusable?: boolean): T | null;
export declare function getPreviousTabbable<T extends HTMLElement>(container: T, fallbackToFocusable?: boolean): T | null;
