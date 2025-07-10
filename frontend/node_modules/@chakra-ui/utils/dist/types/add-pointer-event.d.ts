import { MixedEventListener } from "./event-types";
export declare function addPointerEvent(target: EventTarget, type: string, cb: MixedEventListener, options?: AddEventListenerOptions): () => void;
