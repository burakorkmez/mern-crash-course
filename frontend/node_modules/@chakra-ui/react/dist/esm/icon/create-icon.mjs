'use client';
import { jsx } from 'react/jsx-runtime';
import { Children } from 'react';
import { Icon } from './icon.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps = {}
  } = options;
  const path = Children.toArray(options.path);
  const Comp = forwardRef((props, ref) => /* @__PURE__ */ jsx(Icon, { ref, viewBox, ...defaultProps, ...props, children: path.length ? path : /* @__PURE__ */ jsx("path", { fill: "currentColor", d: pathDefinition }) }));
  Comp.displayName = displayName;
  return Comp;
}

export { createIcon };
