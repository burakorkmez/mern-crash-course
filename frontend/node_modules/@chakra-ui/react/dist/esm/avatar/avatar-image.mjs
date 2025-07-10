'use client';
import { jsx } from 'react/jsx-runtime';
import { cloneElement } from 'react';
import { AvatarName } from './avatar-name.mjs';
import { GenericAvatarIcon } from './generic-avatar-icon.mjs';
import { useImage } from '../image/use-image.mjs';
import { chakra } from '../system/factory.mjs';

function AvatarImage(props) {
  const {
    src,
    srcSet,
    onError,
    onLoad,
    getInitials,
    name,
    borderRadius,
    loading,
    iconLabel,
    icon = /* @__PURE__ */ jsx(GenericAvatarIcon, {}),
    ignoreFallback,
    referrerPolicy,
    crossOrigin
  } = props;
  const status = useImage({ src, onError, crossOrigin, ignoreFallback });
  const hasLoaded = status === "loaded";
  const showFallback = !src || !hasLoaded;
  if (showFallback) {
    return name ? /* @__PURE__ */ jsx(
      AvatarName,
      {
        className: "chakra-avatar__initials",
        getInitials,
        name
      }
    ) : cloneElement(icon, {
      role: "img",
      "aria-label": iconLabel
    });
  }
  return /* @__PURE__ */ jsx(
    chakra.img,
    {
      src,
      srcSet,
      alt: name ?? iconLabel,
      onLoad,
      referrerPolicy,
      crossOrigin: crossOrigin ?? void 0,
      className: "chakra-avatar__img",
      loading,
      __css: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius
      }
    }
  );
}
AvatarImage.displayName = "AvatarImage";

export { AvatarImage };
