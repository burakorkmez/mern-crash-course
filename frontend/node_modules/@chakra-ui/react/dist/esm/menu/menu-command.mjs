'use client';
import { jsx } from 'react/jsx-runtime';
import { useMenuStyles } from './menu.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const MenuCommand = forwardRef(
  (props, ref) => {
    const styles = useMenuStyles();
    return /* @__PURE__ */ jsx(
      chakra.span,
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

export { MenuCommand };
