'use client';
'use strict';

var React = require('react');

function useAttributeObserver(ref, attributes, fn, enabled) {
  React.useEffect(() => {
    if (!ref.current || !enabled)
      return;
    const win = ref.current.ownerDocument.defaultView ?? window;
    const attrs = Array.isArray(attributes) ? attributes : [attributes];
    const obs = new win.MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName && attrs.includes(change.attributeName)) {
          fn(change);
        }
      }
    });
    obs.observe(ref.current, { attributes: true, attributeFilter: attrs });
    return () => obs.disconnect();
  });
}

exports.useAttributeObserver = useAttributeObserver;
