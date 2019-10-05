"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var fs = require("fs");
var path = require("path");
var ImplementationClass = /** @class */ (function () {
    function ImplementationClass() {
        this.addressbookName = "";
        this.personArray = [{ "id": 0, "firstname": "abc", "lastname": "abc", address: { "address": "abc", "city": "jalna", "state": "maharshtra", "zip": 431203 }, "phone": 9422329006 }];
    }
    Object.defineProperty(ImplementationClass.prototype, "getAddressbookName", {
        get: function () {
            return this.addressbookName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImplementationClass.prototype, "setAddressbookName", {
        set: function (addressbookname) {
            this.addressbookName = addressbookname;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description:find whether given filename is exist or not
     * @param filename :filename to search
     */
    ImplementationClass.prototype.isExistAddressbook = function (filename) {
        try {
            if (filename == undefined || filename == null) {
                throw new Error('filename should not be undefined or null');
            }
            /**regex for file name */
            var filenameRegx = /^[a-zA-Z]{2,}$/;
            if (!filenameRegx.test(filename)) {
                throw new Error('filename must be atleast 2 character long and must contains letters only');
            }
            var dir = "./";
            /**contails all files in given directory */
            var files = fs.readdirSync(dir);
            var isFound = false;
            /**iterate files array for checking given file name is present in list or not */
            for (var i = 0; i < files.length; i++) {
                if (path.parse(files[i]).name.toUpperCase() == filename.toUpperCase()) {
                    isFound = true;
                    var fileName = path.parse(files[i]).name + ".json";
                    var jsonString = fs.readFileSync(files[i]);
                    this.addressbookName = fileName;
                    this.personArray = JSON.parse(jsonString.toString());
                }
            }
            return isFound;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:shows list of addressbook present in current directory
     */
    ImplementationClass.prototype.showAddressBookName = function () {
        try {
            var dir = "./";
            /**read the directory */
            var files = fs.readdirSync(dir);
            return files;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:create address book if not exist
     * @param abName :addressbook name
     */
    ImplementationClass.prototype.createAddressBook = function (abName) {
        try {
            /**check whether addressbook exist */
            var isFound = this.isExistAddressbook(abName);
            if (isFound instanceof Error) {
                throw isFound;
            }
            /**if address book not present in directory then create it */
            if (isFound === false) {
                var fileN = abName.toUpperCase() + ".json";
                console.log("file name" + fileN);
                //let strings={"id":0,"firstname":"lkjh","lastname":"ffff","address":{"address":"ffff","city":"ffff","state":"ffff","zip":123456},"phone":9874561230};
                var strings = [JSON.stringify({ "id": 0, "firstname": " ", "lastname": " ", "address": {} })];
                fs.writeFileSync(fileN, "[" + strings + "]");
                return "success";
            }
            return "failed";
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:add new person in address book
     * @param fname :firstname of person
     * @param lname :lastname of person
     * @param address :address of person
     * @param city :city in which person live
     * @param state :state in which city present
     * @param zip :zip code of city
     * @param ph :mobile number of person
     */
    ImplementationClass.prototype.addPerson = function (fname, lname, address, city, state, zip, ph) {
        try {
            if (fname == undefined || fname == null) {
                throw new Error('firstname should not be undefine or null');
            }
            // let nameregx = new RegExp('/^[a-zA-Z]{2,}$/');
            var nameregx = /^[a-zA-Z]{2,}$/;
            if (!nameregx.test(fname)) {
                throw new Error('firstname must contains letters only and must be atleast 2 character long');
            }
            if (lname == undefined || lname == null) {
                throw new Error('lastname should not be undefine or null');
            }
            var lnameregx = /^[a-zA-Z]{2,}$/;
            if (!lnameregx.test(lname)) {
                throw new Error('lastname must contains letters only and must be atleast 2 character long');
            }
            if (address == undefined || address == null) {
                throw new Error('address should not be undefined or null');
            }
            var addressregx = /^[a-zA-Z0-9-_, ]{2,}$/;
            if (!addressregx.test(address)) {
                throw new Error('address must be atleast 2 character long');
            }
            if (city == undefined || city == null) {
                throw new Error('city should not be undefined or null');
            }
            if (!nameregx.test(city)) {
                throw new Error('city must contains letters only and must be atleast 2 character long');
            }
            if (state == undefined || state == null) {
                throw new Error('state should not be undefined or null');
            }
            if (!nameregx.test(state)) {
                throw new Error('state must contains letters only and must be atleast 2 character long');
            }
            if (zip == undefined || zip == null) {
                throw new Error('zip should not be undefined or null');
            }
            var zipregex = /^[0-9]{6}$/;
            if (!zipregex.test(zip)) {
                throw new Error('zip must be 6 digit long');
            }
            if (ph == undefined || ph == null) {
                throw new Error('mobile number should not be undefined or null');
            }
            var phoneregex = /^[7-9]{1}[0-9]{9}$/;
            if (!phoneregex.test(ph)) {
                throw new Error('phone number must start with 7,8 or 9 and must be 10 digit long');
            }
            /**store information in person class object */
            var personObj = new person_1.Person();
            var sortedArray = Array.from(this.personArray);
            personObj.setId = this.personArray[sortedArray.length - 1]['id'] + 1;
            personObj.setFirstName = fname;
            personObj.setLastName = lname;
            /**create a address json object from data */
            var personArray = { "address": address, "city": city, "state": state, "zip": Number(zip) };
            personObj.setAddress = personArray;
            personObj.setPhone = Number(ph);
            /**create store all details in person json object */
            var personJsonObject = { "id": personObj.getId, "firstname": personObj.getFirstName, "lastname": personObj.getLastName, "address": personObj.getAddress, "phone": personObj.getPhone };
            /**create new file then file contain one json object with id zero */
            if (this.personArray[0]['id'] == 0) {
                this.personArray[0] = personJsonObject;
            }
            else { //otherwise push person json object into personArray
                this.personArray.push(personJsonObject);
            }
            /**call method to write data into json file */
            this.writeToJsonArray();
            return personObj.getId;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:find person from person id in addressbook
     * @param id :id of person
     */
    ImplementationClass.prototype.findPerson = function (id) {
        try {
            if (id == undefined || id == null) {
                throw new Error('person registration id should not be undefined or null');
            }
            var idRegx = new RegExp('/^$[0-9]{1,}$/');
            if (!idRegx.test(id.toString())) {
                throw new Error('Registration id must be positive number');
            }
            var isFound = -1;
            /**iterate personArray to search for given id */
            for (var i = 0; i < this.personArray.length; i++) {
                if (this.personArray[i]['id'] == id) {
                    isFound = i;
                }
            }
            return isFound;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:update address of person
     * @param arrayindex :index get from findPerson method
     * @param address :address of person
     * @param city :city of person
     * @param state :state of city
     * @param zip :zip code of city
     */
    ImplementationClass.prototype.updateAddress = function (arrayindex, address, city, state, zip) {
        try {
            if (arrayindex == undefined || arrayindex == null) {
                throw new Error('array index should not be undefined or null');
            }
            if (arrayindex < 0) {
                throw new Error('array index must be positive number');
            }
            if (address == undefined || address == null) {
                throw new Error('address should not be undefined or null');
            }
            var addressregx = /^[a-zA-Z0-9-_, ]{2,}$/;
            if (!addressregx.test(address)) {
                throw new Error('address must be atleast 2 character long');
            }
            if (city == undefined || city == null) {
                throw new Error('city should not be undefined or null');
            }
            var nameregx = /^[a-zA-Z]{2,}$/;
            if (!nameregx.test(city)) {
                throw new Error('city must contains letters only and must be atleast 2 character long');
            }
            if (state == undefined || state == null) {
                throw new Error('state should not be undefined or null');
            }
            if (!nameregx.test(state)) {
                throw new Error('state must contains letters only and must be atleast 2 character long');
            }
            if (zip == undefined || zip == null) {
                throw new Error('zip should not be undefined or null');
            }
            var zipregex = /^[0-9]{6}$/;
            if (!zipregex.test(zip)) {
                throw new Error('zip must be 6 digit long');
            }
            /**create json object from information */
            var adddressObj = { "address": address, "city": city, "state": state, "zip": Number(zip) };
            /**update address of person */
            this.personArray[arrayindex].address = adddressObj;
            /**write to json file */
            this.writeToJsonArray();
            return 1;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:update the phone number of person
     * @param arrayindex :get index from findPerson method
     * @param ph :mobile number of person
     */
    ImplementationClass.prototype.updatePhone = function (arrayindex, ph) {
        try {
            if (arrayindex == undefined || arrayindex == null) {
                throw new Error('array index should not be undefined or null');
            }
            if (arrayindex < 0) {
                throw new Error('array index must be positive number');
            }
            if (ph == undefined || ph == null) {
                throw new Error('mobile number should not be undefined or null');
            }
            var phoneregex = /^[7-9]{1}[0-9]{9}$/;
            if (!phoneregex.test(ph)) {
                throw new Error('phone number must start with 7,8 or 9 and must be 10 digit long');
            }
            /**update mobile number of person */
            this.personArray[arrayindex]['phone'] = Number(ph);
            this.writeToJsonArray();
            return 1;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:delete person from address book
     * @param id :id of person
     */
    ImplementationClass.prototype.deletePerson = function (id) {
        try {
            if (id == undefined || id == null) {
                throw new Error('Registration id should not be undefined or null');
            }
            if (id < 0) {
                throw new Error('Registration id must be positive number');
            }
            var isFound = false;
            /**iterate person array to search given id if found delete it else throw error object */
            for (var i = 0; i < this.personArray.length; i++) {
                if (this.personArray[i]['id'] == id) {
                    isFound = true;
                    this.personArray.splice(i, 1);
                    this.writeToJsonArray();
                }
            }
            if (isFound === false) {
                throw new Error('Registration Id does not Exist');
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:sort person array by last name for sorting used bubble sort
     */
    ImplementationClass.prototype.sortByLastName = function () {
        try {
            var sortedArray = Array.from(this.personArray);
            for (var i = 1; i < sortedArray.length; i++) {
                for (var j = 1; j < sortedArray.length - 1; j++) {
                    if (sortedArray[j]['lastname'].localeCompare(sortedArray[j + 1]['lastname']) > 0) {
                        var temp = sortedArray[j];
                        sortedArray[j] = sortedArray[j + 1];
                        sortedArray[j + 1] = temp;
                    }
                }
            }
            for (var i = 0; i < sortedArray.length; i++) {
                console.log(sortedArray[i]['id'] + "\t" + sortedArray[i]['firstname'] + " " + sortedArray[i]["lastname"] + "\t" + sortedArray[i]["phone"]);
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:sort person array by zip and for sorting used bubble sort
     */
    ImplementationClass.prototype.sortByZip = function () {
        try {
            var sortedArray = Array.from(this.personArray);
            for (var i = 1; i < sortedArray.length; i++) {
                for (var j = 1; j < sortedArray.length - 1; j++) {
                    if (sortedArray[j]['address']['zip'] > sortedArray[j + 1]['address']['zip']) {
                        var temp = sortedArray[j];
                        sortedArray[j] = sortedArray[j + 1];
                        sortedArray[j + 1] = temp;
                    }
                }
            }
            for (var i = 1; i < sortedArray.length; i++) {
                console.log(sortedArray[i]['address']['zip'] + "\t" + sortedArray[i]['id'] + "\t" + sortedArray[i]['firstname'] + " " + sortedArray[i]["lastname"] + "\t" + sortedArray[i]["phone"]);
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:write person json object array into file
     */
    ImplementationClass.prototype.writeToJsonArray = function () {
        try {
            var jsonString = JSON.stringify(this.personArray);
            fs.writeFileSync(this.addressbookName, jsonString);
        }
        catch (e) {
            return e;
        }
    };
    return ImplementationClass;
}());
exports.ImplementationClass = ImplementationClass;
