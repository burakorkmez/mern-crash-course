import { ResponsiveValue } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
interface ShapeProps extends HTMLChakraProps<"svg"> {
    size?: ResponsiveValue<string | number>;
    /**
     * @default false
     */
    isIndeterminate?: boolean;
}
export declare const Shape: {
    (props: ShapeProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
