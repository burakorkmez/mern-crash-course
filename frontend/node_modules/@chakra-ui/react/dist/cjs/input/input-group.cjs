'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [InputGroupStylesProvider, useInputGroupStyles] = utils.createContext({
  name: `InputGroupStylesContext`,
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
});
const InputGroup = forwardRef.forwardRef(
  function InputGroup2(props, ref) {
    const styles = useStyleConfig.useMultiStyleConfig("Input", props);
    const { children, className, ...rest } = styledSystem.omitThemingProps(props);
    const _className = utils.cx("chakra-input__group", className);
    const groupStyles = {};
    const validChildren = utils.getValidChildren(children);
    const input = styles.field;
    validChildren.forEach((child) => {
      if (!styles)
        return;
      if (input && child.type.id === "InputLeftElement") {
        groupStyles.paddingStart = input.height ?? input.h;
      }
      if (input && child.type.id === "InputRightElement") {
        groupStyles.paddingEnd = input.height ?? input.h;
      }
      if (child.type.id === "InputRightAddon") {
        groupStyles.borderEndRadius = 0;
      }
      if (child.type.id === "InputLeftAddon") {
        groupStyles.borderStartRadius = 0;
      }
    });
    const clones = validChildren.map((child) => {
      const theming = utils.compact({
        size: child.props?.size || props.size,
        variant: child.props?.variant || props.variant
      });
      return child.type.id !== "Input" ? React.cloneElement(child, theming) : React.cloneElement(child, Object.assign(theming, groupStyles, child.props));
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        className: _className,
        ref,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          // Parts of inputs override z-index to ensure that they stack correctly on each other
          // Create a new stacking context so that these overrides don't leak out and conflict with other z-indexes
          isolation: "isolate",
          ...styles.group
        },
        "data-group": true,
        ...rest,
        children: /* @__PURE__ */ jsxRuntime.jsx(InputGroupStylesProvider, { value: styles, children: clones })
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

exports.InputGroup = InputGroup;
exports.useInputGroupStyles = useInputGroupStyles;
