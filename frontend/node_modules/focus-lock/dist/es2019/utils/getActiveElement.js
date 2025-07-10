/**
 * returns active element from document or from nested shadowdoms
 */
import { safeProbe } from './safe';
/**
 * returns current active element. If the active element is a "container" itself(shadowRoot or iframe) returns active element inside it
 * @param [inDocument]
 */
export const getActiveElement = (inDocument = document) => {
    if (!inDocument || !inDocument.activeElement) {
        return undefined;
    }
    const { activeElement } = inDocument;
    return (activeElement.shadowRoot
        ? getActiveElement(activeElement.shadowRoot)
        : activeElement instanceof HTMLIFrameElement && safeProbe(() => activeElement.contentWindow.document)
            ? getActiveElement(activeElement.contentWindow.document)
            : activeElement);
};
