'use client';
'use strict';

var React = require('react');
var createToastFn = require('./create-toast-fn.cjs');
var toast_provider = require('./toast.provider.cjs');
var hooks = require('../system/hooks.cjs');

function useToast(options) {
  const { theme } = hooks.useChakra();
  const defaultOptions = toast_provider.useToastOptionContext();
  return React.useMemo(
    () => createToastFn.createToastFn(theme.direction, {
      ...defaultOptions,
      ...options
    }),
    [options, theme.direction, defaultOptions]
  );
}

exports.useToast = useToast;
