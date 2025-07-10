'use client';
import { isStyleProp, css } from '@chakra-ui/styled-system';
import { interopDefault, splitProps, runIfFn, assignAfter, compact } from '@chakra-ui/utils';
import createStyled from '@emotion/styled';
import { forwardRef, createElement } from 'react';
import { shouldForwardProp } from './should-forward-prop.mjs';
import { useColorMode } from '../color-mode/color-mode-context.mjs';

const emotion_styled = interopDefault(createStyled);
const toCSSObject = ({ baseStyle }) => (props) => {
  const { theme, css: cssProp, __css, sx, ...restProps } = props;
  const [styleProps] = splitProps(restProps, isStyleProp);
  const finalBaseStyle = runIfFn(baseStyle, props);
  const finalStyles = assignAfter(
    {},
    __css,
    finalBaseStyle,
    compact(styleProps),
    sx
  );
  const computedCSS = css(finalStyles)(props.theme);
  return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options) {
  const { baseStyle, ...styledOptions } = options ?? {};
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  const styleObject = toCSSObject({ baseStyle });
  const Component = emotion_styled(
    component,
    styledOptions
  )(styleObject);
  const chakraComponent = forwardRef(
    function ChakraComponent2(props, ref) {
      const { children, ...restProps } = props;
      const { colorMode, forced } = useColorMode();
      const dataTheme = forced ? colorMode : void 0;
      return createElement(
        Component,
        { ref, "data-theme": dataTheme, ...restProps },
        children
      );
    }
  );
  return chakraComponent;
}

export { styled, toCSSObject };
