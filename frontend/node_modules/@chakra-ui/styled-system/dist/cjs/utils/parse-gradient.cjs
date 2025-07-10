'use strict';

const directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
const valueSet = new Set(Object.values(directionMap));
const globalSet = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]);
const trimSpace = (str) => str.trim();
function parseGradient(value, theme) {
  if (value == null || globalSet.has(value))
    return value;
  const prevent = isCSSFunction(value) || globalSet.has(value);
  if (!prevent)
    return `url('${value}')`;
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results?.[1];
  const values = results?.[2];
  if (!type || !values)
    return value;
  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if (stops?.length === 0)
    return value;
  const direction = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction);
  const _values = stops.map((stop) => {
    if (valueSet.has(stop))
      return stop;
    const firstStop = stop.indexOf(" ");
    const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
    const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    const key = `colors.${_color}`;
    const color = key in theme.__cssMap ? theme.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [
      color,
      ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]
    ].join(" ") : color;
  });
  return `${_type}(${_values.join(", ")})`;
}
const isCSSFunction = (value) => {
  return typeof value === "string" && value.includes("(") && value.includes(")");
};
const gradientTransform = (value, theme) => parseGradient(value, theme ?? {});

exports.globalSet = globalSet;
exports.gradientTransform = gradientTransform;
exports.isCSSFunction = isCSSFunction;
exports.parseGradient = parseGradient;
