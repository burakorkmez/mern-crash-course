'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var alert = require('../alert/alert.cjs');
var alertIcon = require('../alert/alert-icon.cjs');
var alertTitle = require('../alert/alert-title.cjs');
var alertDescription = require('../alert/alert-description.cjs');
var closeButton = require('../close-button/close-button.cjs');
var factory = require('../system/factory.cjs');

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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    alert.Alert,
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
        /* @__PURE__ */ jsxRuntime.jsx(alertIcon.AlertIcon, { children: icon }),
        /* @__PURE__ */ jsxRuntime.jsxs(factory.chakra.div, { flex: "1", maxWidth: "100%", children: [
          title && /* @__PURE__ */ jsxRuntime.jsx(alertTitle.AlertTitle, { id: ids?.title, children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx(alertDescription.AlertDescription, { id: ids?.description, display: "block", children: description })
        ] }),
        isClosable && /* @__PURE__ */ jsxRuntime.jsx(
          closeButton.CloseButton,
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
    return /* @__PURE__ */ jsxRuntime.jsx(ToastComponent, { ...props, ...options });
  };
  return renderToast;
}

exports.Toast = Toast;
exports.createRenderToast = createRenderToast;
