import { AnyPointerEvent, PointType } from "./event-types";
export declare function getEventPoint(event: AnyPointerEvent, type?: PointType): {
    x: number;
    y: number;
};
