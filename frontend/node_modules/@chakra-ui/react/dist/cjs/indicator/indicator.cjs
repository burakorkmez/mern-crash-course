'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var React = require('react');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Indicator = forwardRef.forwardRef(
  function Indicator2(props, ref) {
    const {
      offsetX,
      offsetY,
      offset = "0",
      placement = "top-end",
      ...rest
    } = props;
    const styles = React.useMemo(
      () => ({
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        insetBlockStart: utils.mapResponsive(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: offsetY ?? offset,
            middle: "50%",
            bottom: "auto"
          };
          return map[side];
        }),
        insetBlockEnd: utils.mapResponsive(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: "auto",
            middle: "50%",
            bottom: offsetY ?? offset
          };
          return map[side];
        }),
        insetStart: utils.mapResponsive(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: offsetX ?? offset,
            center: "50%",
            end: "auto"
          };
          return map[align];
        }),
        insetEnd: utils.mapResponsive(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: "auto",
            center: "50%",
            end: offsetX ?? offset
          };
          return map[align];
        }),
        translate: utils.mapResponsive(placement, (v) => {
          const [side, align] = v.split("-");
          const mapX = { start: "-50%", center: "-50%", end: "50%" };
          const mapY = { top: "-50%", middle: "-50%", bottom: "50%" };
          return `${mapX[align]} ${mapY[side]}`;
        })
      }),
      [offset, offsetX, offsetY, placement]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, __css: styles, ...rest });
  }
);

exports.Indicator = Indicator;
