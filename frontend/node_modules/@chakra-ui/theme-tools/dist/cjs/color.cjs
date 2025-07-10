'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var color2k = require('color2k');

const isEmptyObject = (obj) => Object.keys(obj).length === 0;
function get(obj, key, def, p, undef) {
  key = key.split ? key.split(".") : key;
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
}
const getColor = (theme, color, fallback) => {
  const hex = get(theme, `colors.${color}`, color);
  try {
    color2k.toHex(hex);
    return hex;
  } catch {
    return fallback ?? "#000000";
  }
};
const getColorVar = (theme, color, fallback) => {
  return styledSystem.getCSSVar(theme, "colors", color) ?? fallback;
};
const getBrightness = (color) => {
  const [r, g, b] = color2k.parseToRgba(color);
  return (r * 299 + g * 587 + b * 114) / 1e3;
};
const tone = (color) => (theme) => {
  const hex = getColor(theme, color);
  const brightness = getBrightness(hex);
  const isDark2 = brightness < 128;
  return isDark2 ? "dark" : "light";
};
const isDark = (color) => (theme) => tone(color)(theme) === "dark";
const isLight = (color) => (theme) => tone(color)(theme) === "light";
const transparentize = (color, opacity) => (theme) => {
  const raw = getColor(theme, color);
  return color2k.transparentize(raw, 1 - opacity);
};
const whiten = (color, amount) => (theme) => {
  const raw = getColor(theme, color);
  return color2k.toHex(color2k.mix(raw, "#fff", amount));
};
const blacken = (color, amount) => (theme) => {
  const raw = getColor(theme, color);
  return color2k.toHex(color2k.mix(raw, "#000", amount / 100));
};
const darken = (color, amount) => (theme) => {
  const raw = getColor(theme, color);
  return color2k.toHex(color2k.darken(raw, amount / 100));
};
const lighten = (color, amount) => (theme) => {
  const raw = getColor(theme, color);
  color2k.toHex(color2k.lighten(raw, amount / 100));
};
const contrast = (fg, bg) => (theme) => color2k.getContrast(getColor(theme, bg), getColor(theme, fg));
const isAccessible = (textColor, bgColor, options) => (theme) => isReadable(getColor(theme, bgColor), getColor(theme, textColor), options);
function isReadable(color1, color2, wcag2 = { level: "AA", size: "small" }) {
  const readabilityLevel = readability(color1, color2);
  switch ((wcag2.level ?? "AA") + (wcag2.size ?? "small")) {
    case "AAsmall":
    case "AAAlarge":
      return readabilityLevel >= 4.5;
    case "AAlarge":
      return readabilityLevel >= 3;
    case "AAAsmall":
      return readabilityLevel >= 7;
    default:
      return false;
  }
}
function readability(color1, color2) {
  return (Math.max(color2k.getLuminance(color1), color2k.getLuminance(color2)) + 0.05) / (Math.min(color2k.getLuminance(color1), color2k.getLuminance(color2)) + 0.05);
}
const complementary = (color) => (theme) => {
  const raw = getColor(theme, color);
  const hsl = color2k.parseToHsla(raw);
  const complementHsl = Object.assign(hsl, [
    (hsl[0] + 180) % 360
  ]);
  return color2k.toHex(color2k.hsla(...complementHsl));
};
function generateStripe(size = "1rem", color = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color} 25%,
    transparent 25%,
    transparent 50%,
    ${color} 50%,
    ${color} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size} ${size}`
  };
}
const randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function randomColor(opts) {
  const fallback = randomHex();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  let hash = 0;
  if (str.length === 0)
    return hash.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color = "#";
  for (let j = 0; j < 3; j += 1) {
    const value = hash >> j * 8 & 255;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}
function randomColorFromList(str, list) {
  let index = 0;
  if (str.length === 0)
    return list[0];
  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list.length + list.length) % list.length;
  return list[index];
}
function randomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}

exports.blacken = blacken;
exports.complementary = complementary;
exports.contrast = contrast;
exports.darken = darken;
exports.generateStripe = generateStripe;
exports.getColor = getColor;
exports.getColorVar = getColorVar;
exports.isAccessible = isAccessible;
exports.isDark = isDark;
exports.isLight = isLight;
exports.isReadable = isReadable;
exports.lighten = lighten;
exports.randomColor = randomColor;
exports.readability = readability;
exports.tone = tone;
exports.transparentize = transparentize;
exports.whiten = whiten;
