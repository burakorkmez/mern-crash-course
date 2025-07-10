'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var toast = require('./toast.cjs');
var toast_placement = require('./toast.placement.cjs');
var toast_store = require('./toast.store.cjs');

function createToastFn(dir, defaultOptions) {
  const normalizeToastOptions = (options) => ({
    ...defaultOptions,
    ...options,
    position: toast_placement.getToastPlacement(
      options?.position ?? defaultOptions?.position,
      dir
    )
  });
  const toast$1 = (options) => {
    const normalizedToastOptions = normalizeToastOptions(options);
    const Message = toast.createRenderToast(normalizedToastOptions);
    return toast_store.toastStore.notify(Message, normalizedToastOptions);
  };
  toast$1.update = (id, options) => {
    toast_store.toastStore.update(id, normalizeToastOptions(options));
  };
  toast$1.promise = (promise, options) => {
    const id = toast$1({
      ...options.loading,
      status: "loading",
      duration: null
    });
    promise.then(
      (data) => toast$1.update(id, {
        status: "success",
        duration: 5e3,
        ...utils.runIfFn(options.success, data)
      })
    ).catch(
      (error) => toast$1.update(id, {
        status: "error",
        duration: 5e3,
        ...utils.runIfFn(options.error, error)
      })
    );
  };
  toast$1.closeAll = toast_store.toastStore.closeAll;
  toast$1.close = toast_store.toastStore.close;
  toast$1.isActive = toast_store.toastStore.isActive;
  return toast$1;
}

exports.createToastFn = createToastFn;
