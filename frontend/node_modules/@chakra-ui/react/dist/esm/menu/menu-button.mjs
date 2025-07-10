'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useMenuStyles } from './menu.mjs';
import { useMenuButton } from './use-menu.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StyledMenuButton = forwardRef((props, ref) => {
  const styles = useMenuStyles();
  return /* @__PURE__ */ jsx(
    chakra.button,
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
const MenuButton = forwardRef(
  (props, ref) => {
    const { children, as: As, ...rest } = props;
    const buttonProps = useMenuButton(rest, ref);
    const Element = As || StyledMenuButton;
    return /* @__PURE__ */ jsx(
      Element,
      {
        ...buttonProps,
        className: cx("chakra-menu__menu-button", props.className),
        children: /* @__PURE__ */ jsx(
          chakra.span,
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

export { MenuButton };
