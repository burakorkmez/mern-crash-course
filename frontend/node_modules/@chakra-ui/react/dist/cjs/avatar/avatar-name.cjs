'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var avatarContext = require('./avatar-context.cjs');
var factory = require('../system/factory.cjs');

function initials(name) {
  const names = name.trim().split(" ");
  const firstName = names[0] ?? "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function AvatarName(props) {
  const { name, getInitials, ...rest } = props;
  const styles = avatarContext.useAvatarStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { role: "img", "aria-label": name, ...rest, __css: styles.label, children: name ? getInitials?.(name) : null });
}
AvatarName.displayName = "AvatarName";

exports.AvatarName = AvatarName;
exports.initials = initials;
