'use client';
'use strict';

var utils = require('./utils.cjs');

const matchWidth = {
  name: "matchWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => () => {
    const reference = state.elements.reference;
    state.elements.popper.style.width = `${reference.offsetWidth}px`;
  }
};
const transformOrigin = {
  name: "transformOrigin",
  enabled: true,
  phase: "write",
  fn: ({ state }) => {
    setTransformOrigin(state);
  },
  effect: ({ state }) => () => {
    setTransformOrigin(state);
  }
};
const setTransformOrigin = (state) => {
  state.elements.popper.style.setProperty(
    utils.cssVars.transformOrigin.var,
    utils.toTransformOrigin(state.placement)
  );
};
const positionArrow = {
  name: "positionArrow",
  enabled: true,
  phase: "afterWrite",
  fn: ({ state }) => {
    setArrowStyles(state);
  }
};
const setArrowStyles = (state) => {
  if (!state.placement)
    return;
  const overrides = getArrowStyle(state.placement);
  if (state.elements?.arrow && overrides) {
    Object.assign(state.elements.arrow.style, {
      [overrides.property]: overrides.value,
      width: utils.cssVars.arrowSize.varRef,
      height: utils.cssVars.arrowSize.varRef,
      zIndex: -1
    });
    const vars = {
      [utils.cssVars.arrowSizeHalf.var]: `calc(${utils.cssVars.arrowSize.varRef} / 2 - 1px)`,
      [utils.cssVars.arrowOffset.var]: `calc(${utils.cssVars.arrowSizeHalf.varRef} * -1)`
    };
    for (const property in vars) {
      state.elements.arrow.style.setProperty(property, vars[property]);
    }
  }
};
const getArrowStyle = (placement) => {
  if (placement.startsWith("top")) {
    return { property: "bottom", value: utils.cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("bottom")) {
    return { property: "top", value: utils.cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("left")) {
    return { property: "right", value: utils.cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("right")) {
    return { property: "left", value: utils.cssVars.arrowOffset.varRef };
  }
};
const innerArrow = {
  name: "innerArrow",
  enabled: true,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state }) => {
    setInnerArrowStyles(state);
  },
  effect: ({ state }) => () => {
    setInnerArrowStyles(state);
  }
};
const setInnerArrowStyles = (state) => {
  if (!state.elements.arrow)
    return;
  const inner = state.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!inner)
    return;
  const boxShadow = utils.getBoxShadow(state.placement);
  if (boxShadow) {
    inner.style.setProperty("--popper-arrow-default-shadow", boxShadow);
  }
  Object.assign(inner.style, {
    transform: "rotate(45deg)",
    background: utils.cssVars.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: `var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))`
  });
};

exports.innerArrow = innerArrow;
exports.matchWidth = matchWidth;
exports.positionArrow = positionArrow;
exports.transformOrigin = transformOrigin;
