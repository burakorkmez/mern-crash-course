'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, cx, getValidChildren, compact } from '@chakra-ui/utils';
import { cloneElement } from 'react';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const [InputGroupStylesProvider, useInputGroupStyles] = createContext({
  name: `InputGroupStylesContext`,
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
});
const InputGroup = forwardRef(
  function InputGroup2(props, ref) {
    const styles = useMultiStyleConfig("Input", props);
    const { children, className, ...rest } = omitThemingProps(props);
    const _className = cx("chakra-input__group", className);
    const groupStyles = {};
    const validChildren = getValidChildren(children);
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
      const theming = compact({
        size: child.props?.size || props.size,
        variant: child.props?.variant || props.variant
      });
      return child.type.id !== "Input" ? cloneElement(child, theming) : cloneElement(child, Object.assign(theming, groupStyles, child.props));
    });
    return /* @__PURE__ */ jsx(
      chakra.div,
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
        children: /* @__PURE__ */ jsx(InputGroupStylesProvider, { value: styles, children: clones })
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

export { InputGroup, useInputGroupStyles };
