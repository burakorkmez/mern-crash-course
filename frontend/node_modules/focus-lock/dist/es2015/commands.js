export var focusOn = function (target, focusOptions) {
    if (!target) {
        // not clear how, but is possible https://github.com/theKashey/focus-lock/issues/53
        return;
    }
    if ('focus' in target) {
        target.focus(focusOptions);
    }
    if ('contentWindow' in target && target.contentWindow) {
        target.contentWindow.focus();
    }
};
