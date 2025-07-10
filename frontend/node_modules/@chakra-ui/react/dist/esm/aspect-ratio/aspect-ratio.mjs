'use client';
import { jsx } from 'react/jsx-runtime';
import { cx, mapResponsive } from '@chakra-ui/utils';
import { Children } from 'react';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const AspectRatio = forwardRef(
  function(props, ref) {
    const { ratio = 4 / 3, children, className, ...rest } = props;
    const child = Children.only(children);
    const _className = cx("chakra-aspect-ratio", className);
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        position: "relative",
        className: _className,
        _before: {
          height: 0,
          content: `""`,
          display: "block",
          paddingBottom: mapResponsive(ratio, (r) => `${1 / r * 100}%`)
        },
        __css: {
          "& > *:not(style)": {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          "& > img, & > video": {
            objectFit: "cover"
          }
        },
        ...rest,
        children: child
      }
    );
  }
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
