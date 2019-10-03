"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.address = { "address": "", "city": "", "state": "", "zip": 0 };
        this.phone = 0;
    }
    Object.defineProperty(Person.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setFirstName", {
        set: function (fname) {
            this.firstName = fname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setLastName", {
        set: function (lname) {
            this.lastName = lname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getAddress", {
        get: function () {
            return this.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setAddress", {
        set: function (address) {
            this.address = address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getPhone", {
        get: function () {
            return this.phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setPhone", {
        set: function (ph) {
            this.phone = ph;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
/**
 * class Name{
    private _name: string;

    getMethod(): string{
        return this._name;
    }

    setMethod(value: string){
        this._name = value
    }

    get getMethod1(): string{
        return this._name;
    }

    set setMethod1(value: string){
        this._name = value
    }
}

class HelloWorld {

    public static main(){

        let test = new Name();

        test.setMethod('test.getMethod() --- need ()');
            console.log(test.getMethod());

        test.setMethod1 = 'test.getMethod1 --- no need (), and used = for set ';
            console.log(test.getMethod1);
    }
}
tsc --target es5
 */ 
