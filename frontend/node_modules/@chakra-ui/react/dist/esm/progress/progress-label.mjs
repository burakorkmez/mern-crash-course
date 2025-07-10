'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { useProgressStyles } from './progress.mjs';
import { chakra } from '../system/factory.mjs';

const ProgressLabel = (props) => {
  const styles = useProgressStyles();
  const labelStyles = defineStyle({
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles.label
  });
  return /* @__PURE__ */ jsx(chakra.div, { ...props, __css: labelStyles });
};
ProgressLabel.displayName = "ProgressLabel";

export { ProgressLabel };
