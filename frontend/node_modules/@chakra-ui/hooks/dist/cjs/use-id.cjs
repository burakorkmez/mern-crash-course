'use client';
'use strict';

var react = require('react');

function useId(idProp, prefix) {
  const id = react.useId();
  return react.useMemo(
    () => idProp || [prefix, id].filter(Boolean).join("-"),
    [idProp, prefix, id]
  );
}
function useIds(idProp, ...prefixes) {
  const id = useId(idProp);
  return react.useMemo(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}
function useOptionalPart(partId) {
  const [id, setId] = react.useState(null);
  const ref = react.useCallback(
    (node) => {
      setId(node ? partId : null);
    },
    [partId]
  );
  return { ref, id, isRendered: Boolean(id) };
}

exports.useId = useId;
exports.useIds = useIds;
exports.useOptionalPart = useOptionalPart;
