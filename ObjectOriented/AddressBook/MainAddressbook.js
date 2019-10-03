/*********************************************************************************************************
 * @purpose	:main class show similar to userinterface and given flow of control to addressbook
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const path = require('path');
const utility = require('../../Utility/Utility');//utility class
const AddressBookUtility = require('./AddressBookUtility');
class Main{
main()
{
    try{
        let addressbookObj = new AddressBookUtility.AddressBookUtility();//create addressbook utility class object
        let choice;
        do{
            console.log('********************************************************************************************************************************************');
                console.log('*********************************\t\t1.Create New Address Book          \t\t\t****************************************');
                console.log('*********************************\t\t2.Open Existing Address Book        \t\t\t****************************************');
                console.log('*********************************\t\t3.Exit                               \t\t\t****************************************');
                process.stdout.write('*********************************\t\tEnter your choice :');
                choice = utility.getInputNumber();//get integer choice from user
                console.log('********************************************************************************************************************************************');
                switch(choice)
                {
                    case 1:{//case for creating new address book
                        process.stdout.write('\t\tEnter the Name of addressbook');
                        let addbookname=utility.getString();//given alphabetical input otherwise throws Exception
                        if(addbookname instanceof Error)
                        {
                            throw addbookname.message.toString();
                        }
                        let tc=addressbookObj.createNewAddressBook(addbookname);//call createNewAddressBook method
                        if(tc instanceof Error)//above method throws error object then this block executed
                        {
                            throw tc.message.toString();
                        }
                        if(tc=='success')//if new address book successfully executed
                        {
                            console.log(`${addbookname} is created`);
                        }
                    }break;
                    case 2:{//open existing addressbook
                        console.log('---------------------------------\tLIST OF ADDRESS BOOKS\t-----------------------------------------------------');
                        let filename = addressbookObj.showAddressBook();//return array of file name
                        for (let i = 0; i < filename.length; i++) {
                            let k = i + 1;
                            console.log(`\t\t${k}. ${path.parse(filename[i]).name.toUpperCase()}`);
                        }
                        process.stdout.write('\t\tEnter Addressbook Name :');//get user addressbook name from above file
                        let addressbookName = utility.getString();//gives only alphabetical input
                        if(addressbookName instanceof Error)
                        {
                            throw addressbookName.message.toString();
                        }
                        let tc1 = addressbookObj.openAddressBook(addressbookName);//method to open addressbook
                        if (tc1 instanceof Error) {
                            throw tc1.message.toString();
                        }
                        let innerChoice;
                        do{
                            console.log('---------------------------------\t1.ADD PERSON                  \t\t---------------------------------');
                            console.log('---------------------------------\t2.UPDATE INFORMATION          \t\t---------------------------------');
                            console.log('---------------------------------\t3.DELETE PERSON               \t\t---------------------------------');
                            console.log('---------------------------------\t4.SORT BY LAST NAME           \t\t---------------------------------');
                            console.log('---------------------------------\t5.SORT BY ZIP                 \t\t---------------------------------');
                            console.log('---------------------------------\t6.Exit                        \t\t---------------------------------');

                            process.stdout.write('---------------------------------\tEnter your choice :');
                            innerChoice = utility.getInputNumber();
                            switch(innerChoice)
                            {
                                case 1:{//case for adding new user
                                    process.stdout.write('\t\tEnter First name :');
                                    let fname = utility.getString();
                                    process.stdout.write('\t\tEnter Last name :');
                                    let lname = utility.getString();
                                    process.stdout.write('\t\tEnter Address :');
                                    let address = utility.getNextLine();
                                    process.stdout.write('\t\tEnter city :');
                                    let city = utility.getString();
                                    process.stdout.write('\t\tEnter State :');
                                    let state = utility.getString();
                                    process.stdout.write('\t\tEnter Zip :');
                                    let zip = utility.getInputNumber();
                                    process.stdout.write('\t\tEnter Phone Number :');
                                    let ph = utility.getInputNumber();
                                    let tc1 = addressbookObj.addPerson(fname, lname, address, city, state, zip, ph);//call addPerson for adding person in the addressbook
                                    if (tc1 instanceof Error) {//if tc1 is instance of Error
                                        throw tc1.message.toString();
                                    }
                                    if (typeof tc1 == 'number') {//if tc1 is person id 
                                        process.stdout.write(`\n\t\tSuccessfully added into addressbook .Your ID is ${tc1}\n`);
                                    }
                                }break;
                                case 2:{//update information
                                    console.log('\t1.UPDATE ADDRESS');
                                    console.log('\t2.UPDATE MOBILE NUMBER');
                                    process.stdout.write('\tEnter your choice :');
                                    let choice1 = utility.getInputNumber();
                                    process.stdout.write('\t\tEnter Your Id :');
                                    let pid = utility.getInputNumber();
                                    process.stdout.write('\t\tEnter your first name :');
                                    let fname = utility.getString();
                                    process.stdout.write('\t\t\Enter your last name :');
                                    let lname = utility.getString();
                                 
                                    switch(choice1)
                                    {
                                        case 1:{//case 1 for updating address of person
                                            process.stdout.write('\t\t\Enter address :');
                                            let address = utility.getNextLine();
                                            process.stdout.write('\t\t\Enter city :');
                                            let city = utility.getString();
                                            process.stdout.write('\t\t\Enter state :');
                                            let state = utility.getString();
                                            process.stdout.write('\t\t\Enter zip :');
                                            let zip = utility.getNextLine();
                                            let tc1 = addressbookObj.updateAddress(pid, fname, lname, address, city, state, zip);//call updateAddress method to update the address
                                            if (tc1 instanceof Error) {//if tc1 is instance of Error
                                                throw tc1.message.toString();
                                            }
                                            if (tc1 == 'success') {//if tc1 return success
                                                console.log('successfully updated address')
                                            }

                                        }break;
                                        case 2:{//updating phone number
                                            process.stdout.write('\t\t\Enter phone');
                                            let phone = utility.getNextLine();

                                            let tc1 = addressbookObj.updatePhone(pid, fname, lname, phone);//call updatePhone method to update phone number
                                            if (tc1 instanceof Error) {//if tc1 is instance of Error
                                                throw tc1.message.toString();
                                            }
                                            if (tc1 == 'success') {//if tc1 gives success
                                                console.log('successfully updated phone number');
                                            }

                                        }break;
                                    }

                                }break;
                                case 3:{//case 3 for deleting person from addressbook
                                    console.log('\t\t1.DELETE PERSON FROM ADDRESS BOOK');
                                    process.stdout.write('\t\tEnter Your Id :');
                                    let pid = utility.getInputNumber();
                                    process.stdout.write('\t\tEnter your first name :');
                                    let fname = utility.getString();
                                    process.stdout.write('\t\t\Enter your last name :');
                                    let lname = utility.getString();
                                    let tc=addressbookObj.deletePerson(pid, fname, lname);//call deletePerson method from addressbook
                                    if(tc instanceof Error)//if tc1 is instance of Error
                                    {
                                        throw tc.message.toString();
                                    }
                                    if(tc=='success')//if tc1 gives success
                                    {
                                        console.log(`one record deleted from ${addressbookName} address book`);
                                    }
                                }break;
                                case 4:{//case 4 sort personarray by last name
                                    let tc1=addressbookObj.sortByLastname();//call sortByLastname() method
                                    if(tc1 instanceof Error)//if tc1 instance of Error
                                    {
                                        throw tc1.message.toString();
                                    }
                                    for(let i=0;i<tc1.length;i++)//print sorted array
                                    {
                                        console.log(`\t${tc1[i].firstName} ${tc1[i].lastName}   ${tc1[i].address.city}  ${tc1[i].phone}`)
                                    }
                                }break;
                                case 5:{//case 5 sort personarray by zip
                                    let tc1=addressbookObj.sortByZip();//call sortByZip() method to sort array by zip
                                    if(tc1 instanceof Error)//if tc1 instance of Error throw message
                                    {
                                        throw tc1.message.toString();
                                    }
                                    for(let i=0;i<tc1.length;i++)//print sorted array
                                    {
                                        console.log(`\t${tc1[i].address.zip}    ${tc1[i].firstName} ${tc1[i].lastName}   ${tc1[i].address.city}  ${tc1[i].phone}`)
                                    }

                                }break;
                                case 6://exiting case
                                    console.log('Exiting ...');
                            }    

                        }while(innerChoice!=6)
                        

                    }break;
                    case 3:{//existing case
                        console.log('Exiting ...');
                    }break;
                }
        }while(choice!=3);
    }catch(e)
    {
        //error handling
        console.log(`Error Occured : ${e}`);
    }
}
}

module.exports = { Main };
let obj = new Main();
obj.main();