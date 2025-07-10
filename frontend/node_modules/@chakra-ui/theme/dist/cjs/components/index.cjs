'use strict';

var accordion = require('./accordion.cjs');
var alert = require('./alert.cjs');
var avatar = require('./avatar.cjs');
var badge = require('./badge.cjs');
var breadcrumb = require('./breadcrumb.cjs');
var button = require('./button.cjs');
var card = require('./card.cjs');
var checkbox = require('./checkbox.cjs');
var closeButton = require('./close-button.cjs');
var code = require('./code.cjs');
var container = require('./container.cjs');
var divider = require('./divider.cjs');
var drawer = require('./drawer.cjs');
var editable = require('./editable.cjs');
var formControl = require('./form-control.cjs');
var formError = require('./form-error.cjs');
var formLabel = require('./form-label.cjs');
var heading = require('./heading.cjs');
var input = require('./input.cjs');
var kbd = require('./kbd.cjs');
var link = require('./link.cjs');
var list = require('./list.cjs');
var menu = require('./menu.cjs');
var modal = require('./modal.cjs');
var numberInput = require('./number-input.cjs');
var pinInput = require('./pin-input.cjs');
var popover = require('./popover.cjs');
var progress = require('./progress.cjs');
var radio = require('./radio.cjs');
var select = require('./select.cjs');
var skeleton = require('./skeleton.cjs');
var skipLink = require('./skip-link.cjs');
var slider = require('./slider.cjs');
var spinner = require('./spinner.cjs');
var stat = require('./stat.cjs');
var stepper = require('./stepper.cjs');
var _switch = require('./switch.cjs');
var table = require('./table.cjs');
var tabs = require('./tabs.cjs');
var tag = require('./tag.cjs');
var textarea = require('./textarea.cjs');
var tooltip = require('./tooltip.cjs');

const components = {
  Accordion: accordion.accordionTheme,
  Alert: alert.alertTheme,
  Avatar: avatar.avatarTheme,
  Badge: badge.badgeTheme,
  Breadcrumb: breadcrumb.breadcrumbTheme,
  Button: button.buttonTheme,
  Checkbox: checkbox.checkboxTheme,
  CloseButton: closeButton.closeButtonTheme,
  Code: code.codeTheme,
  Container: container.containerTheme,
  Divider: divider.dividerTheme,
  Drawer: drawer.drawerTheme,
  Editable: editable.editableTheme,
  Form: formControl.formTheme,
  FormError: formError.formErrorTheme,
  FormLabel: formLabel.formLabelTheme,
  Heading: heading.headingTheme,
  Input: input.inputTheme,
  Kbd: kbd.kbdTheme,
  Link: link.linkTheme,
  List: list.listTheme,
  Menu: menu.menuTheme,
  Modal: modal.modalTheme,
  NumberInput: numberInput.numberInputTheme,
  PinInput: pinInput.pinInputTheme,
  Popover: popover.popoverTheme,
  Progress: progress.progressTheme,
  Radio: radio.radioTheme,
  Select: select.selectTheme,
  Skeleton: skeleton.skeletonTheme,
  SkipLink: skipLink.skipLinkTheme,
  Slider: slider.sliderTheme,
  Spinner: spinner.spinnerTheme,
  Stat: stat.statTheme,
  Switch: _switch.switchTheme,
  Table: table.tableTheme,
  Tabs: tabs.tabsTheme,
  Tag: tag.tagTheme,
  Textarea: textarea.textareaTheme,
  Tooltip: tooltip.tooltipTheme,
  Card: card.cardTheme,
  Stepper: stepper.stepperTheme
};

exports.Accordion = accordion.accordionTheme;
exports.Alert = alert.alertTheme;
exports.Avatar = avatar.avatarTheme;
exports.Badge = badge.badgeTheme;
exports.Breadcrumb = breadcrumb.breadcrumbTheme;
exports.Button = button.buttonTheme;
exports.Checkbox = checkbox.checkboxTheme;
exports.CloseButton = closeButton.closeButtonTheme;
exports.Code = code.codeTheme;
exports.Container = container.containerTheme;
exports.Divider = divider.dividerTheme;
exports.Drawer = drawer.drawerTheme;
exports.Editable = editable.editableTheme;
exports.Form = formControl.formTheme;
exports.FormError = formError.formErrorTheme;
exports.FormLabel = formLabel.formLabelTheme;
exports.Heading = heading.headingTheme;
exports.Input = input.inputTheme;
exports.Kbd = kbd.kbdTheme;
exports.Link = link.linkTheme;
exports.List = list.listTheme;
exports.Menu = menu.menuTheme;
exports.Modal = modal.modalTheme;
exports.NumberInput = numberInput.numberInputTheme;
exports.PinInput = pinInput.pinInputTheme;
exports.Popover = popover.popoverTheme;
exports.Progress = progress.progressTheme;
exports.Radio = radio.radioTheme;
exports.Select = select.selectTheme;
exports.Skeleton = skeleton.skeletonTheme;
exports.SkipLink = skipLink.skipLinkTheme;
exports.Slider = slider.sliderTheme;
exports.Spinner = spinner.spinnerTheme;
exports.Stat = stat.statTheme;
exports.Stepper = stepper.stepperTheme;
exports.Switch = _switch.switchTheme;
exports.Table = table.tableTheme;
exports.Tabs = tabs.tabsTheme;
exports.Tag = tag.tagTheme;
exports.Textarea = textarea.textareaTheme;
exports.Tooltip = tooltip.tooltipTheme;
exports.components = components;
