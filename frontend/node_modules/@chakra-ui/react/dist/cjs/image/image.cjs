'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var nativeImage = require('./native-image.cjs');
var useImage = require('./use-image.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Image = forwardRef.forwardRef(function Image2(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props;
  const providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  const shouldIgnoreFallbackImage = loading != null || // use can opt out of fallback image
  ignoreFallback || // if the user doesn't provide any kind of fallback we should ignore it
  !providedFallback;
  const status = useImage.useImage({
    ...props,
    crossOrigin,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = useImage.shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : utils.omit(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.img,
      {
        as: nativeImage.NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.img,
    {
      as: nativeImage.NativeImage,
      src,
      srcSet,
      crossOrigin,
      loading,
      referrerPolicy,
      className: "chakra-image",
      ...shared
    }
  );
});
Image.displayName = "Image";

exports.Image = Image;
