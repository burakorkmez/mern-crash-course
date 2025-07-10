'use client';
import { jsx } from 'react/jsx-runtime';
import { NativeImage } from './native-image.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Img = forwardRef((props, ref) => /* @__PURE__ */ jsx(chakra.img, { ref, as: NativeImage, className: "chakra-image", ...props }));

export { Img };
