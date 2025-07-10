'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useStatStyles } from './stat.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StatNumber = forwardRef(
  function StatNumber2(props, ref) {
    const styles = useStatStyles();
    return /* @__PURE__ */ jsx(
      chakra.dd,
      {
        ref,
        ...props,
        className: cx("chakra-stat__number", props.className),
        __css: {
          ...styles.number,
          fontFeatureSettings: "pnum",
          fontVariantNumeric: "proportional-nums"
        }
      }
    );
  }
);
StatNumber.displayName = "StatNumber";

export { StatNumber };
