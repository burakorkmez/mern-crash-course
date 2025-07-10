import { AnyPointerEvent } from "./event-types";
export declare function isMouseEvent(event: any): event is MouseEvent;
export declare function isTouchEvent(event: AnyPointerEvent): event is TouchEvent;
export declare function isMultiTouchEvent(event: AnyPointerEvent): boolean;
