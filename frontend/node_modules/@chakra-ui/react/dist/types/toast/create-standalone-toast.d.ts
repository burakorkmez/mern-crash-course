import { type JSX } from "react";
import { type ColorMode } from "../color-mode";
import { useChakra } from "../system";
import { CreateToastFnReturn } from "./create-toast-fn";
import { ToastProviderProps } from "./toast.provider";
import { UseToastOptions } from "./use-toast";
export interface CreateStandAloneToastParam extends Partial<ReturnType<typeof useChakra> & {
    setColorMode: (value: ColorMode) => void;
    defaultOptions: UseToastOptions;
}>, Omit<ToastProviderProps, "children"> {
}
export declare const defaultStandaloneParam: CreateStandAloneToastParam & Required<Omit<CreateStandAloneToastParam, keyof ToastProviderProps>>;
export type CreateStandaloneToastReturn = {
    ToastContainer: () => JSX.Element;
    toast: CreateToastFnReturn;
};
/**
 * Create a toast
 */
export declare function createStandaloneToast({ theme, colorMode, toggleColorMode, setColorMode, defaultOptions, motionVariants, toastSpacing, component, forced, }?: CreateStandAloneToastParam): CreateStandaloneToastReturn;
