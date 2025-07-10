'use client';
'use strict';

var system = require('./system.cjs');

function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(system.styled, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(target, thisArg, argArray) {
      return system.styled(...argArray);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, system.styled(element));
      }
      return cache.get(element);
    }
  });
}
const chakra = factory();

exports.chakra = chakra;
