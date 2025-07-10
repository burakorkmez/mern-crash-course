'use client';
import { jsx } from 'react/jsx-runtime';
import { Skeleton } from './skeleton.mjs';

const SkeletonCircle = ({
  size = "2rem",
  ...rest
}) => /* @__PURE__ */ jsx(Skeleton, { borderRadius: "full", boxSize: size, ...rest });
SkeletonCircle.displayName = "SkeletonCircle";

export { SkeletonCircle };
