'use strict';

var index = require('../utils/index.cjs');

const border = {
  border: index.t.borders("border"),
  borderWidth: index.t.borderWidths("borderWidth"),
  borderStyle: index.t.borderStyles("borderStyle"),
  borderColor: index.t.colors("borderColor"),
  borderRadius: index.t.radii("borderRadius"),
  borderTop: index.t.borders("borderTop"),
  borderBlockStart: index.t.borders("borderBlockStart"),
  borderTopLeftRadius: index.t.radii("borderTopLeftRadius"),
  borderStartStartRadius: index.t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: index.t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: index.t.radii("borderTopRightRadius"),
  borderStartEndRadius: index.t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: index.t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: index.t.borders("borderRight"),
  borderInlineEnd: index.t.borders("borderInlineEnd"),
  borderBottom: index.t.borders("borderBottom"),
  borderBlockEnd: index.t.borders("borderBlockEnd"),
  borderBottomLeftRadius: index.t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: index.t.radii("borderBottomRightRadius"),
  borderLeft: index.t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: index.t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: index.t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: index.t.borders(["borderLeft", "borderRight"]),
  borderInline: index.t.borders("borderInline"),
  borderY: index.t.borders(["borderTop", "borderBottom"]),
  borderBlock: index.t.borders("borderBlock"),
  borderTopWidth: index.t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: index.t.borderWidths("borderBlockStartWidth"),
  borderTopColor: index.t.colors("borderTopColor"),
  borderBlockStartColor: index.t.colors("borderBlockStartColor"),
  borderTopStyle: index.t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: index.t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: index.t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: index.t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: index.t.colors("borderBottomColor"),
  borderBlockEndColor: index.t.colors("borderBlockEndColor"),
  borderBottomStyle: index.t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: index.t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: index.t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: index.t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: index.t.colors("borderLeftColor"),
  borderInlineStartColor: index.t.colors("borderInlineStartColor"),
  borderLeftStyle: index.t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: index.t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: index.t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: index.t.borderWidths("borderInlineEndWidth"),
  borderRightColor: index.t.colors("borderRightColor"),
  borderInlineEndColor: index.t.colors("borderInlineEndColor"),
  borderRightStyle: index.t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: index.t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: index.t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: index.t.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: index.t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: index.t.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});

exports.border = border;
