/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { CheckIcon, InfoIcon, WarningIcon } from "./alert-icons";
export declare const AlertProvider: import("react").Provider<AlertContext>, useAlertContext: () => AlertContext;
export declare const AlertStylesProvider: import("react").Provider<Record<string, SystemStyleObject>>, useAlertStyles: () => Record<string, SystemStyleObject>;
declare const STATUSES: {
    info: {
        icon: typeof InfoIcon;
        colorScheme: string;
    };
    warning: {
        icon: typeof WarningIcon;
        colorScheme: string;
    };
    success: {
        icon: typeof CheckIcon;
        colorScheme: string;
    };
    error: {
        icon: typeof WarningIcon;
        colorScheme: string;
    };
    loading: {
        icon: import("..").ComponentWithAs<"div", import("../spinner").SpinnerProps>;
        colorScheme: string;
    };
};
export declare function getStatusColorScheme(status: AlertStatus): string;
export declare function getStatusIcon(status: AlertStatus): import("..").ComponentWithAs<"div", import("../spinner").SpinnerProps> | typeof InfoIcon | typeof WarningIcon | typeof CheckIcon;
export type AlertStatus = keyof typeof STATUSES;
export interface AlertContext {
    status: AlertStatus;
}
export {};
