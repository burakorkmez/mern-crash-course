import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
export declare function useStyleConfig(themeKey: string, props?: ThemingProps & Dict): SystemStyleObject;
export declare function useMultiStyleConfig(themeKey: string, props?: ThemingProps & Dict): Record<string, SystemStyleObject>;
