'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var menu = require('./menu.cjs');
var useMenu = require('./use-menu.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StyledMenuButton = forwardRef.forwardRef((props, ref) => {
  const styles = menu.useMenuStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.button,
    {
      ref,
      ...props,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...styles.button
      }
    }
  );
});
const MenuButton = forwardRef.forwardRef(
  (props, ref) => {
    const { children, as: As, ...rest } = props;
    const buttonProps = useMenu.useMenuButton(rest, ref);
    const Element = As || StyledMenuButton;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Element,
      {
        ...buttonProps,
        className: utils.cx("chakra-menu__menu-button", props.className),
        children: /* @__PURE__ */ jsxRuntime.jsx(
          factory.chakra.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: props.children
          }
        )
      }
    );
  }
);
MenuButton.displayName = "MenuButton";

exports.MenuButton = MenuButton;
