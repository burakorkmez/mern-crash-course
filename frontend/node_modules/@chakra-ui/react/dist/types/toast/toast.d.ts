/// <reference types="react" />
import { AlertProps } from "../alert";
import type { RenderProps } from "./toast.types";
import type { UseToastOptions } from "./use-toast";
export interface ToastProps extends UseToastOptions, Omit<AlertProps, keyof UseToastOptions> {
    onClose?: () => void;
}
/**
 * The `Toast` component is used to give feedback to users after an action has taken place.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/toast
 */
export declare const Toast: React.FC<ToastProps>;
export declare function createRenderToast(options?: UseToastOptions & {
    toastComponent?: React.FC<ToastProps>;
}): import("react").FC<RenderProps>;
export type UseToastPromiseOption = Omit<UseToastOptions, "status">;
export type MaybeFunction<T, Args extends unknown[] = []> = T | ((...args: Args) => T);
