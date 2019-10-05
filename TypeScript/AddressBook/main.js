"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************************************************
 * @purpose	:contains runnere methods required to perform various operation on addressbook
 *
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 *
 **********************************************************************************************************/
var utility = require("../Utility/utility");
var implementationAddressbook_1 = require("./implementationAddressbook");
var path = require("path");
var MainClass = /** @class */ (function () {
    function MainClass() {
    }
    /**
     * @description:runner method
     */
    MainClass.prototype.mainMethod = function () {
        try {
            var userChoice = void 0;
            var implementationClassObj = new implementationAddressbook_1.ImplementationClass();
            do {
                /**shows various option to users */
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
                            /**create new address book */
                            process.stdout.write('Enter Addrssbook name');
                            var name_1 = utility.getString(); //take name of address book
                            var isCreated = implementationClassObj.createAddressBook(name_1);
                            if (isCreated instanceof Error) //createaddressbook method return error object
                             {
                                throw isCreated.message;
                            }
                        }
                        break;
                    case 2:
                        {
                            /**open existing addressbook */
                            console.log('-------------------------------------------------------------------------------------------------------');
                            console.log('\t\t\t1.OPEN EXISTING ADDRESSBOOK   \t\t');
                            console.log('-------------------------------------------------------------------------------------------------------');
                            var AddressbookNamesArray = implementationClassObj.showAddressBookName();
                            var k = 1;
                            /**display all addressbook present in directory */
                            for (var i = 0; i < AddressbookNamesArray.length; i++) {
                                if (path.extname(AddressbookNamesArray[i]) == ".json") {
                                    console.log(k + " " + path.parse(AddressbookNamesArray[i]).name);
                                    k = k + 1;
                                }
                            }
                            process.stdout.write('Enter the Name of Addressbook :');
                            var addressbookname = utility.getString(); //take addressbook name
                            /**check addressbook exist or not */
                            var isFound = implementationClassObj.isExistAddressbook(addressbookname);
                            console.log(" file exist", isFound);
                            if (isFound === true) {
                                /**if addressbook exist shows various options to user */
                                implementationClassObj.setAddressbookName = addressbookname.toUpperCase() + '.json';
                                console.log('1.Add Person');
                                console.log('2.Update Information');
                                console.log('3.Delete Person From Addressbook');
                                console.log('4.Sort by Lastname');
                                console.log('5.Sort by Zip');
                                process.stdout.write('Enter your Choice :');
                                var choice = utility.getNumber(); //take choice from user
                                switch (choice) {
                                    /**add new person in addressbook */
                                    case 1:
                                        {
                                            /**take all information of person from console */
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
                                            /**call addPerson method */
                                            var id = implementationClassObj.addPerson(fname, lname, address, city, state, zip, ph);
                                            if (id instanceof Error) //addperson throw error object
                                             {
                                                throw id.message;
                                            }
                                            process.stdout.write('Your registartion id is :' + id + "\n");
                                        }
                                        break;
                                    /**case for update information of person */
                                    case 2:
                                        {
                                            process.stdout.write('\nEnter the registration id :');
                                            var id = utility.getNumber(); //take id of person
                                            /**find whether person found in directory or not */
                                            var isFound_1 = implementationClassObj.findPerson(id);
                                            if (isFound_1 instanceof Error) //findperson throw error object
                                             {
                                                throw isFound_1.message;
                                            }
                                            if (isFound_1 != -1) {
                                                /**if person found show various opetion to hu=im */
                                                console.log('1.Update Address');
                                                console.log('2.update Phone number');
                                                console.log('enter your choice :');
                                                var innerchoice = utility.getNumber();
                                                switch (innerchoice) {
                                                    case 1:
                                                        {
                                                            /**take complete address from him */
                                                            process.stdout.write('\nEnter the address :');
                                                            var address = utility.getString();
                                                            process.stdout.write('Enter the city :');
                                                            var city = utility.getString();
                                                            process.stdout.write('Enter the state :');
                                                            var state = utility.getString();
                                                            process.stdout.write('Enter the zip :');
                                                            var zip = utility.getString();
                                                            /**call update address method */
                                                            var isSuccessfull = implementationClassObj.updateAddress(isFound_1, address, city, state, zip);
                                                            if (isSuccessfull instanceof Error) //if updateaddress method throws error object
                                                             {
                                                                throw isSuccessfull.message;
                                                            }
                                                        }
                                                        break;
                                                    /**case for updating mobile number */
                                                    case 2:
                                                        {
                                                            process.stdout.write('Enter the Phone number :');
                                                            var ph = utility.getString(); //take mobile number from user
                                                            var isSuccssfull = implementationClassObj.updatePhone(isFound_1, ph);
                                                            if (isSuccssfull instanceof Error) //if updatePhone throw error object
                                                             {
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
                                    /**case to delete person from addressbook */
                                    case 3:
                                        {
                                            console.log('Enter the registration id :');
                                            var id = utility.getNumber(); //take id of person
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
