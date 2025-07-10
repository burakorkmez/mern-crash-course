import type { PropsOf } from "../system";
import { Icon } from "../icon";
export type AccordionIconProps = PropsOf<typeof Icon>;
/**
 * AccordionIcon that gives a visual cue of the open/close state of the accordion item.
 * It rotates `180deg` based on the open/close state.
 */
export declare function AccordionIcon(props: AccordionIconProps): import("react/jsx-runtime").JSX.Element;
export declare namespace AccordionIcon {
    var displayName: string;
}
