'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var alertContext = require('./alert-context.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Alert = forwardRef.forwardRef(function Alert2(props, ref) {
  const { status = "info", addRole = true, ...rest } = styledSystem.omitThemingProps(props);
  const colorScheme = props.colorScheme ?? alertContext.getStatusColorScheme(status);
  const styles = useStyleConfig.useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = styledSystem.defineStyle({
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles.container
  });
  return /* @__PURE__ */ jsxRuntime.jsx(alertContext.AlertProvider, { value: { status }, children: /* @__PURE__ */ jsxRuntime.jsx(alertContext.AlertStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      "data-status": status,
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: utils.cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
});
Alert.displayName = "Alert";

exports.Alert = Alert;
