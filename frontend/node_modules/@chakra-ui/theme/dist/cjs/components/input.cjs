'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.inputAnatomy.keys);
const $height = styledSystem.cssVar("input-height");
const $fontSize = styledSystem.cssVar("input-font-size");
const $padding = styledSystem.cssVar("input-padding");
const $borderRadius = styledSystem.cssVar("input-border-radius");
const baseStyle = definePartsStyle({
  addon: {
    height: $height.reference,
    fontSize: $fontSize.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference
  },
  field: {
    width: "100%",
    height: $height.reference,
    fontSize: $fontSize.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
const size = {
  lg: styledSystem.defineStyle({
    [$fontSize.variable]: "fontSizes.lg",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height.variable]: "sizes.12"
  }),
  md: styledSystem.defineStyle({
    [$fontSize.variable]: "fontSizes.md",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height.variable]: "sizes.10"
  }),
  sm: styledSystem.defineStyle({
    [$fontSize.variable]: "fontSizes.sm",
    [$padding.variable]: "space.3",
    [$borderRadius.variable]: "radii.sm",
    [$height.variable]: "sizes.8"
  }),
  xs: styledSystem.defineStyle({
    [$fontSize.variable]: "fontSizes.xs",
    [$padding.variable]: "space.2",
    [$borderRadius.variable]: "radii.sm",
    [$height.variable]: "sizes.6"
  })
};
const sizes = {
  lg: definePartsStyle({
    field: size.lg,
    group: size.lg
  }),
  md: definePartsStyle({
    field: size.md,
    group: size.md
  }),
  sm: definePartsStyle({
    field: size.sm,
    group: size.sm
  }),
  xs: definePartsStyle({
    field: size.xs,
    group: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || themeTools.mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || themeTools.mode("red.500", "red.300")(props)
  };
}
const variantOutline = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: themeTools.mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: themeTools.getColor(theme, ec),
        boxShadow: `0 0 0 1px ${themeTools.getColor(theme, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: themeTools.getColor(theme, fc),
        boxShadow: `0 0 0 1px ${themeTools.getColor(theme, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: themeTools.mode("inherit", "whiteAlpha.50")(props),
      bg: themeTools.mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
const variantFilled = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: themeTools.mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: themeTools.mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: themeTools.getColor(theme, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: themeTools.getColor(theme, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: themeTools.mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
const variantFlushed = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: themeTools.getColor(theme, ec),
        boxShadow: `0px 1px 0px 0px ${themeTools.getColor(theme, ec)}`
      },
      _focusVisible: {
        borderColor: themeTools.getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${themeTools.getColor(theme, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
const variantUnstyled = definePartsStyle({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled
};
const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

exports.inputTheme = inputTheme;
