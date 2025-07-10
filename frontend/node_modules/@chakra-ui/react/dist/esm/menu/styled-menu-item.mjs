'use client';
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useMenuStyles } from './menu.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StyledMenuItem = forwardRef(
  (props, ref) => {
    const { type, ...rest } = props;
    const styles = useMenuStyles();
    const btnType = rest.as || type ? type ?? void 0 : "button";
    const buttonStyles = useMemo(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...styles.item
      }),
      [styles.item]
    );
    return /* @__PURE__ */ jsx(chakra.button, { ref, type: btnType, ...rest, __css: buttonStyles });
  }
);

export { StyledMenuItem };
