type Booleanish = boolean | "true" | "false";
declare const dataAttr: (guard: boolean | undefined) => Booleanish;
declare const ariaAttr: (guard: boolean | undefined) => "true" | undefined;

type Target$1 = HTMLElement | EventTarget | null | undefined;
declare function contains(parent: Target$1, child: Target$1): boolean;
declare const isSelfEvent: (event: Pick<UIEvent, "currentTarget" | "target">) => boolean;

type Ctx = {
    getRootNode?: () => Document | ShadowRoot | Node;
};
declare function createScope<T>(methods: T): {
    getRootNode: (ctx: Ctx) => Document | ShadowRoot;
    getDoc: (ctx: Ctx) => Document;
    getWin: (ctx: Ctx) => Window & typeof globalThis;
    getActiveElement: (ctx: Ctx) => HTMLElement | null;
    isActiveElement: (ctx: Ctx, elem: HTMLElement | null) => boolean;
    focus(ctx: Ctx, elem: HTMLElement | null | undefined): void;
    getById: <T_1 extends HTMLElement = HTMLElement>(ctx: Ctx, id: string) => T_1 | null;
    setValue: <T_2 extends {
        value: string;
    }>(elem: T_2 | null, value: string | number | null | undefined) => void;
} & T;

declare function getDocument(el: Element | Node | Document | null): Document;
declare function getWindow(el: Node | ShadowRoot | Document | undefined): Window & typeof globalThis;

declare function getActiveElement(el: HTMLElement): HTMLElement | null;

declare function getBeforeInputValue(event: Pick<InputEvent, "currentTarget">): string;

declare function itemById<T extends HTMLElement>(v: T[], id: string): T | undefined;
declare function indexOfId<T extends HTMLElement>(v: T[], id: string): number;
declare function nextById<T extends HTMLElement>(v: T[], id: string, loop?: boolean): T;
declare function prevById<T extends HTMLElement>(v: T[], id: string, loop?: boolean): T | null;

declare function getByText<T extends HTMLElement>(v: T[], text: string, currentId?: string | null): T | undefined;

interface TypeaheadState {
    keysSoFar: string;
    timer: number;
}
interface TypeaheadOptions {
    state: TypeaheadState;
    activeId: string | null;
    key: string;
    timeout?: number;
}
declare function getByTypeaheadImpl<T extends HTMLElement>(_items: T[], options: TypeaheadOptions): T | undefined;
declare const getByTypeahead: typeof getByTypeaheadImpl & {
    defaultOptions: {
        keysSoFar: string;
        timer: number;
    };
    isValidEvent: typeof isValidTypeaheadEvent;
};
declare function isValidTypeaheadEvent(event: Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey">): boolean;

declare function getComputedStyle(el: HTMLElement): any;

declare function getEventTarget<T extends EventTarget>(event: Event): T | null;

declare function getParent(el: HTMLElement): HTMLElement;
declare function getScrollParent(el: HTMLElement): HTMLElement;
type Target = Array<VisualViewport | Window | HTMLElement | null>;
declare function getScrollParents(el: HTMLElement, list?: Target): Target;

declare function isEditableElement(el: HTMLElement | EventTarget | null): boolean;

declare const isHTMLElement: (v: any) => v is HTMLElement;

declare const isDom: () => boolean;
declare function getPlatform(): any;
declare const isTouchDevice: () => boolean;
declare const isMac: () => boolean;
declare const isIPhone: () => boolean;
declare const isSafari: () => boolean;
declare const isFirefox: () => boolean;
declare const isApple: () => boolean;
declare const isIos: () => boolean;

type Root = Document | Element | null | undefined;
declare function queryAll<T extends HTMLElement = HTMLElement>(root: Root, selector: string): T[];
declare function query<T extends HTMLElement = HTMLElement>(root: Root, selector: string): T | null | undefined;

declare function nextTick(fn: VoidFunction): () => void;
declare function raf(fn: VoidFunction): () => void;

declare const MAX_Z_INDEX = 2147483647;

export { MAX_Z_INDEX, type TypeaheadOptions, type TypeaheadState, ariaAttr, contains, createScope, dataAttr, getActiveElement, getBeforeInputValue, getByText, getByTypeahead, getComputedStyle, getDocument, getEventTarget, getParent, getPlatform, getScrollParent, getScrollParents, getWindow, indexOfId, isApple, isDom, isEditableElement, isFirefox, isHTMLElement, isIPhone, isIos, isMac, isSafari, isSelfEvent, isTouchDevice, itemById, nextById, nextTick, prevById, query, queryAll, raf };
