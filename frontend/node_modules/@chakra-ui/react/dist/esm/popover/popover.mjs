'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { runIfFn } from '@chakra-ui/utils';
import { PopoverProvider, PopoverStylesProvider } from './popover-context.mjs';
import { usePopover } from './use-popover.mjs';
import { useTheme } from '../system/use-theme.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';

function Popover(props) {
  const styles = useMultiStyleConfig("Popover", props);
  const { children, ...rest } = omitThemingProps(props);
  const theme = useTheme();
  const context = usePopover({ ...rest, direction: theme.direction });
  return /* @__PURE__ */ jsx(PopoverProvider, { value: context, children: /* @__PURE__ */ jsx(PopoverStylesProvider, { value: styles, children: runIfFn(children, {
    isOpen: context.isOpen,
    onClose: context.onClose,
    forceUpdate: context.forceUpdate
  }) }) });
}
Popover.displayName = "Popover";

export { Popover };
