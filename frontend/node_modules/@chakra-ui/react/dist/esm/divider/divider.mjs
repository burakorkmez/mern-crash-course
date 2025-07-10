'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Divider = forwardRef(
  function Divider2(props, ref) {
    const {
      borderLeftWidth,
      borderBottomWidth,
      borderTopWidth,
      borderRightWidth,
      borderWidth,
      borderStyle,
      borderColor,
      ...styles
    } = useStyleConfig("Divider", props);
    const {
      className,
      orientation = "horizontal",
      __css,
      ...rest
    } = omitThemingProps(props);
    const dividerStyles = {
      vertical: {
        borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
        height: "100%"
      },
      horizontal: {
        borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
        width: "100%"
      }
    };
    return /* @__PURE__ */ jsx(
      chakra.hr,
      {
        ref,
        "aria-orientation": orientation,
        ...rest,
        __css: {
          ...styles,
          border: "0",
          borderColor,
          borderStyle,
          ...dividerStyles[orientation],
          ...__css
        },
        className: cx("chakra-divider", className)
      }
    );
  }
);
Divider.displayName = "Divider";

export { Divider };
