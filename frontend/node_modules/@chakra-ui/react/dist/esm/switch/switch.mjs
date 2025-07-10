'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { useCheckbox } from '../checkbox/use-checkbox.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Switch = forwardRef(
  function Switch2(props, ref) {
    const styles = useMultiStyleConfig("Switch", props);
    const {
      spacing = "0.5rem",
      children,
      ...ownProps
    } = omitThemingProps(props);
    const {
      getIndicatorProps,
      getInputProps,
      getCheckboxProps,
      getRootProps,
      getLabelProps
    } = useCheckbox(ownProps);
    const containerStyles = useMemo(
      () => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
        lineHeight: 0,
        ...styles.container
      }),
      [styles.container]
    );
    const trackStyles = useMemo(
      () => ({
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
        ...styles.track
      }),
      [styles.track]
    );
    const labelStyles = useMemo(
      () => ({
        userSelect: "none",
        marginStart: spacing,
        ...styles.label
      }),
      [spacing, styles.label]
    );
    return /* @__PURE__ */ jsxs(
      chakra.label,
      {
        ...getRootProps(),
        className: cx("chakra-switch", props.className),
        __css: containerStyles,
        children: [
          /* @__PURE__ */ jsx("input", { className: "chakra-switch__input", ...getInputProps({}, ref) }),
          /* @__PURE__ */ jsx(
            chakra.span,
            {
              ...getCheckboxProps(),
              className: "chakra-switch__track",
              __css: trackStyles,
              children: /* @__PURE__ */ jsx(
                chakra.span,
                {
                  __css: styles.thumb,
                  className: "chakra-switch__thumb",
                  ...getIndicatorProps()
                }
              )
            }
          ),
          children && /* @__PURE__ */ jsx(
            chakra.span,
            {
              className: "chakra-switch__label",
              ...getLabelProps(),
              __css: labelStyles,
              children
            }
          )
        ]
      }
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
