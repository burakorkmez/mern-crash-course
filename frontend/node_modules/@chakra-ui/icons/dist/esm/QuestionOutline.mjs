import { jsxs, jsx } from 'react/jsx-runtime';
import { createIcon } from '@chakra-ui/react';

const QuestionOutlineIcon = createIcon({
  displayName: "QuestionOutlineIcon",
  path: /* @__PURE__ */ jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        fill: "none",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] })
});

export { QuestionOutlineIcon };
