'use client';
'use strict';

var toast = require('./toast.cjs');
var toast_utils = require('./toast.utils.cjs');

const initialState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
const toastStore = createStore(initialState);
function createStore(initialState2) {
  let state = initialState2;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (setStateFn) => {
    state = setStateFn(state);
    listeners.forEach((l) => l());
  };
  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => initialState2);
        listeners.delete(listener);
      };
    },
    /**
     * Delete a toast record at its position
     */
    removeToast: (id, position) => {
      setState((prevState) => ({
        ...prevState,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [position]: prevState[position].filter((toast) => toast.id != id)
      }));
    },
    notify: (message, options) => {
      const toast = createToast(message, options);
      const { position, id } = toast;
      setState((prevToasts) => {
        const isTop = position.includes("top");
        const toasts = isTop ? [toast, ...prevToasts[position] ?? []] : [...prevToasts[position] ?? [], toast];
        return {
          ...prevToasts,
          [position]: toasts
        };
      });
      return id;
    },
    update: (id, options) => {
      if (!id)
        return;
      setState((prevState) => {
        const nextState = { ...prevState };
        const { position, index } = toast_utils.findToast(nextState, id);
        if (position && index !== -1) {
          nextState[position][index] = {
            ...nextState[position][index],
            ...options,
            message: toast.createRenderToast(options)
          };
        }
        return nextState;
      });
    },
    closeAll: ({ positions } = {}) => {
      setState((prev) => {
        const allPositions = [
          "bottom",
          "bottom-right",
          "bottom-left",
          "top",
          "top-left",
          "top-right"
        ];
        const positionsToClose = positions ?? allPositions;
        return positionsToClose.reduce(
          (acc, position) => {
            acc[position] = prev[position].map((toast) => ({
              ...toast,
              requestClose: true
            }));
            return acc;
          },
          { ...prev }
        );
      });
    },
    close: (id) => {
      setState((prevState) => {
        const position = toast_utils.getToastPosition(prevState, id);
        if (!position)
          return prevState;
        return {
          ...prevState,
          [position]: prevState[position].map((toast) => {
            if (toast.id == id) {
              return {
                ...toast,
                requestClose: true
              };
            }
            return toast;
          })
        };
      });
    },
    isActive: (id) => Boolean(toast_utils.findToast(toastStore.getState(), id).position)
  };
}
let counter = 0;
function createToast(message, options = {}) {
  counter += 1;
  const id = options.id ?? counter;
  const position = options.position ?? "bottom";
  return {
    id,
    message,
    position,
    duration: options.duration,
    onCloseComplete: options.onCloseComplete,
    onRequestRemove: () => toastStore.removeToast(String(id), position),
    status: options.status,
    requestClose: false,
    containerStyle: options.containerStyle
  };
}

exports.toastStore = toastStore;
