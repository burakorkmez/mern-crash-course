'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var menu = require('./menu.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StyledMenuItem = forwardRef.forwardRef(
  (props, ref) => {
    const { type, ...rest } = props;
    const styles = menu.useMenuStyles();
    const btnType = rest.as || type ? type ?? void 0 : "button";
    const buttonStyles = React.useMemo(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...styles.item
      }),
      [styles.item]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.button, { ref, type: btnType, ...rest, __css: buttonStyles });
  }
);

exports.StyledMenuItem = StyledMenuItem;
