"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveElement = void 0;
/**
 * returns active element from document or from nested shadowdoms
 */
var safe_1 = require("./safe");
/**
 * returns current active element. If the active element is a "container" itself(shadowRoot or iframe) returns active element inside it
 * @param [inDocument]
 */
var getActiveElement = function (inDocument) {
    if (inDocument === void 0) { inDocument = document; }
    if (!inDocument || !inDocument.activeElement) {
        return undefined;
    }
    var activeElement = inDocument.activeElement;
    return (activeElement.shadowRoot
        ? (0, exports.getActiveElement)(activeElement.shadowRoot)
        : activeElement instanceof HTMLIFrameElement && (0, safe_1.safeProbe)(function () { return activeElement.contentWindow.document; })
            ? (0, exports.getActiveElement)(activeElement.contentWindow.document)
            : activeElement);
};
exports.getActiveElement = getActiveElement;
