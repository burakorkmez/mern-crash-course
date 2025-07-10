'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var react = require('react');
var useEventListener = require('./use-event-listener.cjs');

function useAnimationState(props) {
  const { isOpen, ref } = props;
  const [mounted, setMounted] = react.useState(isOpen);
  const [once, setOnce] = react.useState(false);
  react.useEffect(() => {
    if (!once) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once, mounted]);
  useEventListener.useEventListener(
    () => ref.current,
    "animationend",
    () => {
      setMounted(isOpen);
    }
  );
  const hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete() {
      const win = utils.getOwnerWindow(ref.current);
      const evt = new win.CustomEvent("animationend", { bubbles: true });
      ref.current?.dispatchEvent(evt);
    }
  };
}

exports.useAnimationState = useAnimationState;
