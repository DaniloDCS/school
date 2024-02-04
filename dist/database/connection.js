"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sqlite3 = require('sqlite3');
var _path = require('path');

class database {
  
  
  

  constructor() {;database.prototype.__init.call(this);database.prototype.__init2.call(this);database.prototype.__init3.call(this);database.prototype.__init4.call(this);database.prototype.__init5.call(this);database.prototype.__init6.call(this);
    this.table = "";
    this.fields = {};

    this.db = new (0, _sqlite3.Database)(_path.resolve.call(void 0, __dirname, "stuudy.db"), (err) => {
      if (err) {
        console.error(err.message);
        throw new Error("Database connection failed");
      }

      console.log("Connected to the database.");
    });
  }

   async execute(query) {
    return new Promise((resolve, reject) => {
      this.db.all(query, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });
  }

   from(table) {
    this.table = table;

    return this;
  }

   __init() {this.selectAll = (...fields) => {
    this.fields = fields;

    return new Promise((resolve, reject) => {
      this.db.all(`SELECT ${fields.join(", ")} FROM ${this.table}`, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });    
  }}

   __init2() {this.selectWhere = (fields, value) => {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT ${fields} FROM ${this.table} WHERE ${Object.keys(value)[0]} = ${Object.values(value)[0]}`, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });
  }}

   __init3() {this.selectLike = (fields, value) => {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT ${fields} FROM ${this.table} WHERE ${Object.keys(value)[0]} LIKE '%${Object.values(value)[0]}%'`, (err, rows) => {
        if (err) reject(err.message);
        resolve(rows);
      });
    });
  }}

   __init4() {this.insert = (values) => {
    return new Promise((resolve, reject) => {
      this.db.run(`INSERT INTO ${this.table} (${Object.keys(values).join(", ")}) VALUES (${Object.values(values).join(", ")})`, (err) => {
        if (err) reject(err.message);
        resolve(true);
      });
    });
  }}

   __init5() {this.update = (values, where) => {
    return new Promise((resolve, reject) => {
      this.db.run(`UPDATE ${this.table} SET ${Object.keys(values).map((field, index) => `${field} = ${Object.values(values)[index]}`).join(", ")} WHERE ${Object.keys(where)[0]} = ${Object.values(where)[0]}`, (err) => {
        if (err) reject(err.message);
        resolve(true);
      });
    });
  }}

   __init6() {this.delete = (where) => {
    return new Promise((resolve, reject) => {
      this.db.run(`DELETE FROM ${this.table} WHERE ${Object.keys(where)[0]} = ${Object.values(where)[0]}`, (err) => {
        if (err) reject(err.message);
        resolve(true);
      });
    });
  }}
    
}

exports. default = new database();