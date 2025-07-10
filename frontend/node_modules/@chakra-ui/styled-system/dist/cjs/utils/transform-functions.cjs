'use strict';

var templates = require('./templates.cjs');
var parseGradient = require('./parse-gradient.cjs');

function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
const analyzeCSSValue = (value) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
};
const wrap = (str) => (value) => `${str}(${value})`;
const transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : templates.filterTemplate;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : templates.backdropFilterTemplate;
  },
  ring(value) {
    return templates.getRingTemplate(transformFunctions.px(value));
  },
  bgClip(value) {
    return value === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: value };
  },
  transform(value) {
    if (value === "auto")
      return templates.getTransformTemplate();
    if (value === "auto-gpu")
      return templates.getTransformGpuTemplate();
    return value;
  },
  vh(value) {
    return value === "$100vh" ? "var(--chakra-vh)" : value;
  },
  px(value) {
    if (value == null)
      return value;
    const { unitless } = analyzeCSSValue(value);
    return unitless || typeof value === "number" ? `${value}px` : value;
  },
  fraction(value) {
    return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
  },
  float(value, theme) {
    const map = { left: "right", right: "left" };
    return theme.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    const unitless = typeof value === "string" && !value.endsWith("deg");
    return typeof value === "number" || unitless ? `${value}deg` : value;
  },
  gradient: parseGradient.gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: (value) => wrap("hue-rotate")(transformFunctions.degree(value)),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage(value) {
    if (value == null)
      return value;
    const prevent = parseGradient.isCSSFunction(value) || parseGradient.globalSet.has(value);
    return !prevent ? `url(${value})` : value;
  },
  outline(value) {
    const isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: value };
  },
  flexDirection(value) {
    const { space, divide } = templates.flexDirectionTemplate[value] ?? {};
    const result = { flexDirection: value };
    if (space)
      result[space] = 1;
    if (divide)
      result[divide] = 1;
    return result;
  }
};

exports.transformFunctions = transformFunctions;
