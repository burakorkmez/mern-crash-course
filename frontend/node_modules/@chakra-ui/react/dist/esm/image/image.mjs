'use client';
import { jsx } from 'react/jsx-runtime';
import { omit } from '@chakra-ui/utils';
import { NativeImage } from './native-image.mjs';
import { useImage, shouldShowFallbackImage } from './use-image.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Image = forwardRef(function Image2(props, ref) {
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
  const status = useImage({
    ...props,
    crossOrigin,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return /* @__PURE__ */ jsx(
      chakra.img,
      {
        as: NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return /* @__PURE__ */ jsx(
    chakra.img,
    {
      as: NativeImage,
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

export { Image };
