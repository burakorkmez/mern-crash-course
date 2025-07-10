import { isObject } from './is.mjs';

const breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => item === null ? null : mapper(item));
  }
  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function objectToArrayNotation(obj, bps = breakpoints) {
  const result = bps.map((br) => obj[br] ?? null);
  const lastItem = result[result.length - 1];
  while (lastItem === null)
    result.pop();
  return result;
}
function arrayToObjectNotation(values, bps = breakpoints) {
  const result = {};
  values.forEach((value, index) => {
    const key = bps[index];
    if (value == null)
      return;
    result[key] = value;
  });
  return result;
}
function isResponsiveObjectLike(obj, bps = breakpoints) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every((key) => bps.includes(key));
}
const isCustomBreakpoint = (v) => Number.isNaN(Number(v));

export { arrayToObjectNotation, breakpoints, isCustomBreakpoint, isResponsiveObjectLike, mapResponsive, objectToArrayNotation };
