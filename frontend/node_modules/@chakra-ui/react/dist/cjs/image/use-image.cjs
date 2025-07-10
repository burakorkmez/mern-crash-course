'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var React = require('react');

function useImage(props) {
  const {
    loading,
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes,
    ignoreFallback
  } = props;
  const [status, setStatus] = React.useState("pending");
  React.useEffect(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  const imageRef = React.useRef(null);
  const load = React.useCallback(() => {
    if (!src)
      return;
    flush();
    const img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes)
      img.sizes = sizes;
    if (loading)
      img.loading = loading;
    img.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad?.(event);
    };
    img.onerror = (error) => {
      flush();
      setStatus("failed");
      onError?.(error);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  hooks.useSafeLayoutEffect(() => {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}
const shouldShowFallbackImage = (status, fallbackStrategy) => status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";

exports.shouldShowFallbackImage = shouldShowFallbackImage;
exports.useImage = useImage;
