import { omit } from '@chakra-ui/utils';

function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

export { omitThemingProps };
