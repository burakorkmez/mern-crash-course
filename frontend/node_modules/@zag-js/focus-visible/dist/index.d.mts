type Modality = "keyboard" | "pointer" | "virtual";
type FocusVisibleCallback = (isFocusVisible: boolean) => void;
declare function trackFocusVisible(fn: FocusVisibleCallback): () => void;
declare function trackInteractionModality(fn: (value: Modality | null) => void): () => void;
declare function setInteractionModality(value: Modality): void;
declare function getInteractionModality(): Modality | null;

export { getInteractionModality, setInteractionModality, trackFocusVisible, trackInteractionModality };
