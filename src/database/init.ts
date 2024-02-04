import db from "./connection";
import bcrypt from "bcryptjs";
import functions from "../assets/functions";

const { IDgenerator } = functions();

export default async function init() {
  await db.execute(`CREATE TABLE IF NOT EXISTS UserRole (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL UNIQUE,
    code INTEGER NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  [
    "Administrador",
    "Estudante",
    "Professor",
    "Diretor",
    "Coordenador",
    "Bibliotecário",
    "Outro",
    "Coordenador e Professor",
    "Diretor e Professor",
    "Escola",
    "Coordenação"
  ].forEach(async (title, index) => {
    await db.execute(
      `INSERT INTO UserRole (id, title, code) SELECT "${IDgenerator(
        10
      )}", "${title}", ${index} WHERE NOT EXISTS (SELECT * FROM UserRole WHERE code = ${index})`
    );
  });

  await db.execute(
    `CREATE TABLE IF NOT EXISTS Users (
    id TEXT PRIMARY KEY NOT NULL, 
    name TEXT NOT NULL,
    birthday DATE NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    avatar TEXT DEFAULT "/public/images/avatar.png",
    biography TEXT DEFAULT "Olá, eu sou novo aqui no Stuudy!",
    accesses JSON DEFAULT [],
    role INTEGER NOT NULL,
    theme TEXT DEFAULT "theme-dark",
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role) REFERENCES UserRole(code)
  )`
  );

  ['Stuudy', 'Danilo', 'Pelurio', 'Lorena', 'Diogo', 'Estudante', 'Professor', 'Diretor', 'Coordenador'].forEach( async ( title, index ) => {
    await db.execute( `INSERT INTO Users (id, name, birthday, email, password, username, role) SELECT "${IDgenerator( 10 )}", "${title}", "2001-08-06", "${title.toLowerCase()}@stuudy.com", "${await bcrypt.hash( "stuudy", 10 )}", "@${title.toLowerCase()}", ${index < 5 ? 0 : (index - 4)} WHERE NOT EXISTS (SELECT * FROM Users WHERE username = "@${title.toLowerCase()}")` );
  });

  await db.execute(
    `CREATE TRIGGER IF NOT EXISTS updateUser AFTER UPDATE ON Users FOR EACH ROW BEGIN UPDATE Users SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id; END;`
  );

  // TODO: FAZER
  await db.execute(`CREATE TABLE IF NOT EXISTS UsersFriends (
    id TEXT PRIMARY KEY NOT NULL,
    userId TEXT NOT NULL,
    friendId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (friendId) REFERENCES Users(id)
  )`);

  await db.execute(
    `CREATE TABLE IF NOT EXISTS Emails (
    id TEXT PRIMARY KEY NOT NULL,
    subject TEXT NOT NULL,
    content TEXT NOT NULL,
    toId TEXT,
    fromId TEXT,
    toDelete BOOLEAN DEFAULT FALSE,
    fromDelete BOOLEAN DEFAULT FALSE,
    toRead BOOLEAN DEFAULT FALSE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (toId) REFERENCES Users(id) ON DELETE SET NULL,
    FOREIGN KEY (fromId) REFERENCES Users(id) ON DELETE SET NULL
  )`
  );

  await db.execute(
    `CREATE TABLE IF NOT EXISTS UsersEmails (
    id TEXT PRIMARY KEY NOT NULL,
    userId TEXT NOT NULL,
    emailId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (emailId) REFERENCES Emails(id)
  )`
  );

  await db.execute(
    `CREATE TABLE IF NOT EXISTS Documents (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT Default "Documento sem título",
    content TEXT,
    userId TEXT NOT NULL,
    configs JSON DEFAULT [{ 
      "margins": { 
        "top": "3cm", 
        "bottom": "2cm",
        "left": "2cm",
        "right": "2cm"
      },
      "font": {
        "family": "Times New Roman",
        "size": "12"
      },
      "orientation": "portrait",
      "format": "A4"
      "background": "white",
      "color": "black"
    }],
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`
  );

  await db.execute(
    `CREATE TRIGGER IF NOT EXISTS updateDocument AFTER UPDATE ON Documents FOR EACH ROW BEGIN UPDATE Documents SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id; END;`
  );

  await db.execute(`
    CREATE TABLE IF NOT EXISTS DocumentsShares (
    id TEXT PRIMARY KEY NOT NULL,
    documentId TEXT NOT NULL,
    authorId TEXT NOT NULL,
    userId TEXT NOT NULL,
    permission TEXT DEFAULT "view",
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (documentId) REFERENCES Documents(id) ON DELETE CASCADE,
    FOREIGN KEY (authorId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(
    `CREATE TABLE IF NOT EXISTS Forms (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT Default "Formulário sem título",
    content TEXT,
    userId TEXT NOT NULL,
    configs JSON DEFAULT [{ 
      "margins": { 
        "top": "3cm", 
        "bottom": "2cm",
        "left": "2cm",
        "right": "2cm"
      },
      "font": {
        "family": "Times New Roman",
        "size": "12"
      },
      "orientation": "portrait",
      "format": "A4"
      "background": "white",
      "color": "black"
    }],
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`
  );

  await db.execute(
    `CREATE TRIGGER IF NOT EXISTS updateForm AFTER UPDATE ON Forms FOR EACH ROW BEGIN UPDATE Forms SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id; END;`
  );

  await db.execute(`
    CREATE TABLE IF NOT EXISTS FormsShares (
    id TEXT PRIMARY KEY NOT NULL,
    formId TEXT NOT NULL,
    authorId TEXT NOT NULL,
    userId TEXT NOT NULL,
    permission TEXT DEFAULT "view",
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (formId) REFERENCES Forms(id) ON DELETE CASCADE,
    FOREIGN KEY (authorId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Chats (
    id TEXT PRIMARY KEY NOT NULL,
    conversations TEXT DEFAULT "[]",
    userToId TEXT NOT NULL,
    userFromId TEXT NOT NULL,
    userToBlock BOOLEAN DEFAULT FALSE,
    userFromBlock BOOLEAN DEFAULT FALSE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userToId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (userFromId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(
    `CREATE TRIGGER IF NOT EXISTS updateChat AFTER UPDATE ON Chats FOR EACH ROW BEGIN UPDATE Chats SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id; END;`
  );

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Groups (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    description TEXT DEFAULT "É um grupo de estudos!", 
    avatar TEXT DEFAULT "/public/images/group.png",
    conversations TEXT DEFAULT "[]",
    url TEXT NOT NULL UNIQUE,
    isPrivate BOOLEAN DEFAULT FALSE,
    userCreateId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userCreateId) REFERENCES Users(id) ON DELETE SET NULL
  )`);

  await db.execute(
    `CREATE TRIGGER IF NOT EXISTS updateGroup AFTER UPDATE ON Groups FOR EACH ROW BEGIN UPDATE Groups SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id; END;`
  );

  await db.execute(`
    CREATE TABLE IF NOT EXISTS GroupsUsers (
    id TEXT PRIMARY KEY NOT NULL,
    groupId TEXT NOT NULL,
    userId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (groupId) REFERENCES Groups(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS GroupsAdmins (
    id TEXT PRIMARY KEY NOT NULL,
    groupId TEXT NOT NULL,
    userId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (groupId) REFERENCES Groups(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS GroupsUsersBlocked (
    id TEXT PRIMARY KEY NOT NULL,
    groupId TEXT NOT NULL,
    userId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (groupId) REFERENCES Groups(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Sessions (
      sid VARCHAR NOT NULL COLLATE nocase PRIMARY KEY,
      sess JSON NOT NULL,
      expired INTEGER NOT NULL
    );
  `);

  await db.execute(`
    PRAGMA foreign_keys = ON;
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Schools (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    avatar TEXT DEFAULT "/public/images/school.png",
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    status TEXT DEFAULT "active",
    message TEXT DEFAULT "Nós agora fazemos parte do Stuudy!",
    principalId TEXT UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (principalId) REFERENCES Users(id) ON DELETE SET NULL
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS SchoolsUsers (
    id TEXT PRIMARY KEY NOT NULL,
    schoolId TEXT NOT NULL,
    userId TEXT NOT NULL,
    userRole INTEGER NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (schoolId) REFERENCES Schools(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (userRole) REFERENCES UserRole(code) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Grades (
    id TEXT PRIMARY KEY NOT NULL,
    schoolId TEXT,
    periods TEXT DEFAULT "[]",
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (schoolId) REFERENCES Schools(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Courses (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    avatar TEXT DEFAULT "/public/images/course.png",
    status TEXT DEFAULT "active",
    schoolId TEXT,
    gradeId TEXT,
    coordinatorId TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (schoolId) REFERENCES Schools(id) ON DELETE CASCADE,
    FOREIGN KEY (gradeId) REFERENCES Grades(id) ON DELETE CASCADE,
    FOREIGN KEY (coordinatorId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS CoursesUsers (
    id TEXT PRIMARY KEY NOT NULL,
    courseId TEXT NOT NULL,
    userId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (courseId) REFERENCES Courses(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Periods (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    status TEXT DEFAULT "active",
    schoolId TEXT,
    courseId TEXT,
    userId TEXT,
    startAt DATE,
    endAt DATE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (schoolId) REFERENCES Schools(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES Courses(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Classrooms (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    status TEXT DEFAULT "active",
    courseId TEXT NOT NULL,
    periodId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (courseId) REFERENCES Courses(id) ON DELETE CASCADE,
    FOREIGN KEY (periodId) REFERENCES Periods(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS ClassroomUsers (
    id TEXT PRIMARY KEY NOT NULL,
    classroomId TEXT NOT NULL,
    userId TEXT NOT NULL,
    courseId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (classroomId) REFERENCES Classrooms(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES Courses(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Disciplines (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    status TEXT DEFAULT "active",
    courseId TEXT NOT NULL,
    periodId TEXT NOT NULL,
    classroomId TEXT NOT NULL,
    teachers JSON DEFAULT "[]",
    students JSON DEFAULT "[]",
    classes TEXT DEFAULT "[]",
    activities TEXT DEFAULT "[]",
    works TEXT DEFAULT "[]",
    resumes TEXT DEFAULT "[]",
    books TEXT DEFAULT "[]",
    evaluations TEXT DEFAULT "[]",
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (courseId) REFERENCES Courses(id) ON DELETE CASCADE,
    FOREIGN KEY (periodId) REFERENCES Periods(id) ON DELETE CASCADE,
    FOREIGN KEY (classroomId) REFERENCES Classrooms(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS DisciplinesStudents (
    id TEXT PRIMARY KEY NOT NULL,
    disciplineId TEXT NOT NULL,
    userId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (disciplineId) REFERENCES Disciplines(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS DisciplinesTeachers (
    id TEXT PRIMARY KEY NOT NULL,
    disciplineId TEXT NOT NULL,
    userId TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (disciplineId) REFERENCES Disciplines(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS History (
    id TEXT PRIMARY KEY NOT NULL,
    userId TEXT NOT NULL,
    periods JSON DEFAULT "[]",
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Schedule (
    id TEXT PRIMARY KEY NOT NULL,
    userId TEXT NOT NULL,
    events JSON DEFAULT "[]",
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )`);
}
