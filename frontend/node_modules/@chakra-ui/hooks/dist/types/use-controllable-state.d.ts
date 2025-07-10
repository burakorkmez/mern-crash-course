/**
 * Given a prop value and state value, the useControllableProp hook is used to determine whether a component is controlled or uncontrolled, and also returns the computed value.
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-controllable#usecontrollableprop
 */
export declare function useControllableProp<T>(prop: T | undefined, state: T): [boolean, T];
export interface UseControllableStateProps<T> {
    value?: T;
    defaultValue?: T | (() => T);
    onChange?: (value: T) => void;
    shouldUpdate?: (prev: T, next: T) => boolean;
}
/**
 * The `useControllableState` hook returns the state and function that updates the state, just like React.useState does.
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-controllable#usecontrollablestate
 */
export declare function useControllableState<T>(props: UseControllableStateProps<T>): [T, import("react").Dispatch<import("react").SetStateAction<T>>];
