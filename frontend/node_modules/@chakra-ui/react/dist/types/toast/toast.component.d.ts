/// <reference types="react" />
import { ToastProviderProps } from "./toast.provider";
import type { ToastOptions } from "./toast.types";
export interface ToastComponentProps extends ToastOptions, Pick<ToastProviderProps, "motionVariants" | "toastSpacing"> {
}
export declare const ToastComponent: import("react").MemoExoticComponent<(props: ToastComponentProps) => import("react/jsx-runtime").JSX.Element>;
