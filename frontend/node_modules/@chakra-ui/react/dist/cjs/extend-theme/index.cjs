'use strict';

var extendTheme = require('./extend-theme.cjs');
var withDefaultColorScheme = require('./with-default-color-scheme.cjs');
var withDefaultProps = require('./with-default-props.cjs');
var withDefaultSize = require('./with-default-size.cjs');
var withDefaultVariant = require('./with-default-variant.cjs');



exports.createExtendTheme = extendTheme.createExtendTheme;
exports.extendBaseTheme = extendTheme.extendBaseTheme;
exports.extendTheme = extendTheme.extendTheme;
exports.mergeThemeOverride = extendTheme.mergeThemeOverride;
exports.withDefaultColorScheme = withDefaultColorScheme.withDefaultColorScheme;
exports.withDefaultProps = withDefaultProps.withDefaultProps;
exports.withDefaultSize = withDefaultSize.withDefaultSize;
exports.withDefaultVariant = withDefaultVariant.withDefaultVariant;
