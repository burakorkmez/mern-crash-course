'use client';
import { isObject } from '@chakra-ui/utils';
import { mergeThemeOverride } from './extend-theme.mjs';

function withDefaultVariant({
  variant,
  components
}) {
  return (theme) => {
    let names = Object.keys(theme.components || {});
    if (Array.isArray(components)) {
      names = components;
    } else if (isObject(components)) {
      names = Object.keys(components);
    }
    return mergeThemeOverride(theme, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withVariant = {
            defaultProps: {
              variant
            }
          };
          return [componentName, withVariant];
        })
      )
    });
  };
}

export { withDefaultVariant };
