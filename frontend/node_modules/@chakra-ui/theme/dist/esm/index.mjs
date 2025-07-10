import { components } from './components/index.mjs';
import { foundations } from './foundations/index.mjs';
import { semanticTokens } from './semantic-tokens.mjs';
import { styles } from './styles.mjs';
export { isChakraTheme, requiredChakraThemeKeys } from './utils/is-chakra-theme.mjs';

const direction = "ltr";
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
const theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
const baseTheme = {
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config
};

export { baseTheme, theme };
