/// <reference types="react" />
interface PortalManagerContext {
    zIndex?: number;
}
declare const usePortalManager: () => PortalManagerContext | null;
export { usePortalManager };
export interface PortalManagerProps {
    children?: React.ReactNode;
    /**
     * [Z-Index war] If your has multiple elements
     * with z-index clashing, you might need to apply a z-index to the Portal manager
     */
    zIndex?: number;
}
export declare function PortalManager(props: PortalManagerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace PortalManager {
    var displayName: string;
}
