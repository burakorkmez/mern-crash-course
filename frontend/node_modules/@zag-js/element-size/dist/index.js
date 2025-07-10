"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  trackElementSize: () => trackElementSize,
  trackElementsSize: () => trackElementsSize
});
module.exports = __toCommonJS(src_exports);

// src/track-size.ts
function trackElementSize(element, callback) {
  if (!element) {
    callback(void 0);
    return;
  }
  callback({ width: element.offsetWidth, height: element.offsetHeight });
  const win = element.ownerDocument.defaultView ?? window;
  const observer = new win.ResizeObserver((entries) => {
    if (!Array.isArray(entries) || !entries.length)
      return;
    const [entry] = entries;
    let width;
    let height;
    if ("borderBoxSize" in entry) {
      const borderSizeEntry = entry["borderBoxSize"];
      const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
      width = borderSize["inlineSize"];
      height = borderSize["blockSize"];
    } else {
      width = element.offsetWidth;
      height = element.offsetHeight;
    }
    callback({ width, height });
  });
  observer.observe(element, { box: "border-box" });
  return () => observer.unobserve(element);
}

// src/track-sizes.ts
function trackElementsSize(options) {
  const { getNodes, observeMutation = true, callback } = options;
  const cleanups = [];
  let firstNode = null;
  function trigger() {
    const elements = getNodes();
    firstNode = elements[0];
    const fns = elements.map(
      (element, index) => trackElementSize(element, (size) => {
        callback(size, index);
      })
    );
    cleanups.push(...fns);
  }
  trigger();
  if (observeMutation) {
    const fn = trackMutation(firstNode, trigger);
    cleanups.push(fn);
  }
  return () => {
    cleanups.forEach((cleanup) => {
      cleanup?.();
    });
  };
}
function trackMutation(el, cb) {
  if (!el || !el.parentElement)
    return;
  const win = el.ownerDocument?.defaultView ?? window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  trackElementSize,
  trackElementsSize
});
//# sourceMappingURL=index.js.map