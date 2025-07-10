/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param value the value or function to persist
 */
export declare function useLatestRef<T>(value: T): import("react").MutableRefObject<T>;
