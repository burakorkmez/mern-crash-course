'use strict';

var index$1 = require('./components/index.cjs');
var index = require('./foundations/index.cjs');
var semanticTokens = require('./semantic-tokens.cjs');
var styles = require('./styles.cjs');
var isChakraTheme = require('./utils/is-chakra-theme.cjs');

const direction = "ltr";
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
const theme = {
  semanticTokens: semanticTokens.semanticTokens,
  direction,
  ...index.foundations,
  components: index$1.components,
  styles: styles.styles,
  config
};
const baseTheme = {
  semanticTokens: semanticTokens.semanticTokens,
  direction,
  components: {},
  ...index.foundations,
  styles: styles.styles,
  config
};

exports.isChakraTheme = isChakraTheme.isChakraTheme;
exports.requiredChakraThemeKeys = isChakraTheme.requiredChakraThemeKeys;
exports.baseTheme = baseTheme;
exports.theme = theme;
