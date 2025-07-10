'use client';
import { jsx } from 'react/jsx-runtime';
import { mapResponsive } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Indicator = forwardRef(
  function Indicator2(props, ref) {
    const {
      offsetX,
      offsetY,
      offset = "0",
      placement = "top-end",
      ...rest
    } = props;
    const styles = useMemo(
      () => ({
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        insetBlockStart: mapResponsive(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: offsetY ?? offset,
            middle: "50%",
            bottom: "auto"
          };
          return map[side];
        }),
        insetBlockEnd: mapResponsive(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: "auto",
            middle: "50%",
            bottom: offsetY ?? offset
          };
          return map[side];
        }),
        insetStart: mapResponsive(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: offsetX ?? offset,
            center: "50%",
            end: "auto"
          };
          return map[align];
        }),
        insetEnd: mapResponsive(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: "auto",
            center: "50%",
            end: offsetX ?? offset
          };
          return map[align];
        }),
        translate: mapResponsive(placement, (v) => {
          const [side, align] = v.split("-");
          const mapX = { start: "-50%", center: "-50%", end: "50%" };
          const mapY = { top: "-50%", middle: "-50%", bottom: "50%" };
          return `${mapX[align]} ${mapY[side]}`;
        })
      }),
      [offset, offsetX, offsetY, placement]
    );
    return /* @__PURE__ */ jsx(chakra.div, { ref, __css: styles, ...rest });
  }
);

export { Indicator };
