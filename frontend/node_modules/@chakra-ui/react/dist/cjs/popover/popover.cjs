'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var popoverContext = require('./popover-context.cjs');
var usePopover = require('./use-popover.cjs');
var useTheme = require('../system/use-theme.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

function Popover(props) {
  const styles = useStyleConfig.useMultiStyleConfig("Popover", props);
  const { children, ...rest } = styledSystem.omitThemingProps(props);
  const theme = useTheme.useTheme();
  const context = usePopover.usePopover({ ...rest, direction: theme.direction });
  return /* @__PURE__ */ jsxRuntime.jsx(popoverContext.PopoverProvider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(popoverContext.PopoverStylesProvider, { value: styles, children: utils.runIfFn(children, {
    isOpen: context.isOpen,
    onClose: context.onClose,
    forceUpdate: context.forceUpdate
  }) }) });
}
Popover.displayName = "Popover";

exports.Popover = Popover;
