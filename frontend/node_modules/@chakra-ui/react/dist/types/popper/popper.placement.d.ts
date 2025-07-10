import type { Placement } from "@popperjs/core";
type Logical = "start-start" | "start-end" | "end-start" | "end-end" | "start" | "end";
type PlacementWithLogical = Placement | Logical;
export type { Placement, PlacementWithLogical };
export declare function getPopperPlacement(placement: PlacementWithLogical, dir?: "ltr" | "rtl"): Placement;
