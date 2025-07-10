'use client';
import { jsx } from 'react/jsx-runtime';
import { useQuery } from './media-query.mjs';
import { Visibility } from './visibility.mjs';

function Hide(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return /* @__PURE__ */ jsx(Visibility, { breakpoint: query, hide: true, ssr, children });
}
Hide.displayName = "Hide";

export { Hide };
