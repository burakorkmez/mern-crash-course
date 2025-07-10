import { t } from '../utils/index.mjs';
import { transformFunctions } from '../utils/transform-functions.mjs';

const interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions.outline },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};

export { interactivity };
