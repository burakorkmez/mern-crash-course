'use client';
import { mergeThemeOverride } from './extend-theme.mjs';
import { withDefaultColorScheme } from './with-default-color-scheme.mjs';
import { withDefaultSize } from './with-default-size.mjs';
import { withDefaultVariant } from './with-default-variant.mjs';

function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function withDefaultProps({
  defaultProps: { colorScheme, variant, size },
  components
}) {
  const identity = (t) => t;
  const fns = [
    colorScheme ? withDefaultColorScheme({ colorScheme, components }) : identity,
    size ? withDefaultSize({ size, components }) : identity,
    variant ? withDefaultVariant({ variant, components }) : identity
  ];
  return (theme) => mergeThemeOverride(pipe(...fns)(theme));
}

export { withDefaultProps };
