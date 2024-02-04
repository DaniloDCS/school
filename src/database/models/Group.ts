import { Conversation } from "./Chat";
import functions from "../../assets/functions";
const { IDgenerator } = functions();
import db from "../connection";

interface IGroup {
  id?: string;
  name: string;
  description?: string;
  avatar?: string;
  conversations?: string;
  url?: string;
  isPrivate?: boolean;
  userCreateId: string;
  createdAt?: string;
  updatedAt?: string;
}

class Group implements IGroup {
  id: string;
  name: string;
  description: string;
  avatar: string;
  conversations: string;
  url: string;
  isPrivate: boolean;
  userCreateId: string;
  createdAt: string;
  updatedAt: string;

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
  }: IGroup) {
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

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getAvatar(): string {
    return this.avatar;
  }

  public getConversations(): Conversation[] {
    return JSON.parse(this.conversations);
  }

  public getUrl(): string {
    return this.url;
  }

  public getIsPrivate(): boolean {
    return this.isPrivate;
  }

  public getUserCreateId(): string {
    return this.userCreateId;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getUpdatedAt(): string {
    return this.updatedAt;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setAvatar(avatar: string) {
    this.avatar = avatar;
  }

  public setConversations(conversations: Conversation[]): void {
    this.conversations = JSON.stringify(conversations);
  }

  public setConversation(conversation: Conversation): void {
    this.conversations = JSON.stringify([
      ...this.getConversations(),
      conversation,
    ]);
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public setIsPrivate(isPrivate: boolean) {
    this.isPrivate = isPrivate;
  }

  public setUserCreateId(userCreateId: string) {
    this.userCreateId = userCreateId;
  }

  public setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

  public async save() {
    await db.execute(`
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

  public async update() {
    await db.execute(`
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

  public async delete() {
    await db.execute(`
      DELETE FROM Groups WHERE id = "${this.id}"
    `);
  }
}

interface IGroupUser {
  id?: string;
  groupId: string;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
}

class GroupUser implements IGroupUser {
  id: string;
  groupId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;

  constructor({
    id = IDgenerator(),
    groupId,
    userId,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }: IGroupUser) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getGroupId(): string {
    return this.groupId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getUpdatedAt(): string {
    return this.updatedAt;
  }

  public setGroupId(groupId: string) {
    this.groupId = groupId;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

  public async save() {
    await db.execute(`
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

  public async delete() {
    await db.execute(`
      DELETE FROM GroupsUsers WHERE id = "${this.id}"
    `);
  }
}

interface IGroupAdmin {
  id?: string;
  groupId: string;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
}

class GroupAdmin implements IGroupAdmin {
  id: string;
  groupId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;

  constructor({
    id = IDgenerator(),
    groupId,
    userId,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }: IGroupAdmin) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getGroupId(): string {
    return this.groupId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getUpdatedAt(): string {
    return this.updatedAt;
  }

  public setGroupId(groupId: string) {
    this.groupId = groupId;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

  public async save() {
    await db.execute(`
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

  public async delete() {
    await db.execute(`
      DELETE FROM GroupsAdmins WHERE id = "${this.id}"
    `);
  }
}

interface IGroupUserBlocked {
  id?: string;
  groupId: string;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
}

class GroupUserBlocked implements IGroupUserBlocked {
  id: string;
  groupId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;

  constructor({
    id = IDgenerator(),
    groupId,
    userId,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }: IGroupUserBlocked) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getGroupId(): string {
    return this.groupId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getUpdatedAt(): string {
    return this.updatedAt;
  }

  public setGroupId(groupId: string) {
    this.groupId = groupId;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }

  public async save() {
    await db.execute(`
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

  public async delete() {
    await db.execute(`
      DELETE FROM GroupsUsersBlocked WHERE id = "${this.id}"
    `);
  }

  public async update() {
    await db.execute(`
      UPDATE GroupsUsersBlocked SET
        groupId = "${this.groupId}",
        userId = "${this.userId}",
        updatedAt = "${this.updatedAt}"
      WHERE id = "${this.id}"
    `);
  }
}

export { Group, GroupUser, GroupAdmin, GroupUserBlocked };