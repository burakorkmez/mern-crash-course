import { walkObject } from '@chakra-ui/utils';
import { pseudoPropNames } from '../pseudos.mjs';
import { extractTokens, extractSemanticTokens } from './theme-tokens.mjs';

function flattenTokens(theme) {
  const tokens = extractTokens(theme);
  const semanticTokens = extractSemanticTokens(theme);
  const isSemanticCondition = (key) => (
    // @ts-ignore
    pseudoPropNames.includes(key) || "default" === key
  );
  const result = {};
  walkObject(tokens, (value, path) => {
    if (value == null)
      return;
    result[path.join(".")] = { isSemantic: false, value };
  });
  walkObject(
    semanticTokens,
    (value, path) => {
      if (value == null)
        return;
      result[path.join(".")] = { isSemantic: true, value };
    },
    {
      stop: (value) => Object.keys(value).every(isSemanticCondition)
    }
  );
  return result;
}

export { flattenTokens };
