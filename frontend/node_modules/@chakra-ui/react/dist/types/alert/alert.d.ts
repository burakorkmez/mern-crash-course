import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { AlertStatus } from "./alert-context";
interface AlertOptions {
    /**
     * The status of the alert
     * @default "info"
     */
    status?: AlertStatus;
}
export interface AlertProps extends HTMLChakraProps<"div">, AlertOptions, ThemingProps<"Alert"> {
    /**
     * @default false
     */
    addRole?: boolean;
}
/**
 * Alert is used to communicate the state or status of a
 * page, feature or action
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/alert
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 */
export declare const Alert: import("../system").ComponentWithAs<"div", AlertProps>;
export {};
