import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface ContainerProps extends HTMLChakraProps<"div">, ThemingProps<"Container"> {
    /**
     * If `true`, container will center its children
     * regardless of their width.
     *
     * @default false
     */
    centerContent?: boolean;
}
/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep its content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/container
 */
export declare const Container: import("../system").ComponentWithAs<"div", ContainerProps>;
