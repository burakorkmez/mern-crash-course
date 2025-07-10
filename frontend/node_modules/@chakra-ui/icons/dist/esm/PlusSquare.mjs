import { jsxs, jsx } from 'react/jsx-runtime';
import { createIcon } from '@chakra-ui/react';

const PlusSquareIcon = createIcon({
  displayName: "PlusSquareIcon",
  path: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", children: [
    /* @__PURE__ */ jsx("rect", { height: "18", width: "18", rx: "2", ry: "2", x: "3", y: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M12 8v8" }),
    /* @__PURE__ */ jsx("path", { d: "M8 12h8" })
  ] })
});

export { PlusSquareIcon };
