import { ToastPosition } from "./toast.placement";
import { ToastMethods } from "./toast.provider";
import type { ToastId, ToastState } from "./toast.types";
type ToastStore = ToastMethods & {
    getState: () => ToastState;
    subscribe: (onStoreChange: () => void) => () => void;
    removeToast: (id: ToastId, position: ToastPosition) => void;
};
/**
 * Store to track all the toast across all positions
 */
export declare const toastStore: ToastStore;
export {};
