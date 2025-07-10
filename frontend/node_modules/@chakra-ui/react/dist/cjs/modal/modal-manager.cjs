'use client';
'use strict';

var React = require('react');

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class ModalManager {
  constructor() {
    __publicField(this, "modals");
    this.modals = /* @__PURE__ */ new Set();
  }
  add(modal) {
    this.modals.add(modal);
    return this.modals.size;
  }
  remove(modal) {
    this.modals.delete(modal);
  }
  isTopModal(modal) {
    if (!modal)
      return false;
    const topModal = Array.from(this.modals)[this.modals.size - 1];
    return modal === topModal;
  }
}
const modalManager = new ModalManager();
function useModalManager(ref, isOpen) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const node = ref.current;
    if (!node)
      return;
    if (isOpen) {
      const index2 = modalManager.add(node);
      setIndex(index2);
    }
    return () => {
      modalManager.remove(node);
      setIndex(0);
    };
  }, [isOpen, ref]);
  return index;
}

exports.modalManager = modalManager;
exports.useModalManager = useModalManager;
