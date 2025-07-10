/// <reference types="react" />
import { type IconProps } from "../icon";
export declare const StatDownArrow: React.FC<IconProps>;
export declare function StatUpArrow(props: IconProps): import("react/jsx-runtime").JSX.Element;
export declare namespace StatUpArrow {
    var displayName: string;
}
export interface StatArrowProps extends IconProps {
    type?: "increase" | "decrease";
}
export declare function StatArrow(props: StatArrowProps): import("react/jsx-runtime").JSX.Element;
export declare namespace StatArrow {
    var displayName: string;
}
