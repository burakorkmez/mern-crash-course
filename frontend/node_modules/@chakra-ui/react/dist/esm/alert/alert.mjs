'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps, defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { getStatusColorScheme, AlertProvider, AlertStylesProvider } from './alert-context.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Alert = forwardRef(function Alert2(props, ref) {
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
  const colorScheme = props.colorScheme ?? getStatusColorScheme(status);
  const styles = useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = defineStyle({
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles.container
  });
  return /* @__PURE__ */ jsx(AlertProvider, { value: { status }, children: /* @__PURE__ */ jsx(AlertStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.div,
    {
      "data-status": status,
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
});
Alert.displayName = "Alert";

export { Alert };
