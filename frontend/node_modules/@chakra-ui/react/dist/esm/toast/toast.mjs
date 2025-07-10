'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Alert } from '../alert/alert.mjs';
import { AlertIcon } from '../alert/alert-icon.mjs';
import { AlertTitle } from '../alert/alert-title.mjs';
import { AlertDescription } from '../alert/alert-description.mjs';
import { CloseButton } from '../close-button/close-button.mjs';
import { chakra } from '../system/factory.mjs';

const Toast = (props) => {
  const {
    status,
    variant = "solid",
    id,
    title,
    isClosable,
    onClose,
    description,
    colorScheme,
    icon
  } = props;
  const ids = id ? {
    root: `toast-${id}`,
    title: `toast-${id}-title`,
    description: `toast-${id}-description`
  } : void 0;
  return /* @__PURE__ */ jsxs(
    Alert,
    {
      addRole: false,
      status,
      variant,
      id: ids?.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme,
      children: [
        /* @__PURE__ */ jsx(AlertIcon, { children: icon }),
        /* @__PURE__ */ jsxs(chakra.div, { flex: "1", maxWidth: "100%", children: [
          title && /* @__PURE__ */ jsx(AlertTitle, { id: ids?.title, children: title }),
          description && /* @__PURE__ */ jsx(AlertDescription, { id: ids?.description, display: "block", children: description })
        ] }),
        isClosable && /* @__PURE__ */ jsx(
          CloseButton,
          {
            size: "sm",
            onClick: onClose,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function createRenderToast(options = {}) {
  const { render, toastComponent: ToastComponent = Toast } = options;
  const renderToast = (props) => {
    if (typeof render === "function") {
      return render({ ...props, ...options });
    }
    return /* @__PURE__ */ jsx(ToastComponent, { ...props, ...options });
  };
  return renderToast;
}

export { Toast, createRenderToast };
