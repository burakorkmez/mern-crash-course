import { createTransform } from './create-transform.mjs';
import { pipe } from './pipe.mjs';
import { toConfig, logical } from './prop-config.mjs';
import { transformFunctions } from './transform-functions.mjs';

const t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  gradients: toConfig("gradients", transformFunctions.gradient),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  spaceT: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  degreeT(property) {
    return { property, transform: transformFunctions.degree };
  },
  prop(property, scale, transform) {
    return {
      property,
      scale,
      ...scale && {
        transform: createTransform({ scale, transform })
      }
    };
  },
  propT(property, transform) {
    return { property, transform };
  },
  sizes: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.px)),
  sizesT: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.fraction)),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};

export { t, transformFunctions as transforms };
