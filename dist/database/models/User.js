"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _browserdetect = require('browser-detect'); var _browserdetect2 = _interopRequireDefault(_browserdetect);

var _os = require('os'); var _os2 = _interopRequireDefault(_os);
var _connection = require('../connection'); var _connection2 = _interopRequireDefault(_connection);
var _ip = require('ip'); var _ip2 = _interopRequireDefault(_ip);
var _Email = require('./Email');
var _functions = require('../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );

















 class User  {
  
  
  
  
  
  
  
  
  
  
  
  
  

  constructor({
    id,
    name,
    birthday,
    email,
    password,
    username,
    avatar,
    biography,
    accesses,
    role,
    theme,
    createdAt,
    updatedAt,
  }) {;User.prototype.__init.call(this);User.prototype.__init2.call(this);User.prototype.__init3.call(this);User.prototype.__init4.call(this);User.prototype.__init5.call(this);User.prototype.__init6.call(this);User.prototype.__init7.call(this);User.prototype.__init8.call(this);User.prototype.__init9.call(this);User.prototype.__init10.call(this);User.prototype.__init11.call(this);User.prototype.__init12.call(this);User.prototype.__init13.call(this);User.prototype.__init14.call(this);User.prototype.__init15.call(this);User.prototype.__init16.call(this);User.prototype.__init17.call(this);User.prototype.__init18.call(this);User.prototype.__init19.call(this);User.prototype.__init20.call(this);User.prototype.__init21.call(this);User.prototype.__init22.call(this);User.prototype.__init23.call(this);User.prototype.__init24.call(this);User.prototype.__init25.call(this);
    this.id = id || IDgenerator(10);
    this.name = name;
    this.birthday = birthday || new Date();
    this.email = email;
    this.password = password;
    this.username = username;
    this.avatar = avatar || "/public/images/avatar.png";
    this.biography = biography || "Olá, eu sou novo aqui no Stuudy!";
    this.accesses = accesses || [];
    this.role = parseInt(String(role));
    this.theme = theme || "theme-dark";
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

   __init() {this.getId = () => this.id}
   __init2() {this.getName = () => this.name}
   __init3() {this.getBirthday = () => this.birthday}
   __init4() {this.getEmail = () => this.email}
   __init5() {this.getPassword = () => "***********"}
   __init6() {this.getUsername = () => this.username}
   __init7() {this.getAvatar = () => this.avatar}
   __init8() {this.getBiography = () => this.biography}
   __init9() {this.getAccesses = () => {
    if (String(this.accesses) == "[]") this.accesses = [];
    else if (typeof this.accesses == "string")
      this.accesses = JSON.parse(this.accesses);
    return this.accesses;
  }}
   __init10() {this.getRole = () => this.role}
   __init11() {this.getTheme = () => this.theme}
   __init12() {this.getCreatedAt = () => this.createdAt}
   __init13() {this.getUpdatedAt = () => this.updatedAt}

   __init14() {this.setName = (name) => (this.name = name)}
   __init15() {this.setBirthday = (birthday) => (this.birthday = birthday)}
   __init16() {this.setEmail = (email) => (this.email = email)}
   __init17() {this.setPassword = (password) => (this.password = password)}
   __init18() {this.setUsername = (username) => (this.username = username)}
   __init19() {this.setAvatar = (avatar) => (this.avatar = avatar)}
   __init20() {this.setBiography = (biography) => (this.biography = biography)}
   __init21() {this.setAccesses = (accesses) => (this.accesses = accesses)}
   __init22() {this.setAccess = (access) => {
    this.setAccesses(this.getAccesses());
    if (this.accesses.length >= 10) this.accesses.shift();
    if (!this.accesses) this.accesses = [];
    this.accesses.push(access);
  }}
   __init23() {this.setRole = (role) => (this.role = role)}
   __init24() {this.setTheme = (theme) => (this.theme = theme)}
   __init25() {this.setUpdatedAt = () => (this.updatedAt = new Date())}

   async login(req) {
    this.setNewAccess(req);
    await this.update();
  }

   async logout() {
    this.setEndAccess();
    await this.update();
  }

   async setNewAccess(req) {
    const access = new Access({
      id: IDgenerator(10),
      machine: `${_os2.default.hostname()} - ${_os2.default.platform()} - ${_os2.default.arch()} - ${_os2.default.release()}`,
      browser: _browserdetect2.default.call(void 0, req.headers["user-agent"]).name,
      location: {
        city: req.ip || "Não identificado",
        state: req.ip || "Não identificado",
        country: req.ip || "Não identificado",
        ip: _ip2.default.address(),
      },
      time: {
        start: new Date(),
        end: null,
        time: null,
      },
    });

    this.setAccess(access);
  }

   async setEndAccess() {
    const lastAccess = this.getAccesses()[this.accesses.length - 1];
    lastAccess.time.end = new Date();

    const timeTotal =
      new Date(lastAccess.time.end).getTime() -
      new Date(lastAccess.time.start).getTime();

    const time = {
      days: Math.floor(timeTotal / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeTotal % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeTotal % (1000 * 60)) / 1000),
    };

    lastAccess.time.time = `${time.days ? `${time.days}d, ` : ""}${
      time.hours ? `${time.hours}h, ` : ""
    }${time.minutes ? `${time.minutes}min, ` : ""}${time.seconds}s`;

    this.accesses[this.accesses.length - 1] = lastAccess;
  }

   async save() {
    await _connection2.default.execute(
      `INSERT INTO Users (id, name, birthday, email, password, username, avatar, biography, accesses, role) VALUES ("${
        this.id
      }", "${this.name}", "${this.birthday}", "${this.email}", "${
        this.password
      }", "${this.username}", "${this.avatar}", "${
        this.biography
      }", "${JSON.stringify(this.accesses)}", "${this.role}")`
    );

    const query = await _connection2.default.execute(
      `SELECT id FROM Users WHERE username = "@stuudy"`
    );

    const message = `👋 Olá, ${this.name}!,<br>
<p>Seja muito bem-vindo ao Stuudy! 🎉 É um prazer incrível tê-lo conosco. Aqui, no coração da nossa comunidade, você encontrará uma plataforma que vai além do convencional - estamos aqui para incendiar sua experiência e te proporcionar oportunidades extraordinárias!</p><br>
<p>Nós, da equipe Stuudy, estamos superempolgados por você ter escolhido nossa plataforma para conectar-se, aprender e compartilhar. Prepare-se para se envolver em um universo de possibilidades onde sua criatividade, paixão e objetivos se tornarão realidade. 😊✨</p><br>
<p>O Stuudy não é apenas mais um aplicativo. É um espaço onde a inovação se mistura com a colaboração, onde cada usuário é uma chama única, contribuindo para um fogo coletivo de conhecimento e inspiração.</p><br>
<p>Aqui, você encontrará uma diversidade de recursos exclusivos, desde conteúdos educativos e inspiradores até oportunidades de conexões valiosas com pessoas incríveis. Explore nossos recursos, compartilhe suas ideias e não hesite em mergulhar de cabeça nas discussões.</p><br>
<p>Além disso, estamos sempre trabalhando para melhorar e tornar sua experiência ainda mais excepcional. Fique atento às atualizações regulares, novos recursos e surpresas que estão a caminho. 🚀</p><br>
<p>Não hesite em nos contatar para qualquer dúvida, sugestão ou para compartilhar suas experiências conosco. Acreditamos firmemente que cada voz é fundamental para moldar o Stuudy para ser o melhor para você e para todos.</p><br>
<p>Agradecemos mais uma vez por escolher o Stuudy. Estamos ansiosos para ver sua participação na comunidade e para testemunhar o brilho da sua jornada conosco!</p><br>
<p>Seja bem-vindo ao incendiário mundo do Stuudy! </p><br>
<p>Com entusiasmo,</p>
<a href="/u/@danilo" target="_blank">Danilo Costa - Stuudy develepment 🔥✨</a>`;

    const welcome = new (0, _Email.Email)({
      fromId: query[0].id,
      toId: this.id,
      subject: "Boas vindas ao Stuudy, " + this.name.split(" ")[0] + " ✌💘",
      content: message,
      fromDelete: true,
    });
    welcome.save();
  }

   async update() {
    await _connection2.default.execute(
      `UPDATE Users SET
      name = '${this.name}',
      birthday = '${this.birthday}',
      email = '${this.email}',
      password = '${this.password}',
      username = '${this.username}',
      avatar = '${this.avatar}',
      biography = '${this.biography}',
      accesses = '${JSON.stringify(this.accesses)}',
      role = '${this.role}',
      theme = '${this.theme}'
      WHERE id = '${this.id}'`
    );
  }

   async delete() {
    await _connection2.default.execute(`DELETE FROM Users WHERE id = '${this.id}'`);
  }
} exports.default = User;











 class Access  {
  
  
  
  
  
  
  

  constructor(access) {
    this.id = access.id || IDgenerator(10);
    this.date = access.date || new Date();
    this.machine =
      access.machine ||
      `${_os2.default.hostname} - ${_os2.default.platform} - ${_os2.default.arch} - ${_os2.default.release}`;
    this.browser = access.browser || String(_os2.default.hostname);
    this.time = access.time || { start: new Date(), end: null, time: null };
    this.location = access.location || {
      city: "Não identificado",
      state: "Não identificado",
      country: "Não identificado",
      ip: String(_os2.default.hostname),
    };
    this.createdAt = access.createdAt || new Date();
  }
} exports.Access = Access;









 class Role  {
  
  
  
  
  

  constructor(role) {
    this.id = role.id;
    this.name = role.name;
    this.code = role.code;
    this.createdAt = role.createdAt || new Date();
    this.updatedAt = role.updatedAt || new Date();
  }
} exports.Role = Role;
