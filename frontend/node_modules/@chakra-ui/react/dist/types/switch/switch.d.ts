import { SystemProps, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseCheckboxProps } from "../checkbox";
export interface SwitchProps extends Omit<UseCheckboxProps, "isIndeterminate">, Omit<HTMLChakraProps<"label">, keyof UseCheckboxProps>, ThemingProps<"Switch"> {
    /**
     * The spacing between the switch and its label text
     * @default 0.5rem
     * @type SystemProps["marginLeft"]
     */
    spacing?: SystemProps["marginLeft"];
}
/**
 * The `Switch` component is used as an alternative for the checkbox component for switching between "enabled" and "disabled" states.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/switch
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/switch/
 */
export declare const Switch: import("../system").ComponentWithAs<"input", SwitchProps>;
