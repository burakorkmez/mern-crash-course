'use strict';

var avatar = require('./avatar.cjs');
var avatarBadge = require('./avatar-badge.cjs');
var avatarContext = require('./avatar-context.cjs');
var avatarGroup = require('./avatar-group.cjs');
var genericAvatarIcon = require('./generic-avatar-icon.cjs');



exports.Avatar = avatar.Avatar;
exports.AvatarBadge = avatarBadge.AvatarBadge;
exports.useAvatarStyles = avatarContext.useAvatarStyles;
exports.AvatarGroup = avatarGroup.AvatarGroup;
exports.GenericAvatarIcon = genericAvatarIcon.GenericAvatarIcon;
