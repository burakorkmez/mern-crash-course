import { jsxs, jsx } from 'react/jsx-runtime';
import { createIcon } from '@chakra-ui/react';

const SunIcon = createIcon({
  displayName: "SunIcon",
  path: /* @__PURE__ */ jsxs(
    "g",
    {
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2",
      fill: "none",
      stroke: "currentColor",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
        /* @__PURE__ */ jsx("path", { d: "M12 1v2" }),
        /* @__PURE__ */ jsx("path", { d: "M12 21v2" }),
        /* @__PURE__ */ jsx("path", { d: "M4.22 4.22l1.42 1.42" }),
        /* @__PURE__ */ jsx("path", { d: "M18.36 18.36l1.42 1.42" }),
        /* @__PURE__ */ jsx("path", { d: "M1 12h2" }),
        /* @__PURE__ */ jsx("path", { d: "M21 12h2" }),
        /* @__PURE__ */ jsx("path", { d: "M4.22 19.78l1.42-1.42" }),
        /* @__PURE__ */ jsx("path", { d: "M18.36 5.64l1.42-1.42" })
      ]
    }
  )
});

export { SunIcon };
