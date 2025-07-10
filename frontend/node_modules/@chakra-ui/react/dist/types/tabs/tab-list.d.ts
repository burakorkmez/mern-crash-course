import { HTMLChakraProps } from "../system";
import { UseTabListProps } from "./use-tabs";
export interface TabListProps extends UseTabListProps, Omit<HTMLChakraProps<"div">, "onKeyDown" | "ref"> {
}
/**
 * TabList is used to manage a list of tab buttons. It renders a `div` by default,
 * and is responsible the keyboard interaction between tabs.
 */
export declare const TabList: import("../system").ComponentWithAs<"div", TabListProps>;
