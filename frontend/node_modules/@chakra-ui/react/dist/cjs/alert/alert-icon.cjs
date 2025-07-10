'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var alertContext = require('./alert-context.cjs');
var factory = require('../system/factory.cjs');

function AlertIcon(props) {
  const { status } = alertContext.useAlertContext();
  const BaseIcon = alertContext.getStatusIcon(status);
  const styles = alertContext.useAlertStyles();
  const css = status === "loading" ? styles.spinner : styles.icon;
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.span,
    {
      display: "inherit",
      "data-status": status,
      ...props,
      className: utils.cx("chakra-alert__icon", props.className),
      __css: css,
      children: props.children || /* @__PURE__ */ jsxRuntime.jsx(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
AlertIcon.displayName = "AlertIcon";

exports.AlertIcon = AlertIcon;
