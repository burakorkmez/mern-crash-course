'use client';
function getToastPlacement(position, dir) {
  const computedPosition = position ?? "bottom";
  const logicals = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  };
  const logical = logicals[computedPosition];
  return logical?.[dir] ?? computedPosition;
}

export { getToastPlacement };
