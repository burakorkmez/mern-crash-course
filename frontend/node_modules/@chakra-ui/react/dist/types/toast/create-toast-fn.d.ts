import { MaybeFunction, UseToastPromiseOption } from "./toast";
import type { ToastId } from "./toast.types";
import type { UseToastOptions } from "./use-toast";
export declare function createToastFn(dir: "ltr" | "rtl", defaultOptions?: UseToastOptions): {
    (options?: UseToastOptions): ToastId;
    update(id: ToastId, options: Omit<UseToastOptions, "id">): void;
    promise<Result extends unknown, Err extends Error = Error>(promise: Promise<Result>, options: {
        success: MaybeFunction<UseToastPromiseOption, [Result]>;
        error: MaybeFunction<UseToastPromiseOption, [Err]>;
        loading: UseToastPromiseOption;
    }): void;
    closeAll: (options?: import("./toast.types").CloseAllToastsOptions | undefined) => void;
    close: (id: ToastId) => void;
    isActive: (id: ToastId) => boolean;
};
export type CreateToastFnReturn = ReturnType<typeof createToastFn>;
