'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var menu = require('./menu.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const MenuCommand = forwardRef.forwardRef(
  (props, ref) => {
    const styles = menu.useMenuStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.span,
      {
        ref,
        ...props,
        __css: styles.command,
        className: "chakra-menu__command"
      }
    );
  }
);
MenuCommand.displayName = "MenuCommand";

exports.MenuCommand = MenuCommand;
