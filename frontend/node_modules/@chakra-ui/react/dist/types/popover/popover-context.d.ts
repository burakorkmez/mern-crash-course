/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/styled-system";
export declare const PopoverProvider: import("react").Provider<{
    forceUpdate: () => void;
    isOpen: boolean;
    onAnimationComplete: () => void;
    onClose: () => void;
    getAnchorProps: import("@chakra-ui/utils").PropGetter;
    getArrowProps: import("@chakra-ui/utils").PropGetter;
    getArrowInnerProps: import("@chakra-ui/utils").PropGetter;
    getPopoverPositionerProps: import("@chakra-ui/utils").PropGetter;
    getPopoverProps: import("@chakra-ui/utils").PropGetter;
    getTriggerProps: import("@chakra-ui/utils").PropGetter;
    getHeaderProps: import("@chakra-ui/utils").PropGetter;
    getBodyProps: import("@chakra-ui/utils").PropGetter;
}>, usePopoverContext: () => {
    forceUpdate: () => void;
    isOpen: boolean;
    onAnimationComplete: () => void;
    onClose: () => void;
    getAnchorProps: import("@chakra-ui/utils").PropGetter;
    getArrowProps: import("@chakra-ui/utils").PropGetter;
    getArrowInnerProps: import("@chakra-ui/utils").PropGetter;
    getPopoverPositionerProps: import("@chakra-ui/utils").PropGetter;
    getPopoverProps: import("@chakra-ui/utils").PropGetter;
    getTriggerProps: import("@chakra-ui/utils").PropGetter;
    getHeaderProps: import("@chakra-ui/utils").PropGetter;
    getBodyProps: import("@chakra-ui/utils").PropGetter;
};
export declare const PopoverStylesProvider: import("react").Provider<Record<string, SystemStyleObject>>, usePopoverStyles: () => Record<string, SystemStyleObject>;
