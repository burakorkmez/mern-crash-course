type InitialState = boolean | (() => boolean);
/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-boolean
 */
export declare function useBoolean(initialState?: InitialState): readonly [boolean, {
    on: () => void;
    off: () => void;
    toggle: () => void;
}];
export {};
