// src/attrs.ts
var dataAttr = (guard) => {
  return guard ? "" : void 0;
};
var ariaAttr = (guard) => {
  return guard ? "true" : void 0;
};

// src/is-html-element.ts
var isHTMLElement = (v) => typeof v === "object" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === "string";

// src/contains.ts
function contains(parent, child) {
  if (!parent || !child)
    return false;
  if (!isHTMLElement(parent) || !isHTMLElement(child))
    return false;
  return parent === child || parent.contains(child);
}
var isSelfEvent = (event) => contains(event.currentTarget, event.target);

// src/create-scope.ts
var getDocument = (node) => {
  if (node.nodeType === Node.DOCUMENT_NODE)
    return node;
  return node.ownerDocument ?? document;
};
function createScope(methods) {
  const screen = {
    getRootNode: (ctx) => ctx.getRootNode?.() ?? document,
    getDoc: (ctx) => getDocument(screen.getRootNode(ctx)),
    getWin: (ctx) => screen.getDoc(ctx).defaultView ?? window,
    getActiveElement: (ctx) => screen.getDoc(ctx).activeElement,
    isActiveElement: (ctx, elem) => elem === screen.getActiveElement(ctx),
    focus(ctx, elem) {
      if (elem == null)
        return;
      if (!screen.isActiveElement(ctx, elem))
        elem.focus({ preventScroll: true });
    },
    getById: (ctx, id) => screen.getRootNode(ctx).getElementById(id),
    setValue: (elem, value) => {
      if (elem == null || value == null)
        return;
      const valueAsString = value.toString();
      if (elem.value === valueAsString)
        return;
      elem.value = value.toString();
    }
  };
  return { ...screen, ...methods };
}

// src/is-document.ts
var isDocument = (el) => el.nodeType === Node.DOCUMENT_NODE;

// src/is-shadow-root.ts
var isNode = (el) => el.nodeType !== void 0;
var isShadowRoot = (el) => el && isNode(el) && el.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in el;

// src/env.ts
function getDocument2(el) {
  if (isDocument(el))
    return el;
  return el?.ownerDocument ?? document;
}
function getWindow(el) {
  if (isShadowRoot(el))
    return getWindow(el.host);
  if (isDocument(el))
    return el.defaultView ?? window;
  if (isHTMLElement(el))
    return el.ownerDocument?.defaultView ?? window;
  return window;
}

// src/get-active-element.ts
function getActiveElement(el) {
  let activeElement = el.ownerDocument.activeElement;
  while (activeElement?.shadowRoot) {
    const el2 = activeElement.shadowRoot.activeElement;
    if (el2 === activeElement)
      break;
    else
      activeElement = el2;
  }
  return activeElement;
}

// src/get-before-input-value.ts
function getBeforeInputValue(event) {
  const { selectionStart, selectionEnd, value } = event.currentTarget;
  return value.slice(0, selectionStart) + event.data + value.slice(selectionEnd);
}

// src/get-by-id.ts
function itemById(v, id) {
  return v.find((node) => node.id === id);
}
function indexOfId(v, id) {
  const item = itemById(v, id);
  return item ? v.indexOf(item) : -1;
}
function nextById(v, id, loop = true) {
  let idx = indexOfId(v, id);
  idx = loop ? (idx + 1) % v.length : Math.min(idx + 1, v.length - 1);
  return v[idx];
}
function prevById(v, id, loop = true) {
  let idx = indexOfId(v, id);
  if (idx === -1)
    return loop ? v[v.length - 1] : null;
  idx = loop ? (idx - 1 + v.length) % v.length : Math.max(0, idx - 1);
  return v[idx];
}

// src/get-by-text.ts
var getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? "";
var match = (valueText, query2) => valueText.trim().toLowerCase().startsWith(query2.toLowerCase());
var wrap = (v, idx) => {
  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);
};
function getByText(v, text, currentId) {
  const index = currentId ? indexOfId(v, currentId) : -1;
  let items = currentId ? wrap(v, index) : v;
  const isSingleKey = text.length === 1;
  if (isSingleKey) {
    items = items.filter((item) => item.id !== currentId);
  }
  return items.find((item) => match(getValueText(item), text));
}

