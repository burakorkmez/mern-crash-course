'use client';
'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var createStyled = require('@emotion/styled');
var React = require('react');
var shouldForwardProp = require('./should-forward-prop.cjs');
var colorModeContext = require('../color-mode/color-mode-context.cjs');

const emotion_styled = utils.interopDefault(createStyled);
const toCSSObject = ({ baseStyle }) => (props) => {
  const { theme, css: cssProp, __css, sx, ...restProps } = props;
  const [styleProps] = utils.splitProps(restProps, styledSystem.isStyleProp);
  const finalBaseStyle = utils.runIfFn(baseStyle, props);
  const finalStyles = utils.assignAfter(
    {},
    __css,
    finalBaseStyle,
    utils.compact(styleProps),
    sx
  );
  const computedCSS = styledSystem.css(finalStyles)(props.theme);
  return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options) {
  const { baseStyle, ...styledOptions } = options ?? {};
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp.shouldForwardProp;
  }
  const styleObject = toCSSObject({ baseStyle });
  const Component = emotion_styled(
    component,
    styledOptions
  )(styleObject);
  const chakraComponent = React.forwardRef(
    function ChakraComponent2(props, ref) {
      const { children, ...restProps } = props;
      const { colorMode, forced } = colorModeContext.useColorMode();
      const dataTheme = forced ? colorMode : void 0;
      return React.createElement(
        Component,
        { ref, "data-theme": dataTheme, ...restProps },
        children
      );
    }
  );
  return chakraComponent;
}

exports.styled = styled;
exports.toCSSObject = toCSSObject;
