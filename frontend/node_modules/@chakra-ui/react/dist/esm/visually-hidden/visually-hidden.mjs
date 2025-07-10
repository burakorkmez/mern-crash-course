'use client';
import { visuallyHiddenStyle } from './visually-hidden.style.mjs';
import { chakra } from '../system/factory.mjs';

const VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
const VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHiddenInput.displayName = "VisuallyHiddenInput";

export { VisuallyHidden, VisuallyHiddenInput };
