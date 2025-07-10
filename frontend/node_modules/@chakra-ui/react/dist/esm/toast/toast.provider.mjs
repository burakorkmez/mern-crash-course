'use client';
import { jsx } from 'react/jsx-runtime';
import { createContext } from '@chakra-ui/utils';
import { AnimatePresence } from 'framer-motion';
import { useSyncExternalStore } from 'react';
import { ToastComponent } from './toast.component.mjs';
import { toastStore } from './toast.store.mjs';
import { getToastListStyle } from './toast.utils.mjs';
import { Portal } from '../portal/portal.mjs';

const [ToastOptionProvider, useToastOptionContext] = createContext({
  name: `ToastOptionsContext`,
  strict: false
});
const ToastProvider = (props) => {
  const state = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );
  const {
    motionVariants,
    component: Component = ToastComponent,
    portalProps,
    animatePresenceProps
  } = props;
  const stateKeys = Object.keys(state);
  const toastList = stateKeys.map((position) => {
    const toasts = state[position];
    return /* @__PURE__ */ jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${position}`,
        id: `chakra-toast-manager-${position}`,
        style: getToastListStyle(position),
        children: /* @__PURE__ */ jsx(AnimatePresence, { ...animatePresenceProps, initial: false, children: toasts.map((toast) => /* @__PURE__ */ jsx(
          Component,
          {
            motionVariants,
            ...toast
          },
          toast.id
        )) })
      },
      position
    );
  });
  return /* @__PURE__ */ jsx(Portal, { ...portalProps, children: toastList });
};

export { ToastOptionProvider, ToastProvider, useToastOptionContext };
