import { ThemingProps } from "@chakra-ui/styled-system";
import { SlideOptions } from "../transition";
import { ModalProps } from "./modal";
declare const useDrawerContext: () => DrawerOptions;
type LogicalPlacement = "start" | "end";
type DrawerPlacement = SlideOptions["direction"] | LogicalPlacement;
interface DrawerOptions {
    /**
     * The placement of the drawer
     * @default "right"
     */
    placement?: DrawerPlacement;
    /**
     * If `true` and drawer's placement is `top` or `bottom`,
     * the drawer will occupy the viewport height (100vh)
     */
    isFullHeight?: boolean;
}
export interface DrawerProps extends DrawerOptions, ThemingProps<"Drawer">, Omit<ModalProps, "scrollBehavior" | "motionPreset" | "isCentered" | keyof ThemingProps> {
}
/**
 * The Drawer component is a panel that slides out from the edge of the screen.
 * It can be useful when you need users to complete a task or view some details without leaving the current page.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/drawer
 */
export declare function Drawer(props: DrawerProps): import("react/jsx-runtime").JSX.Element;
export { ModalBody as DrawerBody } from "./modal-body";
export { ModalCloseButton as DrawerCloseButton } from "./modal-close-button";
export { ModalFooter as DrawerFooter } from "./modal-footer";
export { ModalHeader as DrawerHeader } from "./modal-header";
export { ModalOverlay as DrawerOverlay } from "./modal-overlay";
export { useDrawerContext };
