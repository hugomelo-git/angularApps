"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.insert = function (object) {
        console.log('Inserting ... ');
        return true;
    };
    Dao.prototype.update = function (Person) {
        return true;
    };
    Dao.prototype.delete = function (id) {
        return true;
    };
    Dao.prototype.find = function (id) {
        return null;
    };
    Dao.prototype.findAll = function () {
        return [null];
    };
    ;
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=Dao.js.map