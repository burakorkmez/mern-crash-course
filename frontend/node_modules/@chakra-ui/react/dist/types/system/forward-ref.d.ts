/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 */
import { ElementType } from "react";
import { ComponentWithAs, PropsOf, RightJoinProps } from "./system.types";
export declare function forwardRef<Props extends object, Component extends ElementType>(component: React.ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props> & {
    as?: ElementType;
}>): ComponentWithAs<Component, Props>;
