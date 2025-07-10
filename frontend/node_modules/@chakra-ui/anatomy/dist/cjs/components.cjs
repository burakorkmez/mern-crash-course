'use strict';

var createAnatomy = require('./create-anatomy.cjs');

const accordionAnatomy = createAnatomy.anatomy("accordion").parts(
  "root",
  "container",
  "button",
  "panel",
  "icon"
);
const alertAnatomy = createAnatomy.anatomy("alert").parts(
  "title",
  "description",
  "container",
  "icon",
  "spinner"
);
const avatarAnatomy = createAnatomy.anatomy("avatar").parts(
  "label",
  "badge",
  "container",
  "excessLabel",
  "group"
);
const breadcrumbAnatomy = createAnatomy.anatomy("breadcrumb").parts(
  "link",
  "item",
  "container",
  "separator"
);
const buttonAnatomy = createAnatomy.anatomy("button").parts();
const checkboxAnatomy = createAnatomy.anatomy("checkbox").parts(
  "control",
  "icon",
  "container",
  "label"
);
const circularProgressAnatomy = createAnatomy.anatomy("progress").parts(
  "track",
  "filledTrack",
  "label"
);
const drawerAnatomy = createAnatomy.anatomy("drawer").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
);
const editableAnatomy = createAnatomy.anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
const formAnatomy = createAnatomy.anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
const formErrorAnatomy = createAnatomy.anatomy("formError").parts("text", "icon");
const inputAnatomy = createAnatomy.anatomy("input").parts(
  "addon",
  "field",
  "element",
  "group"
);
const listAnatomy = createAnatomy.anatomy("list").parts("container", "item", "icon");
const menuAnatomy = createAnatomy.anatomy("menu").parts(
  "button",
  "list",
  "item",
  "groupTitle",
  "icon",
  "command",
  "divider"
);
const modalAnatomy = createAnatomy.anatomy("modal").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
);
const numberInputAnatomy = createAnatomy.anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
const pinInputAnatomy = createAnatomy.anatomy("pininput").parts("field");
const popoverAnatomy = createAnatomy.anatomy("popover").parts(
  "content",
  "header",
  "body",
  "footer",
  "popper",
  "arrow",
  "closeButton"
);
const progressAnatomy = createAnatomy.anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
const radioAnatomy = createAnatomy.anatomy("radio").parts(
  "container",
  "control",
  "label"
);
const selectAnatomy = createAnatomy.anatomy("select").parts("field", "icon");
const sliderAnatomy = createAnatomy.anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
const statAnatomy = createAnatomy.anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
const switchAnatomy = createAnatomy.anatomy("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
);
const tableAnatomy = createAnatomy.anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
const tabsAnatomy = createAnatomy.anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
const tagAnatomy = createAnatomy.anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
const cardAnatomy = createAnatomy.anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
const stepperAnatomy = createAnatomy.anatomy("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);

exports.accordionAnatomy = accordionAnatomy;
exports.alertAnatomy = alertAnatomy;
exports.avatarAnatomy = avatarAnatomy;
exports.breadcrumbAnatomy = breadcrumbAnatomy;
exports.buttonAnatomy = buttonAnatomy;
exports.cardAnatomy = cardAnatomy;
exports.checkboxAnatomy = checkboxAnatomy;
exports.circularProgressAnatomy = circularProgressAnatomy;
exports.drawerAnatomy = drawerAnatomy;
exports.editableAnatomy = editableAnatomy;
exports.formAnatomy = formAnatomy;
exports.formErrorAnatomy = formErrorAnatomy;
exports.inputAnatomy = inputAnatomy;
exports.listAnatomy = listAnatomy;
exports.menuAnatomy = menuAnatomy;
exports.modalAnatomy = modalAnatomy;
exports.numberInputAnatomy = numberInputAnatomy;
exports.pinInputAnatomy = pinInputAnatomy;
exports.popoverAnatomy = popoverAnatomy;
exports.progressAnatomy = progressAnatomy;
exports.radioAnatomy = radioAnatomy;
exports.selectAnatomy = selectAnatomy;
exports.sliderAnatomy = sliderAnatomy;
exports.statAnatomy = statAnatomy;
exports.stepperAnatomy = stepperAnatomy;
exports.switchAnatomy = switchAnatomy;
exports.tableAnatomy = tableAnatomy;
exports.tabsAnatomy = tabsAnatomy;
exports.tagAnatomy = tagAnatomy;
