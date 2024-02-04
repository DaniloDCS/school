"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator, createStuudyEmail } = _functions2.default.call(void 0, );
var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);
var _Email = require('../Email');
var _User = require('../User'); var _User2 = _interopRequireDefault(_User);














class Course  {
  
  
  
  
  
  
  
  
  

  constructor({ id = IDgenerator(), name, gradeId = "", avatar = "/public/images/course.png", status = "active", schoolId = "", coordinatorId = "", createdAt = new Date(), updatedAt = new Date(), }) {;Course.prototype.__init.call(this);Course.prototype.__init2.call(this);Course.prototype.__init3.call(this);Course.prototype.__init4.call(this);Course.prototype.__init5.call(this);Course.prototype.__init6.call(this);Course.prototype.__init7.call(this);Course.prototype.__init8.call(this);Course.prototype.__init9.call(this);Course.prototype.__init10.call(this);Course.prototype.__init11.call(this);Course.prototype.__init12.call(this);Course.prototype.__init13.call(this);Course.prototype.__init14.call(this);Course.prototype.__init15.call(this);Course.prototype.__init16.call(this);Course.prototype.__init17.call(this);Course.prototype.__init18.call(this);
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

   __init() {this.getId = () => this.id || ""}
   __init2() {this.getName = () => this.name}
   __init3() {this.getGradeId = () => this.gradeId || ""}
   __init4() {this.getAvatar = () => this.avatar || ""}
   __init5() {this.getStatus = () => this.status || ""}
   __init6() {this.getSchoolId = () => this.schoolId || ""}
   __init7() {this.getCoordinatorId = () => this.coordinatorId || ""}
   __init8() {this.getCreatedAt = () => this.createdAt || new Date()}
   __init9() {this.getUpdatedAt = () => this.updatedAt || new Date()}

   __init10() {this.setId = (id) => this.id = id}
   __init11() {this.setName = (name) => this.name = name}
   __init12() {this.setGradeId = (gradeId) => this.gradeId = gradeId}
   __init13() {this.setAvatar = (avatar) => this.avatar = avatar}
   __init14() {this.setStatus = (status) => this.status = status}
   __init15() {this.setSchoolId = (schoolId) => this.schoolId = schoolId}
   __init16() {this.setCoordinatorId = (coordinatorId) => this.coordinatorId = coordinatorId}
   __init17() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init18() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}

   async save() {
    const school = await _connection2.default.execute(`SELECT * FROM Schools WHERE id = '${this.schoolId}'`);
    const user = await _connection2.default.execute(`SELECT * FROM Users WHERE id = '${this.coordinatorId}'`);

    const coordenation = new (0, _User2.default)({
      username: "@coordenacao." + this.name.toLowerCase().replace(/\s/g, ""),
      name: user[0].name,
      email: "coordenacao." + this.name.toLowerCase().replace(/\s/g, "") + "." + school[0].name.toLowerCase().replace(/\s/g, "") + "@stuudy.coordenacao.com.br",
      password: "stuudy",
      role: 10
    });

    await coordenation.save()
    await _connection2.default.execute(`INSERT INTO Courses (id, name, gradeId, avatar, status, schoolId, coordinatorId, createdAt, updatedAt) VALUES ('${this.id}', '${this.name}', '${this.gradeId}', '${this.avatar}', '${this.status}', '${this.schoolId}', '${this.coordinatorId}', '${this.createdAt}', '${this.updatedAt}')`);

    const email = new (0, _Email.Email)({
      toId: coordenation.getId(),
      fromId: school[0].principalId,
      subject: "📚 Oba! Agora você é coordenador(a) do curso!",
      content: `<div style="text-align: justify;">🎉 Olá, ${user[0].name.split(" ")[0]}! Parabéns pela ascensão à posição de coordenador(a) do curso! Seja muito bem-vindo à equipe da coordenação do curso de <strong>${this.name.toUpperCase()}</strong>! Sua entrada aqui vai enriquecer ainda mais nossos processos acadêmicos. Juntos, vamos criar um ambiente de aprendizado incrível! 📚✨ Seja a estrela-guia desse novo capítulo acadêmico, guiando o curso rumo ao sucesso! 🚀📚 <br><br> <a href="/school/c/${this.id}">Clique aqui</a> para ver detalhes do curso.</div>`,
    });
    await email.save();
  }

   async update() {
    const course = new Course(this);
    await _connection2.default.execute(`UPDATE Courses SET name = '${course.getName()}', gradeId = '${course.getGradeId()}', avatar = '${course.getAvatar()}', status = '${course.getStatus()}', schoolId = '${course.getSchoolId()}', coordinatorId = '${course.getCoordinatorId()}', createdAt = '${course.getCreatedAt()}', updatedAt = '${course.getUpdatedAt()}' WHERE id = '${course.getId()}'`);
    return new Course(course);
  }

   async delete() {
    await _connection2.default.execute(`DELETE FROM Courses WHERE id = '${this.getId()}'`);
    return true;
  }
}

exports. default = Course;
