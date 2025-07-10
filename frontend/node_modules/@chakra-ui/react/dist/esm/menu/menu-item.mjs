'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { MenuCommand } from './menu-command.mjs';
import { MenuIcon } from './menu-icon.mjs';
import { StyledMenuItem } from './styled-menu-item.mjs';
import { useMenuItem } from './use-menu.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const MenuItem = forwardRef((props, ref) => {
  const {
    icon,
    iconSpacing = "0.75rem",
    command,
    commandSpacing = "0.75rem",
    children,
    ...rest
  } = props;
  const menuitemProps = useMenuItem(rest, ref);
  const shouldWrap = icon || command;
  const _children = shouldWrap ? /* @__PURE__ */ jsx("span", { style: { pointerEvents: "none", flex: 1 }, children }) : children;
  return /* @__PURE__ */ jsxs(
    StyledMenuItem,
    {
      ...menuitemProps,
      className: cx("chakra-menu__menuitem", menuitemProps.className),
      children: [
        icon && /* @__PURE__ */ jsx(MenuIcon, { fontSize: "0.8em", marginEnd: iconSpacing, children: icon }),
        _children,
        command && /* @__PURE__ */ jsx(MenuCommand, { marginStart: commandSpacing, children: command })
      ]
    }
  );
});
MenuItem.displayName = "MenuItem";

export { MenuItem };
