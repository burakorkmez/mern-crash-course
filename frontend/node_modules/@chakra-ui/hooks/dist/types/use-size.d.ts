import { ElementSize } from "@zag-js/element-size";
export interface UseSizesProps<T> {
    getNodes: () => T[];
    observeMutation?: boolean;
    enabled?: boolean;
    fallback?: ElementSize[];
}
export declare function useSizes<T extends HTMLElement | null>(props: UseSizesProps<T>): (ElementSize | undefined)[];
export interface UseSizeProps {
    observeMutation?: boolean;
    enabled?: boolean;
    fallback?: ElementSize;
}
export declare function useSize<T extends HTMLElement | null>(subject: T | React.RefObject<T>, options?: UseSizeProps): ElementSize | undefined;
