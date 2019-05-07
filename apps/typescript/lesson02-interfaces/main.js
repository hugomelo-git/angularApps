"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../lesson01-classes/person");
var personDao_1 = require("./personDao");
var personDao;
personDao = new personDao_1.PersonDao();
var person;
person = new person_1.Person('Mike');
personDao.insert(person);
//# sourceMappingURL=main.js.map