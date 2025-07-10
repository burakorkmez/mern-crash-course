import { PanEventHandler } from "./types";
export interface UsePanEventProps {
    onPan?: PanEventHandler;
    onPanStart?: PanEventHandler;
    onPanEnd?: PanEventHandler;
    onPanSessionStart?: PanEventHandler;
    onPanSessionEnd?: PanEventHandler;
    threshold?: number;
}
export declare function usePanEvent(ref: React.RefObject<HTMLElement | null>, options: UsePanEventProps): void;
