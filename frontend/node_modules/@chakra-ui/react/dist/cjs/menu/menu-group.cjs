'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var menu = require('./menu.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const MenuGroup = forwardRef.forwardRef((props, ref) => {
  const { title, children, className, ...rest } = props;
  const _className = utils.cx("chakra-menu__group__title", className);
  const styles = menu.useMenuStyles();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: "chakra-menu__group", role: "group", children: [
    title && /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.p, { className: _className, ...rest, __css: styles.groupTitle, children: title }),
    children
  ] });
});
MenuGroup.displayName = "MenuGroup";

exports.MenuGroup = MenuGroup;
