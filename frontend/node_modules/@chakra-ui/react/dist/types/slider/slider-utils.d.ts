/// <reference types="react" />
export declare function getIds(id: string | number): {
    root: string;
    getThumb: (i: number) => string;
    getInput: (i: number) => string;
    track: string;
    innerTrack: string;
    getMarker: (i: number) => string;
    output: string;
};
type Orientation = "vertical" | "horizontal";
export declare function orient(options: {
    orientation: Orientation;
    vertical: React.CSSProperties;
    horizontal: React.CSSProperties;
}): import("react").CSSProperties;
export declare function getStyles(options: {
    orientation: Orientation;
    thumbPercents: number[];
    isReversed?: boolean;
}): {
    trackStyle: import("react").CSSProperties;
    innerTrackStyle: import("react").CSSProperties;
    rootStyle: import("react").CSSProperties;
    getThumbStyle: (i: number) => React.CSSProperties;
};
export declare function getIsReversed(options: {
    isReversed?: boolean;
    direction: "ltr" | "rtl";
    orientation?: "horizontal" | "vertical";
}): boolean | undefined;
export {};
