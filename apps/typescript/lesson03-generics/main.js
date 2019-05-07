"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var person_1 = require("../lesson01-classes/person");
var dao = new Dao_1.Dao();
var person = new person_1.Person('Mike');
dao.insert(person);
var dao2 = new Dao_1.Dao();
//# sourceMappingURL=main.js.map