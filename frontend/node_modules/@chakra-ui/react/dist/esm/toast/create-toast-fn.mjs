'use client';
import { runIfFn } from '@chakra-ui/utils';
import { createRenderToast } from './toast.mjs';
import { getToastPlacement } from './toast.placement.mjs';
import { toastStore } from './toast.store.mjs';

function createToastFn(dir, defaultOptions) {
  const normalizeToastOptions = (options) => ({
    ...defaultOptions,
    ...options,
    position: getToastPlacement(
      options?.position ?? defaultOptions?.position,
      dir
    )
  });
  const toast = (options) => {
    const normalizedToastOptions = normalizeToastOptions(options);
    const Message = createRenderToast(normalizedToastOptions);
    return toastStore.notify(Message, normalizedToastOptions);
  };
  toast.update = (id, options) => {
    toastStore.update(id, normalizeToastOptions(options));
  };
  toast.promise = (promise, options) => {
    const id = toast({
      ...options.loading,
      status: "loading",
      duration: null
    });
    promise.then(
      (data) => toast.update(id, {
        status: "success",
        duration: 5e3,
        ...runIfFn(options.success, data)
      })
    ).catch(
      (error) => toast.update(id, {
        status: "error",
        duration: 5e3,
        ...runIfFn(options.error, error)
      })
    );
  };
  toast.closeAll = toastStore.closeAll;
  toast.close = toastStore.close;
  toast.isActive = toastStore.isActive;
  return toast;
}

export { createToastFn };
