export interface IAddressbook{
    isExistAddressbook(filename: string): any;
    showAddressBookName(): string[];
    createAddressBook(abName: string): any;
    addPerson(fname: string, lname: string, address: string, city: string, state: string, zip: string, ph: string):any;
    findPerson(id: number): number;
    updateAddress(arrayindex: number, address: string, city: string, state: string, zip: string): any ;
    updatePhone(arrayindex: number, ph: string): any;
    deletePerson(id: number):any ;
    sortByLastName():any;
    sortByZip():any;
    writeToJsonArray():any;
}