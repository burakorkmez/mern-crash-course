'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from '../system/forward-ref.mjs';

const NativeImage = forwardRef(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return /* @__PURE__ */ jsx("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";

export { NativeImage };
