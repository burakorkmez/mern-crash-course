'use client';
'use strict';

var extendTheme = require('./extend-theme.cjs');
var withDefaultColorScheme = require('./with-default-color-scheme.cjs');
var withDefaultSize = require('./with-default-size.cjs');
var withDefaultVariant = require('./with-default-variant.cjs');

function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function withDefaultProps({
  defaultProps: { colorScheme, variant, size },
  components
}) {
  const identity = (t) => t;
  const fns = [
    colorScheme ? withDefaultColorScheme.withDefaultColorScheme({ colorScheme, components }) : identity,
    size ? withDefaultSize.withDefaultSize({ size, components }) : identity,
    variant ? withDefaultVariant.withDefaultVariant({ variant, components }) : identity
  ];
  return (theme) => extendTheme.mergeThemeOverride(pipe(...fns)(theme));
}

exports.withDefaultProps = withDefaultProps;
