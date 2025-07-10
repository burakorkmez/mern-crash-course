'use strict';

var utils = require('@chakra-ui/utils');

function omitThemingProps(props) {
  return utils.omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

exports.omitThemingProps = omitThemingProps;
