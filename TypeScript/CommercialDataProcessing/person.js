"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(pid, name, bal, no) {
        this.noofshares = new Array();
        this.personid = pid;
        this.personname = name;
        this.balance = bal;
        this.noofshares = no;
    }
    Object.defineProperty(Person.prototype, "getPersonid", {
        get: function () {
            return this.personid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setPersonid", {
        set: function (id) {
            this.personid = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getPersonname", {
        get: function () {
            return this.personname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setPersonname", {
        set: function (name) {
            this.personname = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getBalance", {
        get: function () {
            return this.balance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setBalance", {
        set: function (balance) {
            this.balance = balance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getNoofshares", {
        get: function () {
            return this.noofshares;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setNoofshares", {
        set: function (no) {
            this.noofshares = no;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
