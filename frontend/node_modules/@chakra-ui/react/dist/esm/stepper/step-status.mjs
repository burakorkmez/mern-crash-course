'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { runIfFn } from '@chakra-ui/utils';
import { useStepContext } from './step-context.mjs';

function StepStatus(props) {
  const { complete, incomplete, active } = props;
  const context = useStepContext();
  let render = null;
  switch (context.status) {
    case "complete":
      render = runIfFn(complete, context);
      break;
    case "incomplete":
      render = runIfFn(incomplete, context);
      break;
    case "active":
      render = runIfFn(active, context);
      break;
  }
  return render ? /* @__PURE__ */ jsx(Fragment, { children: render }) : null;
}

export { StepStatus };
