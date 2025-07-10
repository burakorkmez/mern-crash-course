'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useAlertContext, getStatusIcon, useAlertStyles } from './alert-context.mjs';
import { chakra } from '../system/factory.mjs';

function AlertIcon(props) {
  const { status } = useAlertContext();
  const BaseIcon = getStatusIcon(status);
  const styles = useAlertStyles();
  const css = status === "loading" ? styles.spinner : styles.icon;
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      display: "inherit",
      "data-status": status,
      ...props,
      className: cx("chakra-alert__icon", props.className),
      __css: css,
      children: props.children || /* @__PURE__ */ jsx(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
AlertIcon.displayName = "AlertIcon";

export { AlertIcon };
