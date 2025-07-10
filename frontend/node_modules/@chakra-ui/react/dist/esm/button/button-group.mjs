'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { ButtonGroupProvider } from './button-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const attachedStyles = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
};
const gapStyles = {
  horizontal: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing }
  }),
  vertical: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing }
  })
};
const ButtonGroup = forwardRef(
  function ButtonGroup2(props, ref) {
    const {
      size,
      colorScheme,
      variant,
      className,
      spacing = "0.5rem",
      isAttached,
      isDisabled,
      orientation = "horizontal",
      ...rest
    } = props;
    const _className = cx("chakra-button__group", className);
    const context = useMemo(
      () => ({ size, colorScheme, variant, isDisabled }),
      [size, colorScheme, variant, isDisabled]
    );
    let groupStyles = {
      display: "inline-flex",
      ...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing)
    };
    const isVertical = orientation === "vertical";
    return /* @__PURE__ */ jsx(ButtonGroupProvider, { value: context, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        className: _className,
        "data-attached": isAttached ? "" : void 0,
        "data-orientation": orientation,
        flexDir: isVertical ? "column" : void 0,
        ...rest
      }
    ) });
  }
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
