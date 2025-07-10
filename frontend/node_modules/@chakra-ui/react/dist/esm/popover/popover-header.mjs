'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { usePopoverContext, usePopoverStyles } from './popover-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const PopoverHeader = forwardRef(
  function PopoverHeader2(props, ref) {
    const { getHeaderProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return /* @__PURE__ */ jsx(
      chakra.header,
      {
        ...getHeaderProps(props, ref),
        className: cx("chakra-popover__header", props.className),
        __css: styles.header
      }
    );
  }
);
PopoverHeader.displayName = "PopoverHeader";

export { PopoverHeader };
