'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var extendTheme = require('./extend-theme.cjs');

function withDefaultVariant({
  variant,
  components
}) {
  return (theme) => {
    let names = Object.keys(theme.components || {});
    if (Array.isArray(components)) {
      names = components;
    } else if (utils.isObject(components)) {
      names = Object.keys(components);
    }
    return extendTheme.mergeThemeOverride(theme, {
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

exports.withDefaultVariant = withDefaultVariant;
