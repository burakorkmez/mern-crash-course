'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { Fragment as Fragment$1 } from 'react';
import { Mark } from './mark.mjs';
import { useHighlight } from './use-highlight.mjs';

function Highlight(props) {
  const { children, query, styles } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight({ query, text: children });
  return /* @__PURE__ */ jsx(Fragment, { children: chunks.map((chunk, index) => {
    return chunk.match ? /* @__PURE__ */ jsx(Mark, { sx: styles, children: chunk.text }, index) : /* @__PURE__ */ jsx(Fragment$1, { children: chunk.text }, index);
  }) });
}

export { Highlight };
