'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var toast_component = require('./toast.component.cjs');
var toast_store = require('./toast.store.cjs');
var toast_utils = require('./toast.utils.cjs');
var portal = require('../portal/portal.cjs');

const [ToastOptionProvider, useToastOptionContext] = utils.createContext({
  name: `ToastOptionsContext`,
  strict: false
});
const ToastProvider = (props) => {
  const state = React.useSyncExternalStore(
    toast_store.toastStore.subscribe,
    toast_store.toastStore.getState,
    toast_store.toastStore.getState
  );
  const {
    motionVariants,
    component: Component = toast_component.ToastComponent,
    portalProps,
    animatePresenceProps
  } = props;
  const stateKeys = Object.keys(state);
  const toastList = stateKeys.map((position) => {
    const toasts = state[position];
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${position}`,
        id: `chakra-toast-manager-${position}`,
        style: toast_utils.getToastListStyle(position),
        children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { ...animatePresenceProps, initial: false, children: toasts.map((toast) => /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(portal.Portal, { ...portalProps, children: toastList });
};

exports.ToastOptionProvider = ToastOptionProvider;
exports.ToastProvider = ToastProvider;
exports.useToastOptionContext = useToastOptionContext;
