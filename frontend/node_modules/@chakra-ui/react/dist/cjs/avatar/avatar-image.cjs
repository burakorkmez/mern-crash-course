'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var avatarName = require('./avatar-name.cjs');
var genericAvatarIcon = require('./generic-avatar-icon.cjs');
var useImage = require('../image/use-image.cjs');
var factory = require('../system/factory.cjs');

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
    icon = /* @__PURE__ */ jsxRuntime.jsx(genericAvatarIcon.GenericAvatarIcon, {}),
    ignoreFallback,
    referrerPolicy,
    crossOrigin
  } = props;
  const status = useImage.useImage({ src, onError, crossOrigin, ignoreFallback });
  const hasLoaded = status === "loaded";
  const showFallback = !src || !hasLoaded;
  if (showFallback) {
    return name ? /* @__PURE__ */ jsxRuntime.jsx(
      avatarName.AvatarName,
      {
        className: "chakra-avatar__initials",
        getInitials,
        name
      }
    ) : React.cloneElement(icon, {
      role: "img",
      "aria-label": iconLabel
    });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.img,
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

exports.AvatarImage = AvatarImage;
