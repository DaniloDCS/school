"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../connection'); var _connection2 = _interopRequireDefault(_connection);












class Chat  {
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    conversations = [],
    userToId = "",
    userFromId = "",
    userToBlock = false,
    userFromBlock = false,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Chat.prototype.__init.call(this);Chat.prototype.__init2.call(this);Chat.prototype.__init3.call(this);Chat.prototype.__init4.call(this);Chat.prototype.__init5.call(this);Chat.prototype.__init6.call(this);Chat.prototype.__init7.call(this);
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

   __init() {this.getId = () => this.id}

   getConversations() {
    if (String(this.conversations) == "[]") this.conversations = [];
    else if (typeof this.conversations == "string")
      this.conversations = JSON.parse(this.conversations);
    return this.conversations;
  }

   __init2() {this.getUserToId = () => this.userToId}

   __init3() {this.getUserFromId = () => this.userFromId}

   __init4() {this.getUserToBlock = () => this.userToBlock}

   __init5() {this.getUserFromBlock = () => this.userFromBlock}

   __init6() {this.getCreatedAt = () => this.createdAt}

   __init7() {this.getUpdatedAt = () => this.updatedAt}

   setId(id) {
    this.id = id;
  }

   setConversations(conversations) {
    this.conversations = conversations;
  }

   setConversation(conversation) {
    this.conversations = [...this.getConversations(), conversation];
  }

   setReaction(id, rect) {
    this.conversations = this.conversations.map(
      (conversation) => {
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

   removeReaction(id) {
    this.conversations = this.conversations.filter(
      (conversation) => {
        let cvs = new Conversation(conversation);
        if (cvs.getId() === id) return false;
        return true;
      }
    );
  }

   setUserToId(userToId) {
    this.userToId = userToId;
  }

   setUserFromId(userFromId) {
    this.userFromId = userFromId;
  }

   setUserToBlock(userToBlock) {
    this.userToBlock = userToBlock;
  }

   setUserFromBlock(userFromBlock) {
    this.userFromBlock = userFromBlock;
  }

   setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

   async save() {
    await _connection2.default.execute(
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

   async update() {
    await _connection2.default.execute(
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

   async delete() {
    await _connection2.default.execute(`DELETE FROM Chats WHERE id = '${this.id}'`);
  }
}










class Conversation  {
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    message = "",
    from = "",
    toRead = false,
    reactions = [],
    createdAt = new Date(),
  }) {;Conversation.prototype.__init8.call(this);Conversation.prototype.__init9.call(this);Conversation.prototype.__init10.call(this);Conversation.prototype.__init11.call(this);Conversation.prototype.__init12.call(this);Conversation.prototype.__init13.call(this);
    this.id = id;
    this.message = message;
    this.from = from;
    this.toRead = toRead;
    this.reactions = reactions;
    this.createdAt = createdAt;
  }

   __init8() {this.getId = () => this.id}

   __init9() {this.getMessage = () => this.message}

   __init10() {this.getFrom = () => this.from}

   __init11() {this.getToRead = () => this.toRead}

   __init12() {this.getReactions = () => this.reactions}

   __init13() {this.getCreatedAt = () => this.createdAt}

   setId(id) {
    this.id = id;
  }

   setMessage(message) {
    this.message = message;
  }

   setFrom(from) {
    this.from = from;
  }

   setToRead(toRead) {
    this.toRead = toRead;
  }

   setReactions(reactions) {
    this.reactions = reactions;
  }

   setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }
}








class React  {
  
  
  
  

  constructor({
    id = IDgenerator(),
    emoji = "",
    from = "",
    createdAt = new Date(),
  }) {;React.prototype.__init14.call(this);React.prototype.__init15.call(this);React.prototype.__init16.call(this);React.prototype.__init17.call(this);
    this.id = id;
    this.emoji = emoji;
    this.from = from;
    this.createdAt = createdAt;
  }

   __init14() {this.getId = () => this.id}

   __init15() {this.getEmoji = () => this.emoji}

   __init16() {this.getFrom = () => this.from}

   __init17() {this.getCreatedAt = () => this.createdAt}

   setId(id) {
    this.id = id;
  }

   setEmoji(emoji) {
    this.emoji = emoji;
  }

   setFrom(from) {
    this.from = from;
  }

   setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }
}

exports.Chat = Chat; exports.Conversation = Conversation; exports.React = React;
