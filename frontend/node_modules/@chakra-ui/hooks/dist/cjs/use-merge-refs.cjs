'use client';
'use strict';

var react = require('react');

function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}
function useMergeRefs(...refs) {
  return react.useMemo(() => mergeRefs(...refs), refs);
}

exports.assignRef = assignRef;
exports.mergeRefs = mergeRefs;
exports.useMergeRefs = useMergeRefs;
