import browser from "browser-detect";
import { Request } from "express";
import os from "os";
import db from "../connection";
import ip from "ip";
import { Email } from "./Email";
import functions from "../../assets/functions";
const { IDgenerator } = functions();

interface IUser {
  readonly id?: string;
  name: string;
  birthday?: Date;
  email: string;
  password: string;
  username: string;
  avatar?: string;
  biography?: string;
  accesses?: Access[];
  role: number;
  theme?: string;
  readonly createdAt?: Date;
  updatedAt?: Date;
}

export default class User implements IUser {
  id: string;
  name: string;
  birthday: Date;
  email: string;
  password: string;
  username: string;
  avatar: string;
  biography: string;
  accesses: Access[];
  role: number;
  theme: string;
  createdAt: Date;
  updatedAt: Date;

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
  }: IUser) {
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

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getBirthday = (): Date => this.birthday;
  public getEmail = (): string => this.email;
  public getPassword = (): string => "***********";
  public getUsername = (): string => this.username;
  public getAvatar = (): string => this.avatar;
  public getBiography = (): string => this.biography;
  public getAccesses = (): Access[] => {
    if (String(this.accesses) == "[]") this.accesses = [];
    else if (typeof this.accesses == "string")
      this.accesses = JSON.parse(this.accesses);
    return this.accesses;
  };
  public getRole = (): number => this.role;
  public getTheme = (): string => this.theme;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setName = (name: string) => (this.name = name);
  public setBirthday = (birthday: Date) => (this.birthday = birthday);
  public setEmail = (email: string) => (this.email = email);
  public setPassword = (password: string) => (this.password = password);
  public setUsername = (username: string) => (this.username = username);
  public setAvatar = (avatar: string) => (this.avatar = avatar);
  public setBiography = (biography: string) => (this.biography = biography);
  public setAccesses = (accesses: Access[]) => (this.accesses = accesses);
  public setAccess = (access: Access) => {
    this.setAccesses(this.getAccesses());
    if (this.accesses.length >= 10) this.accesses.shift();
    if (!this.accesses) this.accesses = [];
    this.accesses.push(access);
  };
  public setRole = (role: number) => (this.role = role);
  public setTheme = (theme: string) => (this.theme = theme);
  public setUpdatedAt = () => (this.updatedAt = new Date());

  public async login(req: Request) {
    this.setNewAccess(req);
    await this.update();
  }

  public async logout() {
    this.setEndAccess();
    await this.update();
  }

  public async setNewAccess(req: Request) {
    const access = new Access({
      id: IDgenerator(10),
      machine: `${os.hostname()} - ${os.platform()} - ${os.arch()} - ${os.release()}`,
      browser: browser(req.headers["user-agent"]).name,
      location: {
        city: req.ip || "Não identificado",
        state: req.ip || "Não identificado",
        country: req.ip || "Não identificado",
        ip: ip.address(),
      },
      time: {
        start: new Date(),
        end: null,
        time: null,
      },
    });

    this.setAccess(access);
  }

  public async setEndAccess() {
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

  public async save() {
    await db.execute(
      `INSERT INTO Users (id, name, birthday, email, password, username, avatar, biography, accesses, role) VALUES ("${
        this.id
      }", "${this.name}", "${this.birthday}", "${this.email}", "${
        this.password
      }", "${this.username}", "${this.avatar}", "${
        this.biography
      }", "${JSON.stringify(this.accesses)}", "${this.role}")`
    );

    const query = await db.execute(
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

    const welcome = new Email({
      fromId: query[0].id,
      toId: this.id,
      subject: "Boas vindas ao Stuudy, " + this.name.split(" ")[0] + " ✌💘",
      content: message,
      fromDelete: true,
    });
    welcome.save();
  }

  public async update() {
    await db.execute(
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

  public async delete() {
    await db.execute(`DELETE FROM Users WHERE id = '${this.id}'`);
  }
}

interface IAccess {
  readonly id?: string;
  date?: Date;
  machine?: string;
  browser?: string;
  location?: { city: string; state: string; country: string; ip: string };
  time?: { start: Date; end: Date | null; time: string | null };
  createdAt?: Date;
}

export class Access implements IAccess {
  readonly id: string;
  date: Date;
  machine: string;
  browser: string;
  time: { start: Date; end: Date | null; time: string | null };
  location: { city: string; state: string; country: string; ip: string };
  createdAt: Date;

  constructor(access: IAccess) {
    this.id = access.id || IDgenerator(10);
    this.date = access.date || new Date();
    this.machine =
      access.machine ||
      `${os.hostname} - ${os.platform} - ${os.arch} - ${os.release}`;
    this.browser = access.browser || String(os.hostname);
    this.time = access.time || { start: new Date(), end: null, time: null };
    this.location = access.location || {
      city: "Não identificado",
      state: "Não identificado",
      country: "Não identificado",
      ip: String(os.hostname),
    };
    this.createdAt = access.createdAt || new Date();
  }
}

interface IRole {
  readonly id: string;
  name: string;
  code: string;
  readonly createdAt?: Date;
  updatedAt?: Date;
}

export class Role implements IRole {
  readonly id: string;
  name: string;
  code: string;
  readonly createdAt: Date;
  updatedAt: Date;

  constructor(role: IRole) {
    this.id = role.id;
    this.name = role.name;
    this.code = role.code;
    this.createdAt = role.createdAt || new Date();
    this.updatedAt = role.updatedAt || new Date();
  }
}
