'use client';
import { callAll } from '@chakra-ui/utils';

const clsx = (...args) => args.map((str) => str?.trim?.()).filter(Boolean).join(" ");
const eventRegex = /^on[A-Z]/;
function mergeProps(...args) {
  let result = {};
  for (let props of args) {
    for (let key in result) {
      if (eventRegex.test(key) && typeof result[key] === "function" && typeof props[key] === "function") {
        result[key] = callAll(result[key], props[key]);
        continue;
      }
      if (key === "className" || key === "class") {
        result[key] = clsx(result[key], props[key]);
        continue;
      }
      if (key === "style") {
        result[key] = Object.assign({}, result[key] ?? {}, props[key] ?? {});
        continue;
      }
      result[key] = props[key] !== void 0 ? props[key] : result[key];
    }
    for (let key in props) {
      if (result[key] === void 0) {
        result[key] = props[key];
      }
    }
  }
  return result;
}

export { mergeProps };
