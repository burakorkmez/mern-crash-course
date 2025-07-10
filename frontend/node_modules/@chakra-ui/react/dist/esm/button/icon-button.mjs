'use client';
import { jsx } from 'react/jsx-runtime';
import { isValidElement, cloneElement } from 'react';
import { Button } from './button.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const IconButton = forwardRef(
  (props, ref) => {
    const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
    const element = icon || children;
    const _children = isValidElement(element) ? cloneElement(element, {
      "aria-hidden": true,
      focusable: false
    }) : null;
    return /* @__PURE__ */ jsx(
      Button,
      {
        px: "0",
        py: "0",
        borderRadius: isRound ? "full" : void 0,
        ref,
        "aria-label": ariaLabel,
        ...rest,
        children: _children
      }
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton };
