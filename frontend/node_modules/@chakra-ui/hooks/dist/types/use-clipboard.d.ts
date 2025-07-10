export interface UseClipboardOptions {
    /**
     * timeout delay (in ms) to switch back to initial state once copied.
     */
    timeout?: number;
    /**
     * Set the desired MIME type
     */
    format?: string;
}
/**
 * React hook to copy content to clipboard
 *
 * @param value the text or value to copy
 * @param {Number} [optionsOrTimeout=1500] optionsOrTimeout - delay (in ms) to switch back to initial state once copied.
 * @param {Object} optionsOrTimeout
 * @param {string} optionsOrTimeout.format - set the desired MIME type
 * @param {number} optionsOrTimeout.timeout - delay (in ms) to switch back to initial state once copied.
 *
 * @see Docs https://v2.chakra-ui.com/docs/hooks/use-clipboard
 */
export declare function useClipboard(value: string, optionsOrTimeout?: number | UseClipboardOptions): {
    value: string;
    setValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    onCopy: (valueToCopy?: any) => void;
    hasCopied: boolean;
};
