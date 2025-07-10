'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { usePopoverStyles } from './popover-context.mjs';
import { chakra } from '../system/factory.mjs';

function PopoverFooter(props) {
  const styles = usePopoverStyles();
  return /* @__PURE__ */ jsx(
    chakra.footer,
    {
      ...props,
      className: cx("chakra-popover__footer", props.className),
      __css: styles.footer
    }
  );
}
PopoverFooter.displayName = "PopoverFooter";

export { PopoverFooter };
