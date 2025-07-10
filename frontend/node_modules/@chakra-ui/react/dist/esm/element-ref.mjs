'use client';
import * as React from 'react';

function getElementRef(el) {
  const version = React.version;
  if (typeof version !== "string")
    return el?.ref;
  if (version.startsWith("18."))
    return el?.ref;
  return el?.props?.ref;
}

export { getElementRef };
