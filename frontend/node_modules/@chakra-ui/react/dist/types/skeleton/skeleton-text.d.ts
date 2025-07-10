/// <reference types="react" />
import { SkeletonProps } from "./skeleton";
export interface SkeletonTextProps extends SkeletonProps {
    spacing?: SkeletonProps["margin"];
    skeletonHeight?: SkeletonProps["height"];
    startColor?: SkeletonProps["startColor"];
    endColor?: SkeletonProps["endColor"];
    isLoaded?: SkeletonProps["isLoaded"];
}
/**
 * `SkeletonText` is used to display the loading state in the form of text.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/skeleton
 */
export declare const SkeletonText: React.FC<SkeletonTextProps>;
