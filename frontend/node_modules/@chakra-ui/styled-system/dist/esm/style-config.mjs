import { mergeWith, runIfFn, toMediaQueryString, isObject } from '@chakra-ui/utils';

function normalize(value, toArray) {
  if (Array.isArray(value))
    return value;
  if (isObject(value))
    return toArray(value);
  if (value != null)
    return [value];
}
function getNextIndex(values, i) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[j] != null)
      return j;
  }
  return -1;
}
function createResolver(theme) {
  const breakpointUtil = theme.__breakpoints;
  return function resolver(config, prop, value, props) {
    if (!breakpointUtil)
      return;
    const result = {};
    const normalized = normalize(value, breakpointUtil.toArrayValue);
    if (!normalized)
      return result;
    const len = normalized.length;
    const isSingle = len === 1;
    const isMultipart = !!config.parts;
    for (let i = 0; i < len; i++) {
      const key = breakpointUtil.details[i];
      const nextKey = breakpointUtil.details[getNextIndex(normalized, i)];
      const query = toMediaQueryString(key.minW, nextKey?._minW);
      const styles = runIfFn(config[prop]?.[normalized[i]], props);
      if (!styles)
        continue;
      if (isMultipart) {
        config.parts?.forEach((part) => {
          mergeWith(result, {
            [part]: isSingle ? styles[part] : { [query]: styles[part] }
          });
        });
        continue;
      }
      if (!isMultipart) {
        if (isSingle)
          mergeWith(result, styles);
        else
          result[query] = styles;
        continue;
      }
      result[query] = styles;
    }
    return result;
  };
}
function resolveStyleConfig(config) {
  return (props) => {
    const { variant, size, theme } = props;
    const recipe = createResolver(theme);
    return mergeWith(
      {},
      runIfFn(config.baseStyle ?? {}, props),
      recipe(config, "sizes", size, props),
      recipe(config, "variants", variant, props)
    );
  };
}

export { resolveStyleConfig };
