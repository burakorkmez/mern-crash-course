function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix(value, prefix = "") {
  return [prefix, escape(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return `var(${escape(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix = "") {
  return `--${addPrefix(value, prefix)}`;
}
function cssVar(name, options) {
  const cssVariable = toVar(name, options?.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options?.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback?.reference;
}

export { addPrefix, cssVar, isDecimal, toVar, toVarRef };
