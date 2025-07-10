'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { MenuIcon } from './menu-icon.mjs';
import { StyledMenuItem } from './styled-menu-item.mjs';
import { useMenuOption } from './use-menu.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const CheckIcon = (props) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...props, children: /* @__PURE__ */ jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) });
const MenuItemOption = forwardRef(
  (props, ref) => {
    const {
      icon,
      iconSpacing = "0.75rem",
      iconPlacement = "start",
      ...rest
    } = props;
    const optionProps = useMenuOption(rest, ref);
    return /* @__PURE__ */ jsxs(
      StyledMenuItem,
      {
        ...optionProps,
        className: cx("chakra-menu__menuitem-option", rest.className),
        children: [
          icon !== null && iconPlacement === "start" && /* @__PURE__ */ jsx(
            MenuIcon,
            {
              fontSize: "0.8em",
              marginEnd: iconSpacing,
              opacity: props.isChecked ? 1 : 0,
              children: icon || /* @__PURE__ */ jsx(CheckIcon, {})
            }
          ),
          /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: optionProps.children }),
          icon !== null && iconPlacement === "end" && /* @__PURE__ */ jsx(
            MenuIcon,
            {
              fontSize: "0.8em",
              marginStart: iconSpacing,
              opacity: props.isChecked ? 1 : 0,
              children: icon || /* @__PURE__ */ jsx(CheckIcon, {})
            }
          )
        ]
      }
    );
  }
);
MenuItemOption.id = "MenuItemOption";
MenuItemOption.displayName = "MenuItemOption";

export { MenuItemOption };
