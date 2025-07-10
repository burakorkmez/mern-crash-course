'use client';
import { jsx } from 'react/jsx-runtime';
import { Stack } from './stack.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const VStack = forwardRef((props, ref) => /* @__PURE__ */ jsx(Stack, { align: "center", ...props, direction: "column", ref }));
VStack.displayName = "VStack";

export { VStack };
