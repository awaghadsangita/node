"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility = require("../Utility/utility");
var implementationAddressbook_1 = require("./implementationAddressbook");
var path = require("path");
var MainClass = /** @class */ (function () {
    function MainClass() {
    }
    MainClass.prototype.mainMethod = function () {
        try {
            var userChoice = void 0;
            var implementationClassObj = new implementationAddressbook_1.ImplementationClass();
            do {
                console.log('\n*******************************************************************************************************');
                console.log('\t\t\t1.Create New Addressbook');
                console.log('\t\t\t2.Open Existing Addressbook');
                console.log('\t\t\t3.Exit');
                console.log('\n*******************************************************************************************************');
                process.stdout.write('\t\t\tEnter your choice :');
                userChoice = utility.getNumber();
                switch (userChoice) {
                    case 1:
                        {
                            process.stdout.write('Enter Addrssbook name');
                            var name_1 = utility.getString();
                            var isCreated = implementationClassObj.createAddressBook(name_1);
                            if (isCreated instanceof Error) {
                                throw isCreated.message;
                            }
                        }
                        break;
                    case 2:
                        {
                            console.log('-------------------------------------------------------------------------------------------------------');
                            console.log('\t\t\t1.OPEN EXISTING ADDRESSBOOK   \t\t');
                            console.log('-------------------------------------------------------------------------------------------------------');
                            var AddressbookNamesArray = implementationClassObj.showAddressBookName();
                            var k = 1;
                            for (var i = 0; i < AddressbookNamesArray.length; i++) {
                                if (path.extname(AddressbookNamesArray[i]) == ".json") {
                                    console.log(k + " " + path.parse(AddressbookNamesArray[i]).name);
                                    k = k + 1;
                                }
                            }
                            process.stdout.write('Enter the Name of Addressbook :');
                            var addressbookname = utility.getString();
                            var isFound = implementationClassObj.isExistAddressbook(addressbookname);
                            console.log(" file exist", isFound);
                            if (isFound === true) {
                                implementationClassObj.setAddressbookName = addressbookname.toUpperCase() + '.json';
                                console.log('1.Add Person');
                                console.log('2.Update Information');
                                console.log('3.Delete Person From Addressbook');
                                console.log('4.Sort by Lastname');
                                console.log('5.Sort by Zip');
                                process.stdout.write('Enter your Choice :');
                                var choice = utility.getNumber();
                                switch (choice) {
                                    case 1:
                                        {
                                            process.stdout.write('\nEnter the first name :');
                                            var fname = utility.getString();
                                            process.stdout.write('Enter the last name :');
                                            var lname = utility.getString();
                                            process.stdout.write('Enter the address :');
                                            var address = utility.getString();
                                            process.stdout.write('Enter the city :');
                                            var city = utility.getString();
                                            process.stdout.write('Enter the state :');
                                            var state = utility.getString();
                                            process.stdout.write('Enter the zip :');
                                            var zip = utility.getString();
                                            process.stdout.write('Enter the phone number :');
                                            var ph = utility.getString();
                                            var id = implementationClassObj.addPerson(fname, lname, address, city, state, zip, ph);
                                            if (id instanceof Error) {
                                                throw id.message;
                                            }
                                            process.stdout.write('Your registartion id is :' + id + "\n");
                                        }
                                        break;
                                    case 2:
                                        {
                                            process.stdout.write('\nEnter the registration id :');
                                            var id = utility.getNumber();
                                            var isFound_1 = implementationClassObj.findPerson(id);
                                            if (isFound_1 instanceof Error) {
                                                throw isFound_1.message;
                                            }
                                            if (isFound_1 != -1) {
                                                console.log('1.Update Address');
                                                console.log('2.update Phone number');
                                                console.log('enter your choice :');
                                                var innerchoice = utility.getNumber();
                                                switch (innerchoice) {
                                                    case 1:
                                                        {
                                                            process.stdout.write('\nEnter the address :');
                                                            var address = utility.getString();
                                                            process.stdout.write('Enter the city :');
                                                            var city = utility.getString();
                                                            process.stdout.write('Enter the state :');
                                                            var state = utility.getString();
                                                            process.stdout.write('Enter the zip :');
                                                            var zip = utility.getString();
                                                            var isSuccessfull = implementationClassObj.updateAddress(isFound_1, address, city, state, zip);
                                                            if (isSuccessfull instanceof Error) {
                                                                throw isSuccessfull.message;
                                                            }
                                                        }
                                                        break;
                                                    case 2:
                                                        {
                                                            process.stdout.write('Enter the Phone number :');
                                                            var ph = utility.getString();
                                                            var isSuccssfull = implementationClassObj.updatePhone(isFound_1, ph);
                                                            if (isSuccssfull instanceof Error) {
                                                                throw isSuccssfull.message;
                                                            }
                                                        }
                                                        break;
                                                    default: {
                                                        console.log('Invalid choice');
                                                    }
                                                }
                                            }
                                            else {
                                                console.log('Registartion id does not exist');
                                            }
                                        }
                                        break;
                                    case 3:
                                        {
                                            console.log('Enter the registration id :');
                                            var id = utility.getNumber();
                                            var isdeleted = implementationClassObj.deletePerson(id);
                                            if (isdeleted instanceof Error) {
                                                throw isdeleted.message;
                                            }
                                        }
                                        break;
                                    case 4:
                                        {
                                            implementationClassObj.sortByLastName();
                                        }
                                        break;
                                    case 5:
                                        {
                                            implementationClassObj.sortByZip();
                                        }
                                        break;
                                }
                            }
                        }
                }
            } while (userChoice != 3);
        }
        catch (e) {
            console.log('Error Occured :', e);
        }
    };
    return MainClass;
}());
exports.MainClass = MainClass;
var obj = new MainClass();
obj.mainMethod();
