'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var alertContext = require('./alert-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const AlertTitle = forwardRef.forwardRef(
  function AlertTitle2(props, ref) {
    const styles = alertContext.useAlertStyles();
    const { status } = alertContext.useAlertContext();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: utils.cx("chakra-alert__title", props.className),
        __css: styles.title
      }
    );
  }
);
AlertTitle.displayName = "AlertTitle";

exports.AlertTitle = AlertTitle;
