import { ThemingProps } from "@chakra-ui/styled-system";
import { MaybeRenderProp } from "@chakra-ui/utils";
import { UsePopoverProps } from "./use-popover";
export interface PopoverProps extends UsePopoverProps, ThemingProps<"Popover"> {
    /**
     * The content of the popover. It is usually the `PopoverTrigger`,
     * and `PopoverContent`
     */
    children?: MaybeRenderProp<{
        isOpen: boolean;
        onClose: () => void;
        forceUpdate: (() => void) | undefined;
    }>;
}
/**
 * Popover is used to bring attention to specific user interface elements,
 * typically to suggest an action or to guide users through a new experience.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/popover
 */
export declare function Popover(props: PopoverProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Popover {
    var displayName: string;
}
