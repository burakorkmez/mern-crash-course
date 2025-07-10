'use client';
import { chakra } from '../system/factory.mjs';

const Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

export { Spacer };
