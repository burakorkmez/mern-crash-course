'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var alertContext = require('./alert-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const AlertDescription = forwardRef.forwardRef(
  function AlertDescription2(props, ref) {
    const { status } = alertContext.useAlertContext();
    const styles = alertContext.useAlertStyles();
    const descriptionStyles = styledSystem.defineStyle({
      display: "inline",
      ...styles.description
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: utils.cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
AlertDescription.displayName = "AlertDescription";

exports.AlertDescription = AlertDescription;
