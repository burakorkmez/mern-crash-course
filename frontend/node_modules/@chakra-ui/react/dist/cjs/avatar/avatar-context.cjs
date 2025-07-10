'use client';
'use strict';

var utils = require('@chakra-ui/utils');

const [AvatarStylesProvider, useAvatarStyles] = utils.createContext({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>"
});

exports.AvatarStylesProvider = AvatarStylesProvider;
exports.useAvatarStyles = useAvatarStyles;
