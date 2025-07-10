/// <reference types="react" />
/// <reference types="react" />
import { LazyMode } from "@chakra-ui/utils";
import { UseClickableProps } from "../clickable";
export declare const TabsDescendantsProvider: import("react").Provider<import("../descendant").DescendantsManager<HTMLButtonElement, {}>>, useTabsDescendantsContext: () => import("../descendant").DescendantsManager<HTMLButtonElement, {}>, useTabsDescendants: () => import("../descendant").DescendantsManager<HTMLButtonElement, {}>, useTabsDescendant: (options?: {
    disabled?: boolean | undefined;
    id?: string | undefined;
} | undefined) => import("../descendant/use-descendant").UseDescendantReturn<HTMLButtonElement, {}>;
export interface UseTabsProps {
    /**
     * The orientation of the tab list.
     * @default "horizontal"
     */
    orientation?: "vertical" | "horizontal";
    /**
     * If `true`, the tabs will be manually activated and
     * display its panel by pressing Space or Enter.
     *
     * If `false`, the tabs will be automatically activated
     * and their panel is displayed when they receive focus.
     *
     * @default false
     */
    isManual?: boolean;
    /**
     * Callback when the index (controlled or un-controlled) changes.
     */
    onChange?: (index: number) => void;
    /**
     * The index of the selected tab (in controlled mode)
     */
    index?: number;
    /**
     * The initial index of the selected tab (in uncontrolled mode)
     */
    defaultIndex?: number;
    /**
     * The id of the tab
     */
    id?: string;
    /**
     * Performance 🚀:
     * If `true`, rendering of the tab panel's will be deferred until it is selected.
     * @default false
     */
    isLazy?: boolean;
    /**
     * Performance 🚀:
     * The lazy behavior of tab panels' content when not active.
     * Only works when `isLazy={true}`
     *
     * - "unmount": The content of inactive tab panels are always unmounted.
     * - "keepMounted": The content of inactive tab panels is initially unmounted,
     * but stays mounted when selected.
     *
     * @default "unmount"
     */
    lazyBehavior?: LazyMode;
    /**
     * The writing mode direction.
     *
     * - When in RTL, the left and right navigation is flipped
     * @default "ltr"
     */
    direction?: "rtl" | "ltr";
}
/**
 * Tabs hook that provides all the states, and accessibility
 * helpers to keep all things working properly.
 *
 * Its returned object will be passed unto a Context Provider
 * so all child components can read from it.
 * There is no document link yet
 * @see Docs https://v2.chakra-ui.com/docs/components/useTabs
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/
 */
export declare function useTabs(props: UseTabsProps): {
    id: string;
    selectedIndex: number;
    focusedIndex: number;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    setFocusedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    isManual: boolean | undefined;
    isLazy: boolean | undefined;
    lazyBehavior: LazyMode;
    orientation: "horizontal" | "vertical";
    descendants: import("../descendant").DescendantsManager<HTMLButtonElement, {}>;
    direction: "ltr" | "rtl";
    htmlProps: {
        /**
         * The id of the tab
         */
        id?: string | undefined;
    };
};
export type UseTabsReturn = Omit<ReturnType<typeof useTabs>, "htmlProps" | "descendants">;
export declare const TabsProvider: import("react").Provider<UseTabsReturn>, useTabsContext: () => UseTabsReturn;
export interface UseTabListProps {
    children?: React.ReactNode;
    onKeyDown?: React.KeyboardEventHandler;
    ref?: React.Ref<any>;
}
/**
 * Tabs hook to manage multiple tab buttons,
 * and ensures only one tab is selected per time.
 *
 * @param props props object for the tablist
 */
export declare function useTabList<P extends UseTabListProps>(props: P): P & {
    role: string;
    "aria-orientation": "horizontal" | "vertical";
    onKeyDown: (event: import("react").KeyboardEvent<Element>) => void;
};
export type UseTabListReturn = ReturnType<typeof useTabList>;
export interface UseTabOptions {
    /**
     * If `true`, the `Tab` won't be toggleable
     * @default false
     */
    isDisabled?: boolean;
    /**
     * If `true` and `isDisabled`, the `Tab` will be focusable but not interactive.
     * @default false
     */
    isFocusable?: boolean;
}
export interface UseTabProps extends Omit<UseClickableProps, "color">, UseTabOptions {
}
/**
 * Tabs hook to manage each tab button.
 *
 * A tab can be disabled and focusable, or both,
 * hence the use of `useClickable` to handle this scenario
 */
