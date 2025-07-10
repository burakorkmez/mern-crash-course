import { createTransform } from './create-transform.mjs';

function toConfig(scale, transform) {
  return (property) => {
    const result = { property, scale };
    result.transform = createTransform({
      scale,
      transform
    });
    return result;
  };
}
const getRtl = ({ rtl, ltr }) => (theme) => theme.direction === "rtl" ? rtl : ltr;
function logical(options) {
  const { property, scale, transform } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform
    }) : transform
  };
}

export { logical, toConfig };
