"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _express = require('express');
var _User = require('../database/models/User'); var _User2 = _interopRequireDefault(_User);
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);
var _multer = require('../assets/multer'); var _multer2 = _interopRequireDefault(_multer);
var _pdf = require('../assets/pdf'); var _pdf2 = _interopRequireDefault(_pdf);


var _Email = require('../database/models/Email');
var _Document = require('../database/models/Document');
var _Form = require('../database/models/Form');
var _Chat = require('../database/models/Chat');
var _Group = require('../database/models/Group');
var _Schedule = require('../database/models/Schedule');

class AppsRoutes {
  

  constructor() {
    this.router = _express.Router.call(void 0, );
    this.routes();
    this.Emails();
    this.Documents();
    this.Forms();
    this.Chats();
    this.Groups();
    this.Posts();
    this.Calls();
    this.PDFs();
    this.Calendar();
  }

   routes() {
    this.router.get("/", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/apps", {
        title: "Apps",
        info,
        user,
      });
    });
  }

   Emails() {
    this.router.get("/emails", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      
      const listOfSentEmails = await _connection2.default.execute(`
        SELECT 
          UsersEmails.id, UsersEmails.emailId, UsersEmails.userId, 
          Emails.subject, Emails.content, Emails.fromId, Emails.toId, Emails.createdAt, Emails.toRead,
          Users.name, Users.username, Users.email, Users.avatar 
        FROM 
          UsersEmails 
        INNER JOIN Emails ON UsersEmails.emailId = Emails.id 
        INNER JOIN Users ON Emails.toId = Users.id 
        WHERE Emails.fromId = '${user.getId()}' AND UsersEmails.userId = '${user.getId()}'
        ORDER BY UsersEmails.createdAt DESC`);

      const listOfReceivedEmails = await _connection2.default.execute(`
        SELECT 
          UsersEmails.id, UsersEmails.emailId, UsersEmails.userId, 
          Emails.subject, Emails.content, Emails.fromId, Emails.toId, Emails.createdAt, Emails.toRead,
          Users.name, Users.username, Users.email, Users.avatar
        FROM 
          UsersEmails 
        INNER JOIN Emails ON UsersEmails.emailId = Emails.id 
        INNER JOIN Users ON Emails.fromId = Users.id 
        WHERE Emails.toId = '${user.getId()}' AND UsersEmails.userId = '${user.getId()}'
        ORDER BY UsersEmails.createdAt DESC`);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/emails/emails", {
        title: "Emails",
        info,
        user,
        listOfSentEmails,
        listOfReceivedEmails,
      });
    });

    this.router.get("/emails/v/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const email = await _connection2.default.execute(`
        SELECT 
          UsersEmails.id, UsersEmails.emailId, UsersEmails.userId, 
          Emails.subject, Emails.content, Emails.createdAt, 
          Users.name, Users.username, Users.email, Users.avatar
        FROM 
          Emails
        INNER JOIN Users ON Emails.fromId = Users.id OR Emails.toId = Users.id
        INNER JOIN UsersEmails ON UsersEmails.emailId = Emails.id
        WHERE Emails.id = '${id}'
      `);

      if (!email[0]) {
        req.flash("info", "Email não econtrado! Type: warning");
        return res.redirect("/apps/emails");
      }

      const query = await _connection2.default.execute(`
        SELECT toRead FROM Emails
        WHERE id = '${id}'
        AND toId = '${user.getId()}'
      `);

      if (query[0]) {
        await _connection2.default.execute(`
          UPDATE Emails
          SET toRead = 1
          WHERE id = '${id}'
          AND toId = '${user.getId()}'
        `);
      }

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/emails/email", {
        title: "Emails",
        info,
        user,
        email: email[0],
      });
    });

    this.router.post("/emails/new", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { to, subject, content } = req.body;

      const query = await _connection2.default.execute(`
        SELECT * FROM Users
        WHERE id = '${to}'
      `);

      if (!query[0]) {
        const alert = new (0, _Email.Email)({
          fromId: user.getId(),
          toId: user.getId(),
          subject: "Falha ao enviar email",
          content: `O email <b>${to}</b> não existe! <br>
            -- Cópia do email <br>
            <b>Assunto:</b> ${subject} <br>
            <b>Conteúdo:</b> ${content}
          `,
        });
        alert.save();

        req.flash("info", "Email não econtrado! Type: warning");
        return res.redirect("/apps/emails");
      }

      const toUser = new (0, _User2.default)(query[0]);

      const email = new (0, _Email.Email)({
        fromId: user.getId(),
        toId: toUser.getId(),
        subject,
        content,
      });

      await email.save();

      return res.redirect(`/apps/emails/v/${email.getId()}`);
    });

    this.router.delete(
      "/emails/delete/",
      async (req, res) => {
        if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
        const id = req.body.data;

        const query = await _connection2.default.execute(`
        SELECT * FROM UsersEmails
        WHERE id = '${id}'
      `);

        if (!query[0]) {
          return res.json({ message: "Email não econtrado!", status: 404 });
        }

        const userEmail = new (0, _Email.UsersEmails)(query[0]);
        userEmail.delete();

        const find = await _connection2.default.execute(`
        SELECT * FROM Emails
        WHERE id = '${userEmail.getEmailId()}'
      `);

        if (!find[0]) {
          return res.json({ message: "Email não econtrado!", status: 404 });
        }

        const email = new (0, _Email.Email)(find[0]);

        if (email.getFromId() === user.getId()) email.setFromDelete(true);
        if (email.getToId() === user.getId()) email.setToDelete(true);

        if (email.getFromDelete() && email.getToDelete()) await email.delete();
        else await email.update();

        return res.json({ message: "Email deletado!", status: 200 });
      }
    );

    this.router.post("/emails/fwd/", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { to, emailId } = req.body;

      const query = await _connection2.default.execute(`
        SELECT * FROM Emails WHERE id = '${emailId}'
      `);

      if (!query[0]) {
        req.flash("info", "Email não econtrado! Type: warning");
        return res.redirect("/apps/emails");
      }

      const email = new (0, _Email.Email)(query[0]);

      const toUser = await _connection2.default.execute(`
        SELECT * FROM Users WHERE id = '${to}'
      `);

      if (!toUser[0]) {
        req.flash("info", "Usuário não encontrado! Type: warning");
        return res.redirect("/apps/emails");
      }

      const userTo = new (0, _User2.default)(toUser[0]);

      const newEmail = new (0, _Email.Email)({
        fromId: user.getId(),
        toId: userTo.getId(),
        subject: "Fwd: " + email.getSubject(),
        content:
          email.getContent() +
          `<br><br> -- Fwd by ${user.getName()} (${user.getUsername()})`,
      });

      await newEmail.save();

      return res.redirect(`/apps/emails/v/${newEmail.getId()}`);
    });
  }

   Documents() {
    this.router.get("/documents", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const docs = await _connection2.default.execute(`
        SELECT * FROM Documents
        WHERE userId = '${user.getId()}'
        ORDER BY updatedAt DESC
      `);

      const sharedDocs = await _connection2.default.execute(
        `SELECT Documents.*, DocumentsShares.* FROM DocumentsShares INNER JOIN Documents ON DocumentsShares.documentId = Documents.id WHERE DocumentsShares.userId = '${user.getId()}'`
      );

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/documents/documents", {
        title: "Documents",
        info,
        user,
        docs,
        sharedDocs,
      });
    });

    this.router.get("/documents/new", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const document = new (0, _Document.Document)({
        userId: user.getId(),
      });

      await document.save();

      return res.redirect(`/apps/documents/e/${document.getId()}`);
    });

    // edit
    this.router.get("/documents/e/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Documents
        WHERE id = '${id}'
      `);

      if (!query[0]) {
        req.flash("info", "Este documento não foi encontrado! Type: warning");
        return res.redirect("/apps/documents");
      }

      const document = new (0, _Document.Document)(query[0]);

      if (document.getUserId() !== user.getId()) {
        const shareds = await _connection2.default.execute(
          `SELECT * FROM DocumentsShares WHERE documentId = '${document.getId()}' AND userId = '${user.getId()}' AND permission = 'edit'`
        );

        if (!shareds[0]) {
          req.flash(
            "message",
            "Você não tem permissão para editar este documento"
          );
          return res.redirect("/apps/documents");
        }
      }

      const shares = await _connection2.default.execute(
        `SELECT 
          Users.name, Users.username, Users.email,  
          DocumentsShares.* 
        FROM 
          DocumentsShares 
        INNER JOIN Users ON DocumentsShares.userId = Users.id WHERE DocumentsShares.documentId = '${document.getId()}'`
      );

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/documents/document", {
        title: "Documents",
        info,
        user,
        document,
        shares,
      });
    });

    // view
    this.router.get("/documents/v/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Documents
        WHERE id = '${id}'
      `);

      if (!query[0]) {
        req.flash("info", "Este documento não foi encontrado! Type: warning");
        return res.redirect("/apps/documents");
      }

      const document = new (0, _Document.Document)(query[0]);

      if (document.getUserId() !== user.getId()) {
        const shareds = await _connection2.default.execute(
          `SELECT * FROM DocumentsShares WHERE documentId = '${document.getId()}' AND userId = '${user.getId()}' AND permission = 'view' OR permission = 'edit'`
        );

        if (!shareds[0]) {
          req.flash(
            "info",
            "Você não tem permissão para visualizar este documento! Type: warning"
          );
          return res.redirect("/apps/documents");
        }
      }

      const shares = await _connection2.default.execute(
        `SELECT 
          Users.name, Users.username, Users.email,  
          DocumentsShares.* 
        FROM 
          DocumentsShares 
        INNER JOIN Users ON DocumentsShares.userId = Users.id WHERE DocumentsShares.documentId = '${document.getId()}'`
      );

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/documents/document", {
        title: "Documents",
        info,
        user,
        shares,
        document,
      });
    });

    // update
    this.router.put(
      "/documents/update/:id",
      async (req, res) => {
        if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
        const { id } = req.params;
        const { title, content } = req.body;

        const query = await _connection2.default.execute(`
        SELECT * FROM Documents
        WHERE id = '${id}'
      `);

        if (!query[0])
          return res
            .status(404)
            .json({ message: "Este documento não foi encontrado!", status: 404 });

        const document = new (0, _Document.Document)(query[0]);

        if (document.getUserId() !== user.getId()) {
          const shareds = await _connection2.default.execute(
            `SELECT permission FROM DocumentsShares WHERE documentId = '${document.getId()}' AND userId = '${user.getId()}' AND permission = 'edit'`
          );

          if (!shareds[0])
            return res
              .status(404)
              .json({ message: "Você não tem permissão para acessar esse documento!", status: 404 });
        }

        if (title) document.setTitle(title);
        if (content) document.setContent(content);
        await document.update();

        return res
          .status(200)
          .json({ message: "Documento atualizado!", status: 200 });
      }
    );

    // share
    this.router.put(
      "/documents/addUserEdit",
      async (req, res) => {
        if (!req.session.user) {
          req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
          return res.redirect("/signin");
        }

        const author = new (0, _User2.default)(_optionalChain([req, 'access', _ => _.session, 'optionalAccess', _2 => _2.user]));
        const { username, documentId, permission } = req.body;

        const query = await _connection2.default.execute(`
          SELECT * FROM Users
          WHERE username = '${username}'
        `);

        if (!query[0])
          return res
            .status(404)
            .json({ message: "Usuário não encontrado! Type: warning", status: 404 });

        const user = new (0, _User2.default)(query[0]);

        const document = await _connection2.default.execute(`
          SELECT * FROM Documents
          WHERE id = '${documentId}'
        `);

        if (!document[0])
          return res
            .status(404)
            .json({ message: "Este documento não foi encontrado!", status: 404 });

        const doc = new (0, _Document.Document)(document[0]);

        const verify = await _connection2.default.execute(`
          SELECT * FROM DocumentsShares
          WHERE userId = '${user.getId()}'
          AND documentId = '${documentId}'
        `);

        if (verify[0])
          return res
            .status(404)
            .json({ message: "Este usuário já esta adicionado!", status: 404 });

        const share = new (0, _Document.DocumentsShares)({
          userId: user.getId(),
          documentId: doc.getId(),
          authorId: author.getId(),
          permission,
        });

        share.save();

        return res.status(200).json({ message: "Usuário adicionado!", status: 200 });
      }
    );

    // delte
    this.router.get("/documents/d/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Documents
        WHERE id = '${id}'
        AND userId = '${user.getId()}'
      `);

      if (!query[0]) {
        req.flash("info", "Este documento não foi encontrado! Type: warning");
        return res.redirect("/apps/documents");
      }

      const document = new (0, _Document.Document)(query[0]);
      await document.delete();

      req.flash("info", "Documento deletado! Type: success");
      return res.redirect("/apps/documents");
    });
  }

   Forms() {
    this.router.get("/forms", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const forms = await _connection2.default.execute(`
        SELECT * FROM Forms
        WHERE userId = '${user.getId()}'
        ORDER BY updatedAt DESC
      `);

      const sharedForms = await _connection2.default.execute(
        `SELECT Forms.*, FormsShares.* FROM FormsShares INNER JOIN Forms ON FormsShares.formId = Forms.id WHERE FormsShares.userId = '${user.getId()}'`
      );

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/forms/forms", {
        title: "Forms",
        info,
        user,
        forms,
        sharedForms,
      });
    });

    this.router.get("/forms/new", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const form = new (0, _Form.Form)({
        userId: user.getId(),
      });

      await form.save();

      return res.redirect(`/apps/forms/e/${form.getId()}`);
    });

    // edit
    this.router.get("/forms/e/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Forms
        WHERE id = '${id}'
      `);

      if (!query[0]) {
        req.flash("info", "Formulário não encontrado! Type: warning");
        return res.redirect("/apps/forms");
      }

      const form = new (0, _Form.Form)(query[0]);

      if (form.getUserId() !== user.getId()) {
        const shareds = await _connection2.default.execute(
          `SELECT * FROM FormsShares WHERE formId = '${form.getId()}' AND userId = '${user.getId()}' AND permission = 'edit'`
        );

        if (!shareds[0]) {
          req.flash(
            "info",
            "Você não tem permissão para editar este formulário! Type: warning"
          );
          return res.redirect("/apps/forms");
        }
      }

      const shares = await _connection2.default.execute(
        `SELECT 
          Users.name, Users.username, Users.email,  
          FormsShares.* 
        FROM 
          FormsShares 
        INNER JOIN Users ON FormsShares.userId = Users.id WHERE FormsShares.formId = '${form.getId()}'`
      );

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/forms/form", {
        title: "Forms",
        info,
        user,
        form,
        shares,
      });
    });

    // view
    this.router.get("/forms/v/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Forms
        WHERE id = '${id}'
      `);

      if (!query[0]) {
        req.flash("info", "Formulário não encontrado! Type: warning");
        return res.redirect("/apps/forms");
      }

      const form = new (0, _Form.Form)(query[0]);

      if (form.getUserId() !== user.getId()) {
        const shareds = await _connection2.default.execute(
          `SELECT * FROM FormsShares WHERE formId = '${form.getId()}' AND userId = '${user.getId()}' AND permission = 'view' OR permission = 'edit'`
        );

        if (!shareds[0]) {
          req.flash(
            "info",
            "Você não tem permissão para visualizar este formulário! Type: warning"
          );
          return res.redirect("/apps/forms");
        }
      }

      const shares = await _connection2.default.execute(
        `SELECT 
          Users.name, Users.username, Users.email,  
          FormsShares.* 
        FROM 
          FormsShares 
        INNER JOIN Users ON FormsShares.userId = Users.id WHERE FormsShares.formId = '${form.getId()}'`
      );

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/forms/form", {
        title: "Forms",
        info,
        user,
        shares,
        form,
      });
    });

    // update
    this.router.put(
      "/forms/update/:id",
      async (req, res) => {
        if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
        const { id } = req.params;
        const { title, content } = req.body;

        const query = await _connection2.default.execute(`
        SELECT * FROM Forms
        WHERE id = '${id}'
      `);

        if (!query[0])
          return res
            .status(404)
            .json({ message: "Formulário não encontrado! Type: warning", status: 404 });

        const form = new (0, _Form.Form)(query[0]);

        if (form.getUserId() !== user.getId()) {
          const shareds = await _connection2.default.execute(
            `SELECT permission FROM FormsShares WHERE formId = '${form.getId()}' AND userId = '${user.getId()}' AND permission = 'edit'`
          );

          if (!shareds[0])
            return res
              .status(404)
              .json({ message: "Você não tem permissão para acessar!", status: 404 });
        }

        if (title) form.setTitle(title);
        if (content) form.setContent(content);
        await form.update();

        return res.status(200).json({ message: "Formulário atualizado!", status: 200 });
      }
    );

    // share
    this.router.put(
      "/forms/addUserEdit",
      async (req, res) => {
        if (!req.session.user) {
          req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
          return res.redirect("/signin");
        }

        const author = new (0, _User2.default)(_optionalChain([req, 'access', _3 => _3.session, 'optionalAccess', _4 => _4.user]));
        const { username, formId, permission } = req.body;

        const query = await _connection2.default.execute(`
          SELECT * FROM Users
          WHERE username = '${username}'
        `);

        if (!query[0])
          return res
            .status(404)
            .json({ message: "Usuário não encontrado!", status: 404 });

        const user = new (0, _User2.default)(query[0]);

        const forms = await _connection2.default.execute(`
          SELECT * FROM Forms
          WHERE id = '${formId}'
        `);

        if (!forms[0])
          return res
            .status(404)
            .json({ message: "Formulário não encontrado!", status: 404 });

        const form = new (0, _Form.Form)(forms[0]);

        const verify = await _connection2.default.execute(`
          SELECT * FROM FormsShares
          WHERE userId = '${user.getId()}'
          AND formId = '${formId}'
        `);

        if (verify[0])
          return res
            .status(404)
            .json({ message: "Usuário já adicionado!", status: 404 });

        const share = new (0, _Form.FormsShares)({
          userId: user.getId(),
          formId: form.getId(),
          authorId: author.getId(),
          permission,
        });

        share.save();

        return res.status(200).json({ message: "Usuário adicionado!", status: 200 });
      }
    );

    // delte
    this.router.get("/forms/d/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Forms
        WHERE id = '${id}'
        AND userId = '${user.getId()}'
      `);

      if (!query[0]) {
        req.flash("info", "Formulário não encontrado! Type: warning");
        return res.redirect("/apps/forms");
      }

      const form = new (0, _Form.Form)(query[0]);
      await form.delete();

      req.flash("info", "Form deleted");
      return res.redirect("/apps/forms");
    });
  }

   Chats() {
    this.router.get("/chats", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const chatsTo = await _connection2.default.execute(`
        SELECT 
          Chats.id, Chats.conversations, Chats.userToId, Chats.userFromId, Chats.createdAt, Chats.updatedAt,
          Users.name, Users.username, Users.email, Users.avatar
        FROM 
          Chats
        INNER JOIN Users ON Chats.userFromId = Users.id
        WHERE Chats.userToId = '${user.getId()}'
        ORDER BY Chats.updatedAt DESC
      `);

      const chatsFrom = await _connection2.default.execute(`
        SELECT 
          Chats.id, Chats.conversations, Chats.userToId, Chats.userFromId, Chats.createdAt, Chats.updatedAt,
          Users.name, Users.username, Users.email, Users.avatar
        FROM 
          Chats
        INNER JOIN Users ON Chats.userToId = Users.id
        WHERE Chats.userFromId = '${user.getId()}'
        ORDER BY Chats.updatedAt DESC
      `);

      const groups = await _connection2.default.execute(`
        SELECT 
          Groups.id, Groups.name, Groups.description, Groups.avatar, Groups.createdAt, Groups.updatedAt,
          GroupsUsers.userId, GroupsUsers.groupId
        FROM 
          GroupsUsers
        INNER JOIN Groups ON GroupsUsers.groupId = Groups.id
        WHERE GroupsUsers.userId = '${user.getId()}'
        ORDER BY Groups.updatedAt DESC
      `);

      const chats = [...chatsTo, ...chatsFrom, ...groups].sort((a, b) => {
        if (a.updatedAt < b.updatedAt) return 1;
        if (a.updatedAt > b.updatedAt) return -1;
        return 0;
      });

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/chats/chats", {
        title: "Chats",
        info,
        user,
        chats,
      });
    });

    this.router.get("/chats/c/:id/messages", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Chats
        WHERE id = '${id}'
        AND (userToId = '${user.getId()}' OR userFromId = '${user.getId()}')
      `);

      if (!query[0]) {
        req.flash("info", "Chat não encontrado! Type: warning");
        return res.redirect("/apps/chats");
      }

      const chat = new (0, _Chat.Chat)(query[0]);

      chat.conversations = chat.getConversations().map((conversation) => {
        if (conversation.from != user.getId()) conversation.toRead = true;
        return conversation;
      });

      await chat.update();

      const messages = _optionalChain([chat, 'access', _5 => _5.getConversations, 'call', _6 => _6(), 'optionalAccess', _7 => _7.sort, 'call', _8 => _8((a, b) => new Date(new (0, _Chat.Conversation)(a).getCreatedAt()).getTime() - new Date(new (0, _Chat.Conversation)(b).getCreatedAt()).getTime())]);
      
      const conversations = {};
      messages.forEach(message => conversations[new Date(message.createdAt).toLocaleDateString('pt-BR')] = []);
      messages.forEach(message => {
       const date = new Date(message.createdAt).toLocaleDateString('pt-BR');
       conversations[date].push(message);
      });

      return res.json({ messages, conversations });
    });

    this.router.post("/chats/new", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { to } = req.body;

      const query = await _connection2.default.execute(`
        SELECT * FROM Users
        WHERE id = '${to}'
      `);

      if (!query[0]) {
        req.flash("info", "Usuário não encontrado! Type: warning");
        return res.redirect("/apps/chats");
      }

      const userTo = new (0, _User2.default)(query[0]);

      const chat = new (0, _Chat.Chat)({
        userToId: userTo.getId(),
        userFromId: user.getId(),
      });

      await chat.save();

      return res.redirect(`/apps/chats/v/${chat.getId()}`);
    });

    this.router.get("/chats/v/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT 
          userToId, userFromId
        FROM 
          Chats
        WHERE id = '${id}'
      `);

      const chat = await _connection2.default.execute(`
        SELECT 
          Chats.id, Chats.conversations, Chats.userToId, Chats.userFromId, Chats.createdAt, Chats.updatedAt,
          Users.name, Users.username, Users.email, Users.avatar
        FROM 
          Chats
        INNER JOIN Users ON ${
          query[0].userToId === user.getId()
            ? " Chats.userFromId = Users.id"
            : " Chats.userToId = Users.id"
        }
        WHERE Chats.id = '${id}'
      `);

      if (!chat[0]) {
        req.flash("info", "Chat não encontrado! Type: warning");
        return res.redirect("/apps/chats");
      }

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/chats/chat", {
        title: "Chats",
        info,
        user,
        chat: chat[0],
      });
    });

    this.router.put("/chats/newMessage", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { chatId, text } = req.body;

      const query = await _connection2.default.execute(`
        SELECT * FROM Chats
        WHERE id = '${chatId}'
        AND (userToId = '${user.getId()}' OR userFromId = '${user.getId()}')
      `);

      if (!query[0]) {
        req.flash("info", "Chat não encontrado! Type: warning");
        return res.redirect("/apps/chats");
      }
      
      const message = new (0, _Chat.Conversation)({
        message: text,
        from: user.getId(),
      }); 
      
      const chat = new (0, _Chat.Chat)(query[0]);
      chat.setConversation(message);
      chat.update();

      return res.json({ message: "Mensagem enviada", status: 200 });
    });

    this.router.put("/chats/block/user/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`
        SELECT * FROM Chats
        WHERE id = '${id}'
        AND (userToId = '${user.getId()}' OR userFromId = '${user.getId()}')
      `);

      if (!query[0]) {
        req.flash("info", "Chat não encontrado! Type: warning");
        return res.redirect("/apps/chats");
      }

      const chat = new (0, _Chat.Chat)(query[0]);

      if (chat.getUserToId() === user.getId()) chat.setUserToBlock(!chat.getUserToBlock());
      if (chat.getUserFromId() === user.getId()) chat.setUserFromBlock(!chat.getUserFromBlock());

      await chat.update();

      return res.json({ message: "User blocked", status: 200 });
    });

    this.router.put("/chats/react", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { conversationId, messageId, emoji } = req.body;

      const query = await _connection2.default.execute(`
        SELECT * FROM Chats
        WHERE id = '${conversationId}'
        AND (userToId = '${user.getId()}' OR userFromId = '${user.getId()}')
      `);

      if (!query[0]) {
        req.flash("info", "Chat não encontrado! Type: warning");
        return res.redirect("/apps/chats");
      }

      const chat = new (0, _Chat.Chat)(query[0]);
      chat.setConversations(JSON.parse(String(chat.getConversations())));
      chat.setReaction(messageId, new (0, _Chat.React)({ emoji, from: user.getId() }));
     
      await chat.update();

      return res.json({ message: "Reação adiconada!", status: 200 });
    });
  }

   Groups() {
    this.router.get("/groups", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const groups = await _connection2.default.execute(`
        SELECT 
          Groups.id, Groups.name, Groups.description, Groups.avatar, Groups.createdAt, Groups.updatedAt,
          GroupsUsers.userId, GroupsUsers.groupId
        FROM 
          GroupsUsers
        INNER JOIN Groups ON GroupsUsers.groupId = Groups.id
        WHERE GroupsUsers.userId = '${user.getId()}'
        ORDER BY Groups.updatedAt DESC
      `);

      if (!groups[0]) {
        req.flash("info", "Você não tem grupos! Type: warning");
        return res.redirect("/apps/groups");
      }

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/groups/groups", {
        title: "Groups",
        info,
        user,
        groups,
      });
    });

    this.router.get("/groups/v/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const users = await _connection2.default.execute(`
        SELECT 
          GroupsUsers.id, GroupsUsers.groupId, GroupsUsers.userId,
          Users.id, Users.name, Users.username, Users.email, Users.avatar
        FROM 
          GroupsUsers
        INNER JOIN Users ON GroupsUsers.userId = Users.id
        WHERE GroupsUsers.groupId = '${id}'  
      `);

      const group = await _connection2.default.execute(`
        SELECT * FROM Groups WHERE id = '${id}'
      `);

      if (!group[0]) {
        req.flash("info", "Groupo não encontrado! Type: warning");
        return res.redirect("/apps/chats");
      }

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/groups/group", {
        title: "Groups",
        info,
        user,
        group: group[0],
        users,
      });
    });

    this.router.put("/groups/newMessage", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { groupId, message } = req.body;

      const query = await _connection2.default.execute(`
        SELECT * FROM Groups
        WHERE id = '${groupId}'
      `);

      if (!query[0]) {
        req.flash("info", "Group not found");
        return res.redirect("/apps/chats");
      }
      
      const text = new (0, _Chat.Conversation)({
        message,
        from: user.getId(),
      }); 
      
      const group = new (0, _Group.Group)(query[0]);
      group.setConversation(text);
      await _connection2.default.execute(`
        UPDATE Groups
        SET conversations = '${JSON.stringify(group.getConversations())}'
        WHERE id = '${group.getId()}'
      `);

      return res.json({ message: "Message sent", status: 200 });
    });
  }

   Calls() {
    this.router.get("/calls", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/calls/calls", {
        title: "Calls",
        info,
        user
      });
    });

    this.router.get("/calls/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/calls/call", {
        title: "Calls",
        info,
        user
      });
    });
  }

   Posts() {}

   PDFs() {
    this.router.get("/pdf/", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/pdfs/tools", {
        title: "PDF Tools",
        info,
        user,
      });
    });

    this.router.get("/pdf/compress", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/pdfs/compress", {
        title: "PDF Compress",
        info,
        user,
      });
    });

    this.router.post("/pdf/compress", _multer2.default.single("file"), async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você não tem permissão para acesssar! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const pdf = req.file;

      if (!pdf) {
        return res.json({ message: "PDF não encontrado!", status: 404 });
      }
      
      const config = new (0, _pdf2.default)(pdf);
      const compressed = await config.compress();

      return res.json({ message: "PDF uploaded", status: 200, data: compressed }); 
    });

    this.router.post("/pdf/order", _multer2.default.single("file"), async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você não tem permissão para acesssar! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const pdf = req.file;

      if (!pdf) {
        return res.json({ message: "PDF não encontrado!", status: 404 });
      }
      
      const config = new (0, _pdf2.default)(pdf);
      const pages = await config.getPages();

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/pdfs/order", {
        title: "PDF Order Pages",
        info,
        user,
        pages,
      });
    });

    this.router.post("/pdf/pages/:option", _multer2.default.single("file"), async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você não tem permissão para acesssar! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { option } = req.params;
      const { values } = req.body;

      if (!values) {
        req.flash("info", "Values not found");
        return res.json({ message: "Order not found", status: 404 });
      }

      const pdf = req.file;

      if (!pdf) {
        req.flash("info", "PDF not found");
        return res.json({ message: "PDF not found", status: 404 });
      }

      const config = new (0, _pdf2.default)(pdf);

      if (option == "order") config.order(values);
      else if (option == "remove") config.removePages(values);
      else {
        req.flash("info", "Option not found");
        return res.redirect("/apps/pdf/order");
      }

      return res.json({ message: "PDF uploaded", status: 200 });
    }); 

    this.router.post("/pdf/remove", _multer2.default.single("file"), async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você não tem permissão para acesssar! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const pdf = req.file;

      if (!pdf) {
        return res.json({ message: "PDF não encontrado!", status: 404 });
      }
      
      const config = new (0, _pdf2.default)(pdf);
      const pages = await config.getPages();

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/pdfs/remove", {
        title: "PDF Remove Pages",
        info,
        user,
        pages,
      });
    });   
  }

   Calendar() {
    this.router.get("/calendar", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const query = await _connection2.default.execute(`SELECT * FROM Schedule WHERE userId = '${user.getId()}'`);
      let events = new (0, _Schedule.Schedule)({ userId: user.getId() });

      if (!query[0]) await events.save();
      else events = new (0, _Schedule.Schedule)(query[0]);
      events.setEvents(events.getEvents());

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("apps/calendar", {
        title: "Agenda",
        info,
        user,
        events,
      });
    });

    this.router.post("/calendar/new", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você não tem permissão para acesssar. Faça login! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { title, description, dateStart, dateFinish, timeStart, timeFinish, color, type } = req.body;

      if (!title || !description || !dateStart || !dateFinish || !color || !type || !timeStart || !timeFinish) {
        req.flash("info", "Preencha todos os campos! Type: warning");
        return res.redirect("/apps/calendar");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Schedule WHERE userId = '${user.getId()}'`);
      let events = new (0, _Schedule.Schedule)({ userId: user.getId() });

      if (!query[0]) await events.save();
      else events = new (0, _Schedule.Schedule)(query[0]);

      const event = new (0, _Schedule.Event)({ title, description, dateStart, dateFinish, timeStart, timeFinish, color, type });
      events.setEvent(event);
      
      try {
        await events.update();
      } catch (error) {
        req.flash("info", "Erro ao adicionar evento! Type: warning");
        return res.redirect("/apps/calendar");
      }

      req.flash("info", "Evento adicionado! Type: success");
      return res.redirect("/apps/calendar");
    });

    this.router.post("/calendar/update", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você não tem permissão para acesssar. Faça login! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id, title, description, dateStart, dateFinish, timeStart, timeFinish, color, type } = req.body;

      if (!id) {
        req.flash("info", "Preencha todos os campos! Type: warning");
        return res.redirect("/apps/calendar");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Schedule WHERE userId = '${user.getId()}'`);
      const events = new (0, _Schedule.Schedule)(query[0]);

      const event = new (0, _Schedule.Event)(events.getEvent(id));
      
      if (title) event.setTitle(title);
      if (description) event.setDescription(description);
      if (dateStart) event.setDateStart(dateStart);
      if (dateFinish) event.setDateFinish(dateFinish);
      if (timeStart) event.setTimeStart(timeStart);
      if (timeFinish) event.setTimeFinish(timeFinish);
      if (color) event.setColor(color);
      if (type) event.setType(type);
      
      events.updateEvent(event.getId(), event);
      
      try {
        await events.update();
      } catch (error) {
        req.flash("info", "Erro ao atualizar evento! Type: warning");
        return res.redirect("/apps/calendar");
      }

      req.flash("info", "Evento atualizado! Type: success");
      return res.redirect("/apps/calendar");
    });
    
    this.router.post("/calendar/delete/", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você não tem permissão para acesssar. Faça login! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.body;

      const query = await _connection2.default.execute(`SELECT * FROM Schedule WHERE userId = '${user.getId()}'`);

      if (!query[0]) {
        req.flash("info", "Evento não encontrado! Type: warning");
        return res.redirect("/apps/calendar");
      }

      const events = new (0, _Schedule.Schedule)(query[0]);

      events.removeEvent(id);

      try {
        await events.update();
      } catch (error) {
        req.flash("info", "Erro ao deletar evento! Type: warning");
        return res.redirect("/apps/calendar");
      }

      req.flash("info", "Evento deletado! Type: success");
      return res.redirect("/apps/calendar");
    });
  }
}

exports. default = new AppsRoutes().router;