export declare function useTab<P extends UseTabProps>(props: P): {
    id: string;
    role: string;
    tabIndex: number;
    type: "button";
    "aria-selected": boolean;
    "aria-controls": string;
    onFocus: ((event: import("react").FocusEvent<HTMLElement, Element>) => void) | undefined;
    ref: (node: any) => void;
    "aria-disabled": boolean | undefined;
    disabled: boolean | undefined;
    onClick: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseDown: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseUp: import("react").MouseEventHandler<HTMLElement> | undefined;
    onKeyUp: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyDown: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onMouseOver: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseLeave: import("react").MouseEventHandler<HTMLElement> | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoCapitalize?: (string & {}) | "none" | "off" | "on" | "sentences" | "words" | "characters" | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "false" | "true") | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    enterKeyHint?: "search" | "done" | "enter" | "go" | "next" | "previous" | "send" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "off" | "on" | undefined;
    inputMode?: "search" | "text" | "none" | "email" | "tel" | "url" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "false" | "true") | undefined;
    "aria-autocomplete"?: "both" | "none" | "inline" | "list" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "false" | "true") | undefined;
    "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-current"?: boolean | "time" | "page" | "false" | "true" | "step" | "date" | "location" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "false" | "true") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "false" | "true") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "grid" | "listbox" | "false" | "true" | "tree" | undefined;
    "aria-hidden"?: (boolean | "false" | "true") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "false" | "true") | undefined;
    "aria-multiline"?: (boolean | "false" | "true") | undefined;
    "aria-multiselectable"?: (boolean | "false" | "true") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-readonly"?: (boolean | "false" | "true") | undefined;
    "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "false" | "true") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: import("react").ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLElement> | undefined;
} | {
    id: string;
    role: string;
    tabIndex: number;
    type: "button";
    "aria-selected": boolean;
    "aria-controls": string;
    onFocus: ((event: import("react").FocusEvent<HTMLElement, Element>) => void) | undefined;
    ref: (node: any) => void;
    "data-active": boolean | "false" | "true";
    "aria-disabled": "true" | undefined;
    onClick: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseDown: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseUp: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    onKeyUp: (event: import("react").KeyboardEvent<HTMLElement>) => void;
    onKeyDown: (event: import("react").KeyboardEvent<HTMLElement>) => void;
    onMouseOver: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoCapitalize?: (string & {}) | "none" | "off" | "on" | "sentences" | "words" | "characters" | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "false" | "true") | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    enterKeyHint?: "search" | "done" | "enter" | "go" | "next" | "previous" | "send" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "off" | "on" | undefined;
    inputMode?: "search" | "text" | "none" | "email" | "tel" | "url" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "false" | "true") | undefined;
    "aria-autocomplete"?: "both" | "none" | "inline" | "list" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "false" | "true") | undefined;
    "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-current"?: boolean | "time" | "page" | "false" | "true" | "step" | "date" | "location" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "false" | "true") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "false" | "true") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "grid" | "listbox" | "false" | "true" | "tree" | undefined;
    "aria-hidden"?: (boolean | "false" | "true") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "false" | "true") | undefined;
    "aria-multiline"?: (boolean | "false" | "true") | undefined;
    "aria-multiselectable"?: (boolean | "false" | "true") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-readonly"?: (boolean | "false" | "true") | undefined;
    "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "false" | "true") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: import("react").ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLElement> | undefined;
};
export interface UseTabPanelsProps {
    children?: React.ReactNode;
}
/**
 * Tabs hook for managing the visibility of multiple tab panels.
 *
 * Since only one panel can be show at a time, we use `cloneElement`
 * to inject `selected` panel to each TabPanel.
 *
 * It returns a cloned version of its children with
 * all functionality included.
 */
export declare function useTabPanels<P extends UseTabPanelsProps>(props: P): P & {
    children: import("react").FunctionComponentElement<import("react").ProviderProps<{
        isSelected: boolean;
        id: string;
        tabId: string;
        selectedIndex: number;
    }>>[];
};
/**
 * Tabs hook for managing the visible/hidden states
 * of the tab panel.
 *
 * @param props props object for the tab panel
 */
export declare function useTabPanel(props: Record<string, any>): {
    children: any;
    role: string;
    "aria-labelledby": string;
    hidden: boolean;
    id: string;
    tabIndex: number;
};
/**
 * Tabs hook to show an animated indicators that
 * follows the active tab.
 *
 * The way we do it is by measuring the DOM Rect (or dimensions)
 * of the active tab, and return that as CSS style for
 * the indicator.
 */
export declare function useTabIndicator(): React.CSSProperties;
