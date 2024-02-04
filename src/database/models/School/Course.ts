import functions from "../../../assets/functions";
const { IDgenerator, createStuudyEmail } = functions();
import db from "../../connection";
import { Email } from "../Email";
import User from "../User";
import Grade from "./Grade";

interface ICourse {
  id?: string;
  name: string;
  gradeId?: string;
  avatar?: string;
  status?: string;
  schoolId?: string;
  coordinatorId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Course implements ICourse {
  id?: string;
  name: string;
  gradeId?: string;
  avatar?: string;
  status?: string;
  schoolId?: string;
  coordinatorId?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({ id = IDgenerator(), name, gradeId = "", avatar = "/public/images/course.png", status = "active", schoolId = "", coordinatorId = "", createdAt = new Date(), updatedAt = new Date(), }: ICourse) {
    this.id = id;
    this.name = name;
    this.gradeId = gradeId;
    this.avatar = avatar;
    this.status = status;
    this.schoolId = schoolId;
    this.coordinatorId = coordinatorId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id || "";
  public getName = (): string => this.name;
  public getGradeId = (): string => this.gradeId || "";
  public getAvatar = (): string => this.avatar || "";
  public getStatus = (): string => this.status || "";
  public getSchoolId = (): string => this.schoolId || "";
  public getCoordinatorId = (): string => this.coordinatorId || "";
  public getCreatedAt = (): Date => this.createdAt || new Date();
  public getUpdatedAt = (): Date => this.updatedAt || new Date();

  public setId = (id: string) => this.id = id;
  public setName = (name: string) => this.name = name;
  public setGradeId = (gradeId: string) => this.gradeId = gradeId;
  public setAvatar = (avatar: string) => this.avatar = avatar;
  public setStatus = (status: string) => this.status = status;
  public setSchoolId = (schoolId: string) => this.schoolId = schoolId;
  public setCoordinatorId = (coordinatorId: string) => this.coordinatorId = coordinatorId;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;

  public async save() {
    const school = await db.execute(`SELECT * FROM Schools WHERE id = '${this.schoolId}'`);
    const user = await db.execute(`SELECT * FROM Users WHERE id = '${this.coordinatorId}'`);

    const coordenation = new User({
      username: "@coordenacao." + this.name.toLowerCase().replace(/\s/g, ""),
      name: user[0].name,
      email: "coordenacao." + this.name.toLowerCase().replace(/\s/g, "") + "." + school[0].name.toLowerCase().replace(/\s/g, "") + "@stuudy.coordenacao.com.br",
      password: "stuudy",
      role: 10
    });

    await coordenation.save()
    await db.execute(`INSERT INTO Courses (id, name, gradeId, avatar, status, schoolId, coordinatorId, createdAt, updatedAt) VALUES ('${this.id}', '${this.name}', '${this.gradeId}', '${this.avatar}', '${this.status}', '${this.schoolId}', '${this.coordinatorId}', '${this.createdAt}', '${this.updatedAt}')`);

    const email = new Email({
      toId: coordenation.getId(),
      fromId: school[0].principalId,
      subject: "📚 Oba! Agora você é coordenador(a) do curso!",
      content: `<div style="text-align: justify;">🎉 Olá, ${user[0].name.split(" ")[0]}! Parabéns pela ascensão à posição de coordenador(a) do curso! Seja muito bem-vindo à equipe da coordenação do curso de <strong>${this.name.toUpperCase()}</strong>! Sua entrada aqui vai enriquecer ainda mais nossos processos acadêmicos. Juntos, vamos criar um ambiente de aprendizado incrível! 📚✨ Seja a estrela-guia desse novo capítulo acadêmico, guiando o curso rumo ao sucesso! 🚀📚 <br><br> <a href="/school/c/${this.id}">Clique aqui</a> para ver detalhes do curso.</div>`,
    });
    await email.save();
  }

  public async update(): Promise<Course> {
    const course: Course = new Course(this);
    await db.execute(`UPDATE Courses SET name = '${course.getName()}', gradeId = '${course.getGradeId()}', avatar = '${course.getAvatar()}', status = '${course.getStatus()}', schoolId = '${course.getSchoolId()}', coordinatorId = '${course.getCoordinatorId()}', createdAt = '${course.getCreatedAt()}', updatedAt = '${course.getUpdatedAt()}' WHERE id = '${course.getId()}'`);
    return new Course(course);
  }

  public async delete(): Promise<boolean> {
    await db.execute(`DELETE FROM Courses WHERE id = '${this.getId()}'`);
    return true;
  }
}

export default Course;
