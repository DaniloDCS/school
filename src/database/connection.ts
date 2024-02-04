import { Database } from "sqlite3";
import { resolve } from "path";

class database {
  private db: Database;
  table: string;
  fields: object;

  constructor() {
    this.table = "";
    this.fields = {};

    this.db = new Database(resolve(__dirname, "stuudy.db"), (err) => {
      if (err) {
        console.error(err.message);
        throw new Error("Database connection failed");
      }

      console.log("Connected to the database.");
    });
  }

  public async execute(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.all(query, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });
  }

  public from(table: string): database {
    this.table = table;

    return this;
  }

  public selectAll = (...fields: string[]): Promise<any> => {
    this.fields = fields;

    return new Promise((resolve, reject) => {
      this.db.all(`SELECT ${fields.join(", ")} FROM ${this.table}`, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });    
  }

  public selectWhere = (fields: string, value: object): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT ${fields} FROM ${this.table} WHERE ${Object.keys(value)[0]} = ${Object.values(value)[0]}`, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });
  }

  public selectLike = (fields: string, value: object): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT ${fields} FROM ${this.table} WHERE ${Object.keys(value)[0]} LIKE '%${Object.values(value)[0]}%'`, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });
  }

  public insert = (values: object): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.db.run(`INSERT INTO ${this.table} (${Object.keys(values).join(", ")}) VALUES (${Object.values(values).join(", ")})`, (err) => {
        if (err) reject(err.message);
        resolve(true);
      });
    });
  }

  public update = (values: object, where: object): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.db.run(`UPDATE ${this.table} SET ${Object.keys(values).map((field, index) => `${field} = ${Object.values(values)[index]}`).join(", ")} WHERE ${Object.keys(where)[0]} = ${Object.values(where)[0]}`, (err) => {
        if (err) reject(err.message);
        resolve(true);
      });
    });
  }

  public delete = (where: object): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.db.run(`DELETE FROM ${this.table} WHERE ${Object.keys(where)[0]} = ${Object.values(where)[0]}`, (err) => {
        if (err) reject(err.message);
        resolve(true);
      });
    });
  }
    
}

export default new database();