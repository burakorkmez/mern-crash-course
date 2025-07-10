/// <reference types="react" />
/**
 * @deprecated - This will be removed in future versions.
 * Please use `number | number[]` instead.
 */
export type ExpandedIndex = number | number[];
export interface UseAccordionProps {
    /**
     * If `true`, multiple accordion items can be expanded at once.
     *
     * @default false
     */
    allowMultiple?: boolean;
    /**
     * If `true`, any expanded accordion item can be collapsed again.
     *
     * @default false
     */
    allowToggle?: boolean;
    /**
     * The index(es) of the expanded accordion item
     */
    index?: ExpandedIndex;
    /**
     * The initial index(es) of the expanded accordion item
     */
    defaultIndex?: ExpandedIndex;
    /**
     * The callback invoked when accordion items are expanded or collapsed.
     */
    onChange?(expandedIndex: ExpandedIndex): void;
}
/**
 * useAccordion hook provides all the state and focus management logic
 * for accordion items.
 *
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
 */
export declare function useAccordion(props: UseAccordionProps): {
    index: ExpandedIndex;
    setIndex: import("react").Dispatch<import("react").SetStateAction<ExpandedIndex>>;
    htmlProps: {};
    getAccordionItemProps: (idx: number | null) => {
        isOpen: boolean;
        onChange: (isOpen: boolean) => void;
    };
    focusedIndex: number;
    setFocusedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    descendants: import("..").DescendantsManager<HTMLButtonElement, {}>;
};
export type UseAccordionReturn = ReturnType<typeof useAccordion>;
interface AccordionContext extends Omit<UseAccordionReturn, "htmlProps" | "descendants"> {
    reduceMotion: boolean;
}
export declare const AccordionProvider: import("react").Provider<AccordionContext>, useAccordionContext: () => AccordionContext;
export interface UseAccordionItemProps {
    /**
     * If `true`, the accordion item will be disabled.
     *
     * @default false
     */
    isDisabled?: boolean;
    /**
     * If `true`, the accordion item will be focusable.
     *
     * @default false
     */
    isFocusable?: boolean;
    /**
     * A unique id for the accordion item.
     */
    id?: string;
}
/**
 * useAccordionItem
 *
 * React hook that provides the open/close functionality
 * for an accordion item and its children
 */
export declare function useAccordionItem(props: UseAccordionItemProps): {
    isOpen: boolean;
    isDisabled: boolean | undefined;
    isFocusable: boolean | undefined;
    onOpen: () => void;
    onClose: () => void;
    getButtonProps: (props?: Omit<React.HTMLAttributes<HTMLElement>, "color">, ref?: React.Ref<HTMLButtonElement> | null) => React.ComponentProps<"button">;
    getPanelProps: <T>(props?: Omit<import("react").HTMLAttributes<T>, "color">, ref?: import("react").Ref<T>) => import("react").HTMLAttributes<T> & import("react").RefAttributes<T>;
    htmlProps: {};
};
export type UseAccordionItemReturn = ReturnType<typeof useAccordionItem>;
export {};
