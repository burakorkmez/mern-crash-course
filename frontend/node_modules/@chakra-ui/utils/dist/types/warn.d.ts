export interface WarnOptions {
    condition: boolean;
    message: string;
}
export declare const warn: (options: WarnOptions) => void;
