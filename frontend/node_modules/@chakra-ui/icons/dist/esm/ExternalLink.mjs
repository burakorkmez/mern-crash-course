import { jsxs, jsx } from 'react/jsx-runtime';
import { createIcon } from '@chakra-ui/react';

const ExternalLinkIcon = createIcon({
  displayName: "ExternalLinkIcon",
  path: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", children: [
    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ jsx("path", { d: "M15 3h6v6" }),
    /* @__PURE__ */ jsx("path", { d: "M10 14L21 3" })
  ] })
});

export { ExternalLinkIcon };
