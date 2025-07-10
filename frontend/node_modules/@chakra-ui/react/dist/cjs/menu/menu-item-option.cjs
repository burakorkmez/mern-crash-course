'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var menuIcon = require('./menu-icon.cjs');
var styledMenuItem = require('./styled-menu-item.cjs');
var useMenu = require('./use-menu.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const CheckIcon = (props) => /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) });
const MenuItemOption = forwardRef.forwardRef(
  (props, ref) => {
    const {
      icon,
      iconSpacing = "0.75rem",
      iconPlacement = "start",
      ...rest
    } = props;
    const optionProps = useMenu.useMenuOption(rest, ref);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      styledMenuItem.StyledMenuItem,
      {
        ...optionProps,
        className: utils.cx("chakra-menu__menuitem-option", rest.className),
        children: [
          icon !== null && iconPlacement === "start" && /* @__PURE__ */ jsxRuntime.jsx(
            menuIcon.MenuIcon,
            {
              fontSize: "0.8em",
              marginEnd: iconSpacing,
              opacity: props.isChecked ? 1 : 0,
              children: icon || /* @__PURE__ */ jsxRuntime.jsx(CheckIcon, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { style: { flex: 1 }, children: optionProps.children }),
          icon !== null && iconPlacement === "end" && /* @__PURE__ */ jsxRuntime.jsx(
            menuIcon.MenuIcon,
            {
              fontSize: "0.8em",
              marginStart: iconSpacing,
              opacity: props.isChecked ? 1 : 0,
              children: icon || /* @__PURE__ */ jsxRuntime.jsx(CheckIcon, {})
            }
          )
        ]
      }
    );
  }
);
MenuItemOption.id = "MenuItemOption";
MenuItemOption.displayName = "MenuItemOption";

exports.MenuItemOption = MenuItemOption;
