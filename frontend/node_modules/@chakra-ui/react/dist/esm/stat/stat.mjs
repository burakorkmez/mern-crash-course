'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const [StatStylesProvider, useStatStyles] = createContext({
  name: `StatStylesContext`,
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
});
const Stat = forwardRef(function Stat2(props, ref) {
  const styles = useMultiStyleConfig("Stat", props);
  const statStyles = {
    position: "relative",
    flex: "1 1 0%",
    ...styles.container
  };
  const { className, children, ...rest } = omitThemingProps(props);
  return /* @__PURE__ */ jsx(StatStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      ...rest,
      className: cx("chakra-stat", className),
      __css: statStyles,
      children: /* @__PURE__ */ jsx("dl", { children })
    }
  ) });
});
Stat.displayName = "Stat";

export { Stat, useStatStyles };
