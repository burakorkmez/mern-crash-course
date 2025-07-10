import borders from './borders.mjs';
import breakpoints from './breakpoints.mjs';
import colors from './colors.mjs';
import radii from './radius.mjs';
import shadows from './shadows.mjs';
import sizes from './sizes.mjs';
import { spacing } from './spacing.mjs';
import transition from './transition.mjs';
import typography from './typography.mjs';
import zIndices from './z-index.mjs';
import blur from './blur.mjs';

const foundations = {
  breakpoints,
  zIndices,
  radii,
  blur,
  colors,
  ...typography,
  sizes,
  shadows,
  space: spacing,
  borders,
  transition
};

export { foundations };
