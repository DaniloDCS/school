import functions from "../../assets/functions";
const { IDgenerator } = functions();
import db from "../connection";

interface IChat {
  id?: string;
  conversations?: Conversation[];
  userToId?: string;
  userFromId?: string;
  userToBlock?: boolean;
  userFromBlock?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

class Chat implements IChat {
  id: string;
  conversations: Conversation[];
  userToId: string;
  userFromId: string;
  userToBlock: boolean;
  userFromBlock: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    conversations = [],
    userToId = "",
    userFromId = "",
    userToBlock = false,
    userFromBlock = false,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IChat) {
    this.id = id;
    this.conversations =
      typeof conversations == "string"
        ? JSON.parse(conversations)
        : conversations;
    this.userToId = userToId;
    this.userFromId = userFromId;
    this.userToBlock = userToBlock;
    this.userFromBlock = userFromBlock;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;

  public getConversations(): Conversation[] {
    if (String(this.conversations) == "[]") this.conversations = [];
    else if (typeof this.conversations == "string")
      this.conversations = JSON.parse(this.conversations);
    return this.conversations;
  }

  public getUserToId = (): string => this.userToId;

  public getUserFromId = (): string => this.userFromId;

  public getUserToBlock = (): boolean => this.userToBlock;

  public getUserFromBlock = (): boolean => this.userFromBlock;

  public getCreatedAt = (): Date => this.createdAt;

  public getUpdatedAt = (): Date => this.updatedAt;

  public setId(id: string): void {
    this.id = id;
  }

  public setConversations(conversations: Conversation[]): void {
    this.conversations = conversations;
  }

  public setConversation(conversation: Conversation): void {
    this.conversations = [...this.getConversations(), conversation];
  }

  public setReaction(id: string, rect: React): void {
    this.conversations = this.conversations.map(
      (conversation: Conversation) => {
        let cvs = new Conversation(conversation);
        if (cvs.getId() === id) {
          cvs.setReactions([...cvs.getReactions(), rect]);
          return cvs;
        } else {
          return conversation;
        }
      }
    );
  }

  public removeReaction(id: string): void {
    this.conversations = this.conversations.filter(
      (conversation: Conversation) => {
        let cvs = new Conversation(conversation);
        if (cvs.getId() === id) return false;
        return true;
      }
    );
  }

  public setUserToId(userToId: string): void {
    this.userToId = userToId;
  }

  public setUserFromId(userFromId: string): void {
    this.userFromId = userFromId;
  }

  public setUserToBlock(userToBlock: boolean): void {
    this.userToBlock = userToBlock;
  }

  public setUserFromBlock(userFromBlock: boolean): void {
    this.userFromBlock = userFromBlock;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public async save() {
    await db.execute(
      `INSERT INTO Chats (
      id,
      conversations,
      userToId,
      userFromId,
      userToBlock,
      userFromBlock,
      createdAt,
      updatedAt
    ) VALUES (
      "${this.id}",
      '${JSON.stringify(this.conversations)}',
      "${this.userToId}",
      "${this.userFromId}",
      ${this.userToBlock},
      ${this.userFromBlock},
      "${this.createdAt}",
      "${this.updatedAt}"
    )`
    );
  }

  public async update() {
    await db.execute(
      `UPDATE Chats SET
      conversations = '${JSON.stringify(this.conversations)}',
      userToId = '${this.userToId}',
      userFromId = '${this.userFromId}',
      userToBlock = ${this.userToBlock},
      userFromBlock = ${this.userFromBlock},
      updatedAt = '${this.updatedAt}'
      WHERE id = '${this.id}'`
    );
  }

  public async delete() {
    await db.execute(`DELETE FROM Chats WHERE id = '${this.id}'`);
  }
}

interface IConversation {
  id?: string;
  message?: string;
  from?: string;
  toRead?: boolean;
  reactions?: React[];
  createdAt?: Date;
}

class Conversation implements IConversation {
  id: string;
  message: string;
  from: string;
  toRead: boolean;
  reactions: React[];
  createdAt: Date;

  constructor({
    id = IDgenerator(),
    message = "",
    from = "",
    toRead = false,
    reactions = [],
    createdAt = new Date(),
  }: IConversation) {
    this.id = id;
    this.message = message;
    this.from = from;
    this.toRead = toRead;
    this.reactions = reactions;
    this.createdAt = createdAt;
  }

  public getId = (): string => this.id;

  public getMessage = (): string => this.message;

  public getFrom = (): string => this.from;

  public getToRead = (): boolean => this.toRead;

  public getReactions = (): React[] => this.reactions;

  public getCreatedAt = (): Date => this.createdAt;

  public setId(id: string): void {
    this.id = id;
  }

  public setMessage(message: string): void {
    this.message = message;
  }

  public setFrom(from: string): void {
    this.from = from;
  }

  public setToRead(toRead: boolean): void {
    this.toRead = toRead;
  }

  public setReactions(reactions: React[]): void {
    this.reactions = reactions;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}

interface IReact {
  id?: string;
  emoji?: string;
  from?: string;
  createdAt?: Date;
}

class React implements IReact {
  id: string;
  emoji: string;
  from: string;
  createdAt: Date;

  constructor({
    id = IDgenerator(),
    emoji = "",
    from = "",
    createdAt = new Date(),
  }: IReact) {
    this.id = id;
    this.emoji = emoji;
    this.from = from;
    this.createdAt = createdAt;
  }

  public getId = (): string => this.id;

  public getEmoji = (): string => this.emoji;

  public getFrom = (): string => this.from;

  public getCreatedAt = (): Date => this.createdAt;

  public setId(id: string): void {
    this.id = id;
  }

  public setEmoji(emoji: string): void {
    this.emoji = emoji;
  }

  public setFrom(from: string): void {
    this.from = from;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}

export { Chat, Conversation, React };
