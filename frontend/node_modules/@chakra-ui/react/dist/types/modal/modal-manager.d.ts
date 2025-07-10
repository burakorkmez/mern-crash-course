import { RefObject } from "react";
/**
 * Proper state management for nested modals.
 * Simplified, but inspired by material-ui's ModalManager class.
 */
declare class ModalManager {
    modals: Set<HTMLElement>;
    constructor();
    add(modal: HTMLElement): number;
    remove(modal: HTMLElement): void;
    isTopModal(modal: HTMLElement | null): boolean;
}
export declare const modalManager: ModalManager;
export declare function useModalManager(ref: RefObject<HTMLElement | null>, isOpen?: boolean): number;
export {};