// src/get-by-typeahead.ts
function getByTypeaheadImpl(_items, options) {
  const { state, activeId, key, timeout = 350 } = options;
  const search = state.keysSoFar + key;
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const query2 = isRepeated ? search[0] : search;
  let items = _items.slice();
  const next = getByText(items, query2, activeId);
  function cleanup() {
    clearTimeout(state.timer);
    state.timer = -1;
  }
  function update(value) {
    state.keysSoFar = value;
    cleanup();
    if (value !== "") {
      state.timer = +setTimeout(() => {
        update("");
        cleanup();
      }, timeout);
    }
  }
  update(search);
  return next;
}
var getByTypeahead = /* @__PURE__ */ Object.assign(getByTypeaheadImpl, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}

// src/get-computed-style.ts
var styleCache = /* @__PURE__ */ new WeakMap();
function getComputedStyle(el) {
  if (!styleCache.has(el)) {
    const win = el.ownerDocument.defaultView || window;
    styleCache.set(el, win.getComputedStyle(el));
  }
  return styleCache.get(el);
}

// src/get-event-target.ts
function getEventTarget(event) {
  return event.composedPath?.()[0] ?? event.target;
}

// src/get-scroll-parent.ts
function isScrollParent(el) {
  const win = el.ownerDocument.defaultView || window;
  const { overflow, overflowX, overflowY } = win.getComputedStyle(el);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getParent(el) {
  if (el.localName === "html")
    return el;
  return el.assignedSlot || el.parentElement || el.ownerDocument.documentElement;
}
function getScrollParent(el) {
  if (["html", "body", "#document"].includes(el.localName)) {
    return el.ownerDocument.body;
  }
  if (isHTMLElement(el) && isScrollParent(el)) {
    return el;
  }
  return getScrollParent(getParent(el));
}
function getScrollParents(el, list = []) {
  const parent = getScrollParent(el);
  const isBody = parent === el.ownerDocument.body;
  const win = parent.ownerDocument.defaultView || window;
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(parent) ? parent : []) : parent;
  const parents = list.concat(target);
  return isBody ? parents : parents.concat(getScrollParents(getParent(target)));
}

// src/is-editable-element.ts
function isEditableElement(el) {
  if (el == null || !isHTMLElement(el)) {
    return false;
  }
  try {
    const win = el.ownerDocument.defaultView || window;
    return el instanceof win.HTMLInputElement && el.selectionStart != null || /(textarea|select)/.test(el.localName) || el.isContentEditable;
  } catch {
    return false;
  }
}

// src/platform.ts
var isDom = () => typeof document !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
var pt = (v) => isDom() && v.test(getPlatform());
var ua = (v) => isDom() && v.test(navigator.userAgent);
var vn = (v) => isDom() && v.test(navigator.vendor);
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isMac = () => pt(/^Mac/) && !isTouchDevice();
var isIPhone = () => pt(/^iPhone/);
var isSafari = () => isApple() && vn(/apple/i);
var isFirefox = () => ua(/firefox\//i);
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isIos = () => isApple() && !isMac();

// src/query.ts
function queryAll(root, selector) {
  return Array.from(root?.querySelectorAll(selector) ?? []);
}
function query(root, selector) {
  return root?.querySelector(selector);
}

// src/raf.ts
function nextTick(fn) {
  const set = /* @__PURE__ */ new Set();
  function raf2(fn2) {
    const id = globalThis.requestAnimationFrame(fn2);
    set.add(() => globalThis.cancelAnimationFrame(id));
  }
  raf2(() => raf2(fn));
  return function cleanup() {
    set.forEach((fn2) => fn2());
  };
}
function raf(fn) {
  const id = globalThis.requestAnimationFrame(fn);
  return () => {
    globalThis.cancelAnimationFrame(id);
  };
}

// src/index.ts
var MAX_Z_INDEX = 2147483647;
export {
  MAX_Z_INDEX,
  ariaAttr,
  contains,
  createScope,
  dataAttr,
  getActiveElement,
  getBeforeInputValue,
  getByText,
  getByTypeahead,
  getComputedStyle,
  getDocument2 as getDocument,
  getEventTarget,
  getParent,
  getPlatform,
  getScrollParent,
  getScrollParents,
  getWindow,
  indexOfId,
  isApple,
  isDom,
  isEditableElement,
  isFirefox,
  isHTMLElement,
  isIPhone,
  isIos,
  isMac,
  isSafari,
  isSelfEvent,
  isTouchDevice,
  itemById,
  nextById,
  nextTick,
  prevById,
  query,
  queryAll,
  raf
};
//# sourceMappingURL=index.mjs.map