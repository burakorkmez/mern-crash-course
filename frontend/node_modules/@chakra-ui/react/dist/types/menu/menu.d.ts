/// <reference types="react" />
import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { UseMenuProps } from "./use-menu";
declare const useMenuStyles: () => Record<string, SystemStyleObject>;
export { useMenuStyles };
type MaybeRenderProp<P> = React.ReactNode | ((props: P) => React.ReactNode);
export interface MenuProps extends UseMenuProps, ThemingProps<"Menu"> {
    children: MaybeRenderProp<{
        isOpen: boolean;
        onClose: () => void;
        forceUpdate: (() => void) | undefined;
    }>;
}
/**
 * Menu provides context, state, and focus management
 * to its sub-components. It doesn't render any DOM node.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/menu
 */
export declare const Menu: React.FC<MenuProps>;
