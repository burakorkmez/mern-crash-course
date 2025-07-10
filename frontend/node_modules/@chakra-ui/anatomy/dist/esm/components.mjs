import { anatomy } from './create-anatomy.mjs';

const accordionAnatomy = anatomy("accordion").parts(
  "root",
  "container",
  "button",
  "panel",
  "icon"
);
const alertAnatomy = anatomy("alert").parts(
  "title",
  "description",
  "container",
  "icon",
  "spinner"
);
const avatarAnatomy = anatomy("avatar").parts(
  "label",
  "badge",
  "container",
  "excessLabel",
  "group"
);
const breadcrumbAnatomy = anatomy("breadcrumb").parts(
  "link",
  "item",
  "container",
  "separator"
);
const buttonAnatomy = anatomy("button").parts();
const checkboxAnatomy = anatomy("checkbox").parts(
  "control",
  "icon",
  "container",
  "label"
);
const circularProgressAnatomy = anatomy("progress").parts(
  "track",
  "filledTrack",
  "label"
);
const drawerAnatomy = anatomy("drawer").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
);
const editableAnatomy = anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
const formAnatomy = anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
const formErrorAnatomy = anatomy("formError").parts("text", "icon");
const inputAnatomy = anatomy("input").parts(
  "addon",
  "field",
  "element",
  "group"
);
const listAnatomy = anatomy("list").parts("container", "item", "icon");
const menuAnatomy = anatomy("menu").parts(
  "button",
  "list",
  "item",
  "groupTitle",
  "icon",
  "command",
  "divider"
);
const modalAnatomy = anatomy("modal").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
);
const numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
const pinInputAnatomy = anatomy("pininput").parts("field");
const popoverAnatomy = anatomy("popover").parts(
  "content",
  "header",
  "body",
  "footer",
  "popper",
  "arrow",
  "closeButton"
);
const progressAnatomy = anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
const radioAnatomy = anatomy("radio").parts(
  "container",
  "control",
  "label"
);
const selectAnatomy = anatomy("select").parts("field", "icon");
const sliderAnatomy = anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
const statAnatomy = anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
const switchAnatomy = anatomy("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
);
const tableAnatomy = anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
const tabsAnatomy = anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
const tagAnatomy = anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
const cardAnatomy = anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
const stepperAnatomy = anatomy("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);

export { accordionAnatomy, alertAnatomy, avatarAnatomy, breadcrumbAnatomy, buttonAnatomy, cardAnatomy, checkboxAnatomy, circularProgressAnatomy, drawerAnatomy, editableAnatomy, formAnatomy, formErrorAnatomy, inputAnatomy, listAnatomy, menuAnatomy, modalAnatomy, numberInputAnatomy, pinInputAnatomy, popoverAnatomy, progressAnatomy, radioAnatomy, selectAnatomy, sliderAnatomy, statAnatomy, stepperAnatomy, switchAnatomy, tableAnatomy, tabsAnatomy, tagAnatomy };
