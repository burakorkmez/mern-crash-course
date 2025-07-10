export type LogicalToastPosition = "top-start" | "top-end" | "bottom-start" | "bottom-end";
export type ToastPositionWithLogical = LogicalToastPosition | "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";
export type ToastPosition = Exclude<ToastPositionWithLogical, LogicalToastPosition>;
export declare function getToastPlacement(position: ToastPosition | undefined, dir: "ltr" | "rtl"): ToastPosition | undefined;
