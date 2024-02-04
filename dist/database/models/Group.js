"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _functions = require('../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../connection'); var _connection2 = _interopRequireDefault(_connection);














class Group  {
  
  
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    name,
    description = "É um grupo de estudos!",
    avatar = "/public/images/group.png",
    conversations = "[]",
    url = IDgenerator(),
    isPrivate = false,
    userCreateId,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.avatar = avatar;
    this.conversations = conversations;
    this.url = url;
    this.isPrivate = isPrivate;
    this.userCreateId = userCreateId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getName() {
    return this.name;
  }

   getDescription() {
    return this.description;
  }

   getAvatar() {
    return this.avatar;
  }

   getConversations() {
    return JSON.parse(this.conversations);
  }

   getUrl() {
    return this.url;
  }

   getIsPrivate() {
    return this.isPrivate;
  }

   getUserCreateId() {
    return this.userCreateId;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setName(name) {
    this.name = name;
  }

   setDescription(description) {
    this.description = description;
  }

   setAvatar(avatar) {
    this.avatar = avatar;
  }

   setConversations(conversations) {
    this.conversations = JSON.stringify(conversations);
  }

   setConversation(conversation) {
    this.conversations = JSON.stringify([
      ...this.getConversations(),
      conversation,
    ]);
  }

   setUrl(url) {
    this.url = url;
  }

   setIsPrivate(isPrivate) {
    this.isPrivate = isPrivate;
  }

   setUserCreateId(userCreateId) {
    this.userCreateId = userCreateId;
  }

   setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

   async save() {
    await _connection2.default.execute(`
      INSERT INTO Groups (
        id,
        name,
        description,
        avatar,
        conversations,
        url,
        isPrivate,
        userCreateId,
        createdAt,
        updatedAt
      ) VALUES (
        "${this.id}",
        "${this.name}",
        "${this.description}",
        "${this.avatar}",
        "${this.conversations}",
        "${this.url}",
        "${this.isPrivate}",
        "${this.userCreateId}",
        "${this.createdAt}",
        "${this.updatedAt}"
      )
    `);
  }

   async update() {
    await _connection2.default.execute(`
      UPDATE Groups SET
        name = "${this.name}",
        description = "${this.description}",
        avatar = "${this.avatar}",
        conversations = "${this.conversations}",
        url = "${this.url}",
        isPrivate = "${this.isPrivate}",
        userCreateId = "${this.userCreateId}",
        updatedAt = "${this.updatedAt}"
      WHERE id = "${this.id}"
    `);
  }

   async delete() {
    await _connection2.default.execute(`
      DELETE FROM Groups WHERE id = "${this.id}"
    `);
  }
}









class GroupUser  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    groupId,
    userId,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getGroupId() {
    return this.groupId;
  }

   getUserId() {
    return this.userId;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setGroupId(groupId) {
    this.groupId = groupId;
  }

   setUserId(userId) {
    this.userId = userId;
  }

   setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

   async save() {
    await _connection2.default.execute(`
      INSERT INTO GroupsUsers (
        id,
        groupId,
        userId,
        createdAt,
        updatedAt
      ) VALUES (
        "${this.id}",
        "${this.groupId}",
        "${this.userId}",
        "${this.createdAt}",
        "${this.updatedAt}"
      )
    `);
  }

   async delete() {
    await _connection2.default.execute(`
      DELETE FROM GroupsUsers WHERE id = "${this.id}"
    `);
  }
}









class GroupAdmin  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    groupId,
    userId,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getGroupId() {
    return this.groupId;
  }

   getUserId() {
    return this.userId;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setGroupId(groupId) {
    this.groupId = groupId;
  }

   setUserId(userId) {
    this.userId = userId;
  }

   setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

   async save() {
    await _connection2.default.execute(`
      INSERT INTO GroupsAdmins (
        id,
        groupId,
        userId,
        createdAt,
        updatedAt
      ) VALUES (
        "${this.id}",
        "${this.groupId}",
        "${this.userId}",
        "${this.createdAt}",
        "${this.updatedAt}"
      )
    `);
  }

   async delete() {
    await _connection2.default.execute(`
      DELETE FROM GroupsAdmins WHERE id = "${this.id}"
    `);
  }
}









class GroupUserBlocked  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    groupId,
    userId,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getGroupId() {
    return this.groupId;
  }

   getUserId() {
    return this.userId;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setGroupId(groupId) {
    this.groupId = groupId;
  }

   setUserId(userId) {
    this.userId = userId;
  }

   setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

   async save() {
    await _connection2.default.execute(`
      INSERT INTO GroupsUsersBlocked (
        id,
        groupId,
        userId,
        createdAt,
        updatedAt
      ) VALUES (
        "${this.id}",
        "${this.groupId}",
        "${this.userId}",
        "${this.createdAt}",
        "${this.updatedAt}"
      )
    `);
  }

   async delete() {
    await _connection2.default.execute(`
      DELETE FROM GroupsUsersBlocked WHERE id = "${this.id}"
    `);
  }

   async update() {
    await _connection2.default.execute(`
      UPDATE GroupsUsersBlocked SET
        groupId = "${this.groupId}",
        userId = "${this.userId}",
        updatedAt = "${this.updatedAt}"
      WHERE id = "${this.id}"
    `);
  }
}

exports.Group = Group; exports.GroupUser = GroupUser; exports.GroupAdmin = GroupAdmin; exports.GroupUserBlocked = GroupUserBlocked;