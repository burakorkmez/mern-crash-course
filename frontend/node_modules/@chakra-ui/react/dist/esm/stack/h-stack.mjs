'use client';
import { jsx } from 'react/jsx-runtime';
import { Stack } from './stack.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const HStack = forwardRef((props, ref) => /* @__PURE__ */ jsx(Stack, { align: "center", ...props, direction: "row", ref }));
HStack.displayName = "HStack";

export { HStack };
