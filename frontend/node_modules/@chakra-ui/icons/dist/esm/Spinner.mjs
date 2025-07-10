import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, Icon } from '@chakra-ui/react';
import { useId } from 'react';

const SpinnerIcon = forwardRef((props, ref) => {
  const id = useId();
  return /* @__PURE__ */ jsxs(Icon, { ref, viewBox: "0 0 24 24", ...props, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
      "linearGradient",
      {
        x1: "28.154%",
        y1: "63.74%",
        x2: "74.629%",
        y2: "17.783%",
        id,
        children: [
          /* @__PURE__ */ jsx("stop", { stopColor: "currentColor", offset: "0%" }),
          /* @__PURE__ */ jsx("stop", { stopColor: "#fff", stopOpacity: "0", offset: "100%" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("g", { transform: "translate(2)", fill: "none", children: [
      /* @__PURE__ */ jsx("circle", { stroke: `url(#${id})`, strokeWidth: "4", cx: "10", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10 2C4.477 2 0 6.477 0 12",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ jsx("rect", { fill: "currentColor", x: "8", width: "4", height: "4", rx: "8" })
    ] })
  ] });
});

export { SpinnerIcon };
