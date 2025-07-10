'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useStatStyles } from './stat.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StatHelpText = forwardRef(
  function StatHelpText2(props, ref) {
    const styles = useStatStyles();
    return /* @__PURE__ */ jsx(
      chakra.dd,
      {
        ref,
        ...props,
        className: cx("chakra-stat__help-text", props.className),
        __css: styles.helpText
      }
    );
  }
);
StatHelpText.displayName = "StatHelpText";

export { StatHelpText };
