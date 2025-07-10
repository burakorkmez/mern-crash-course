'use client';
import { jsx } from 'react/jsx-runtime';
import { useAvatarStyles } from './avatar-context.mjs';
import { chakra } from '../system/factory.mjs';

function initials(name) {
  const names = name.trim().split(" ");
  const firstName = names[0] ?? "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function AvatarName(props) {
  const { name, getInitials, ...rest } = props;
  const styles = useAvatarStyles();
  return /* @__PURE__ */ jsx(chakra.div, { role: "img", "aria-label": name, ...rest, __css: styles.label, children: name ? getInitials?.(name) : null });
}
AvatarName.displayName = "AvatarName";

export { AvatarName, initials };
