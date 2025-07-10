import { isObject } from '@chakra-ui/utils';

const isImportant = (value) => /!(important)?$/.test(value);
const withoutImportant = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
const tokenToCSSVar = (scale, value) => (theme) => {
  const valueStr = String(value);
  const important = isImportant(valueStr);
  const valueWithoutImportant = withoutImportant(valueStr);
  const key = scale ? `${scale}.${valueWithoutImportant}` : valueWithoutImportant;
  let transformed = isObject(theme.__cssMap) && key in theme.__cssMap ? theme.__cssMap[key].varRef : value;
  transformed = withoutImportant(transformed);
  return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
  const { scale, transform, compose } = options;
  const fn = (value, theme) => {
    const _value = tokenToCSSVar(scale, value)(theme);
    let result = transform?.(_value, theme) ?? _value;
    if (compose) {
      result = compose(result, theme);
    }
    return result;
  };
  return fn;
}

export { createTransform, tokenToCSSVar };
