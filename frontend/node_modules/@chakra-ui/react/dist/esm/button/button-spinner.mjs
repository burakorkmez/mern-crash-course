'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { Spinner } from '../spinner/spinner.mjs';
import { chakra } from '../system/factory.mjs';

function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = /* @__PURE__ */ jsx(Spinner, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = useMemo(
    () => defineStyle({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing]
  );
  return /* @__PURE__ */ jsx(chakra.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";

export { ButtonSpinner };
