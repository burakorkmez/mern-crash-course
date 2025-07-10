/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
import { AnimatePresenceProps, HTMLMotionProps } from "framer-motion";
import { PortalProps } from "../portal";
import { HTMLChakraProps } from "../system";
import { UseTooltipProps } from "./use-tooltip";
export interface TooltipProps extends HTMLChakraProps<"div">, ThemingProps<"Tooltip">, Partial<UseTooltipProps> {
    /**
     * The React component to use as the
     * trigger for the tooltip
     */
    children: React.ReactNode;
    /**
     * The label of the tooltip
     */
    label?: React.ReactNode;
    /**
     * The accessible, human friendly label to use for
     * screen readers.
     *
     * If passed, tooltip will show the content `label`
     * but expose only `aria-label` to assistive technologies
     */
    "aria-label"?: string;
    /**
     * If `true`, the tooltip will wrap its children
     * in a `<span/>` with `tabIndex=0`
     * @default false
     */
    shouldWrapChildren?: boolean;
    /**
     * If `true`, the tooltip will show an arrow tip
     * @default false
     */
    hasArrow?: boolean;
    /**
     * Props to be forwarded to the portal component
     */
    portalProps?: Pick<PortalProps, "appendToParentPortal" | "containerRef">;
    motionProps?: HTMLMotionProps<"div">;
    animatePresenceProps?: AnimatePresenceProps;
}
/**
 * Tooltips display informative text when users hover, focus on, or tap an element.
 *
 * @see Docs     https://v2.chakra-ui.com/docs/overlay/tooltip
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 */
export declare const Tooltip: import("../system").ComponentWithAs<"div", TooltipProps>;
