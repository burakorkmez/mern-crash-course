import { jsxs, jsx } from 'react/jsx-runtime';
import { createIcon } from '@chakra-ui/react';

const InfoOutlineIcon = createIcon({
  displayName: "InfoOutlineIcon",
  path: /* @__PURE__ */ jsxs(
    "g",
    {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "square",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", fill: "none", r: "11", stroke: "currentColor" }),
        /* @__PURE__ */ jsx("line", { fill: "none", x1: "11.959", x2: "11.959", y1: "11", y2: "17" }),
        /* @__PURE__ */ jsx("circle", { cx: "11.959", cy: "7", r: "1", stroke: "none" })
      ]
    }
  )
});

export { InfoOutlineIcon };
