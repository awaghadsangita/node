/*********************************************************************************************************
 * @purpose	:this is utility class contain all methods require to implement address book
 *  
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const createIfNotExist = require("create-if-not-exist");
const personPOJO = require('./Person');
const addressPOJO = require('./Address');
const fs = require('fs');
const path = require('path');
class AddressBookUtility {
    /**
     * variable personArray :contain json array of persons of address book
     * variable filename :contain existing address book file name which user opens 
     */
    constructor() {
        this.personArray;
        this.filename;
    }
    /**
     * 
     * @param {*} addressbookName :contain existing address book file name which user opens 
     */
    openAddressBook(addressbookName) {
        try {
            if(addressbookName===undefined)
            {
                throw new Error('name should not be undefined');
            }
            
            if(addressbookName==null)
            {
                throw new Error('name should not be null');
            }
            
            if(typeof addressbookName!='string')
            {
                throw new Error('name should be string');
            }
            let dir = "./AddressBookFiles/";
            let files = fs.readdirSync(dir);
            let isFound=false;
            for (let i = 0; i < files.length; i++) {
                if(path.parse(files[i]).name.toUpperCase()==addressbookName.toUpperCase())
                {
                    isFound=true;
                }
            }
            if(isFound==false)
            {
                throw new Error(`Addreesbook with name ${addressbookName} not found`);
            }
            let fileName = './AddressBookFiles/' + addressbookName + ".json";
            let jsonString = fs.readFileSync(fileName);
            this.personArray = JSON.parse(jsonString);
            this.filename=fileName;
            return this.personArray;
        } catch (e) {
            return e;
        }
    }
    /**
     * shows list of address book
     */
    showAddressBook() {
        let dir="./AddressBookFiles/";
        let files = fs.readdirSync(dir)
        return files;
    }
    /**
     * 
     * @param {*} fname :first name of person
     * @param {*} lname :last name of person
     * @param {*} address :area address of person
     * @param {*} city :city in which person live
     * @param {*} state :state in which person situated
     * @param {*} zip :zip code of state
     * @param {*} ph :phone number of person
     */
    addPerson(fname,lname,address,city,state,zip,ph){
        try{
            if(fname===undefined)
            {
                throw new Error('first name should not be undefined');
            }
            
            if(fname==null)
            {
                throw new Error('first name should not be null');
            }
            
            if(typeof fname!='string')
            {
                throw new Error('first name should be string');
            }
            
            if(lname===undefined)
            {
                throw new Error('last name should not be undefined');
            }
            if(lname==null)
            {
                throw new Error('last name should not be null');
            }
            if(typeof lname!='string')
            {
                throw new Error('last name should be string');
            }
            
            let addressRegex=/^[a-zA-Z0-9 -]{1,}$/;
            if(!addressRegex.test(address))
            {
                throw new Error('address may contain space - and must be alphanumeric');
            }
            if(city===undefined)
            {
                throw new Error('city should not be undefined');
            }
            
            if(city==null)
            {
                throw new Error('city should not be null');
            }
            
            if(typeof city!='string')
            {
                throw new Error('city should be string');
            }
            if(state===undefined)
            {
                throw new Error('state should not be undefined');
            }
            
            if(state==null)
            {
                throw new Error('state should not be null');
            }
            
            if(typeof state!='string')
            {
                throw new Error('state should be string');
            }
            let zipRegex=/^[1-9]{1}[0-9]{5}$/;
            if(!zipRegex.test(zip))
            {
                throw new Error('zip should be 6 digit long');
            }
            let phRegex=/^[7-9]{1}[0-9]{9}$/;
            if(!phRegex.test(ph))
            {
                throw new Error('phone number should start with 7,8 or 9 and must be 10 digit long');
            }
            let personObj=new personPOJO.Person();
            if(this.personArray.length==0)
            {
                personObj.setPersonId(1);
            }
            else
            {
                personObj.setPersonId(this.personArray[this.personArray.length].personId+1);
            }
            personObj.setFirstName(fname);
            personObj.setLastName(lname);
            let addressObj=new addressPOJO.Address();
            addressObj.setAddress(address);
            addressObj.setCity(city);
            addressObj.setState(state);
            addressObj.setZip(zip);
            personObj.setAddress(addressObj);
            personObj.setPhone(ph);
            this.personArray.push(personObj);
            this.save(this.filename,this.personArray);// call save method after person object push into personArray
            return personObj.getPersonId();//person id for reference
        }
        catch(e)
        {
            return e;
        }
    }
    /**
     * 
     * @param {*} pid :person id which is provided by address book
     * @param {*} fname :first name of person
     * @param {*} lname :last name of person
     * @param {*} address :address of person
     * @param {*} city :city of person
     * @param {*} state :state in which city situated
     * @param {*} zip :zip code of person
     */
    updateAddress(pid,fname,lname,address,city,state,zip,){
        try{
            let regexPid=/^[0-9]{1,}$/;
            if(!regexPid.test(pid))
            {
                throw new Error('pid should be number');
            }
            
            if(fname===undefined)
            {
                throw new Error('first name should not be undefined');
            }
            
            if(fname==null)
            {
                throw new Error('first name should not be null');
            }
            
            if(typeof fname!='string')
            {
                throw new Error('first name should be string');
            }
            
            if(lname===undefined)
            {
                throw new Error('last name should not be undefined');
            }
            if(lname==null)
            {
                throw new Error('last name should not be null');
            }
            if(typeof lname!='string')
            {
                throw new Error('last name should be string');
            }
            let addressRegex=/^[a-zA-Z0-9 -]{1,}$/;
            if(!addressRegex.test(address))
            {
                throw new Error('address may contain space - and must be alphanumeric');
            }
            if(city===undefined)
            {
                throw new Error('city should not be undefined');
            }
            
            if(city==null)
            {
                throw new Error('city should not be null');
            }
            
            if(typeof city!='string')
            {
                throw new Error('city should be string');
            }
            if(state===undefined)
            {
                throw new Error('state should not be undefined');
            }
            
            if(state==null)
            {
                throw new Error('state should not be null');
            }
            
            if(typeof state!='string')
            {
                throw new Error('state should be string');
            }
            let zipRegex=/^[1-9]{1}[0-9]{5}$/;
            if(!zipRegex.test(zip))
            {
                throw new Error('zip should be 6 digit long');
            }
            let addressObj=new addressPOJO.Address();
            let isFound=false;
            let index=-1;
            for(let i=0;i<this.personArray.length;i++)
            {
                if(this.personArray[i].personId==pid)
                {
                    if(this.personArray[i].firstName==fname && this.personArray[i].lastName==lname)
                    {
                        isFound=true;
                        index=i;
                        addressObj.setAddress(address);
                        addressObj.setCity(city);
                        addressObj.setState(state);
                        addressObj.setZip(zip);
                        this.personArray[index].address=addressObj;
                        
                        this.save(this.filename,this.personArray);//call save method after updation is done
                        return 'success';
                    }
                }
            }
            //if requested person id and firstname and lastname does not match
            if(isFound==false){
                throw new Error(`person with ${pid} && name ${fname} ${lname} does not exist`);
           }
        }catch(e)
        {
            return e;
        }
    }
    /**
     * 
     * @param {*} pid :person id provided at time when person added into address book
     * @param {*} fname :first name 
     * @param {*} lname :last name
     * @param {*} ph :updated phone number
     */
    updatePhone(pid,fname,lname,ph){
        try{
            let regexPid=/^[0-9]{1,}$/;
            if(!regexPid.test(pid))
            {
                throw new Error('pid should be number');
            }

            let regex=/^[a-zA-Z]{1,}$/;
            if(!regex.test(fname))
            {
                throw new Error('first name should contain letters only');
            }
            if(!regex.test(lname))
            {
                throw new Error('last name should contain letters only');
            }
            let phRegex=/^[7-9]{1}[0-9]{9}$/;
            if(!phRegex.test(ph))
            {
                throw new Error('invalid phone number');
            }
            let addressObj=new addressPOJO.Address();
            let isFound=false;
            let index=-1;
            for(let i=0;i<this.personArray.length;i++)
            {
                if(this.personArray[i].personId==pid)//find array element equal to given person id
                {
                    if(this.personArray[i].firstName==fname && this.personArray[i].lastName==lname)
                    {
                        isFound=true;
                        index=i;
                        
                        this.personArray[i].phone=ph;//update the person id
                        this.save(this.filename,this.personArray);
                        return 'success';
                    }
                }
            }
            //if requested person id and firstname and last name does not match with any element of array
            if(isFound==false && index==-1)
            {
                throw new Error(`person with ${pid} && name ${fname} ${lname} does not exist`);
           }
        }catch(e)
        {
            console.log(e);
            return e;
        }
    }
    /**
     * 
     * @param {*} pid person id provided at time when person added into address book
     * @param {*} fname :first name 
     * @param {*} lname :last name
     */
    deletePerson(pid,fname,lname){
        try{
            let regexPid=/^[0-9]{1,}$/;
            if(!regexPid.test(pid))
            {
                throw new Error('pid should be number');
            }

            let regex=/^[a-zA-Z]{1,}$/;
            if(!regex.test(fname))
            {
                throw new Error('first name should contain letters only');
            }
            if(!regex.test(lname))
            {
                throw new Error('last name should contain letters only');
            }
            for(let i=0;i<this.personArray.length;i++)
            {
                if(this.personArray[i].personId==pid)
                {
                    if(this.personArray[i].firstName==fname && this.personArray[i].lastName==lname)
                    {
                        this.personArray.splice(i, 1);
                        this.save(this.filename,this.personArray);
                        return 'success';
                    }
                }
            }
        }catch(e)
        {
            
            return e;
        }
    }
    /**
     * sort personArray element by lastname by bubble sort
     */
    sortByLastname(){
        try{
            for (let i = 0; i < this.personArray.length; i++) {//perform number of iteration
                for (let j = 0; j < this.personArray.length - i-1; j++) {//perform number of comparision
                    if (this.personArray[j].lastName > this.personArray[j + 1].lastName) {
                        let temp = this.personArray[j];
                        this.personArray[j] = this.personArray[j + 1];
                        this.personArray[j + 1] = temp;
                    }
                }
            }
            return this.personArray;
        }catch(e)
        {
            return e;
        }
    }
    /**
     * sort personArray element by zip by bubble sort
     */
    sortByZip(){
        try{
            for (let i = 0; i < this.personArray.length; i++) {//required for number of iteration
                for (let j = 0; j < this.personArray.length - i-1; j++) {//required for comparision
                    if (this.personArray[j].address.zip > this.personArray[j + 1].address.zip) {
                        let temp = this.personArray[j];
                        this.personArray[j] = this.personArray[j + 1];
                        this.personArray[j + 1] = temp;
                    }
                }
            }
            return this.personArray;
        }catch(e)
        {
            return e;
        }
    }
    /**
     * 
     * @param {*} addressbookname :gives name of addressbook which you are going to do
     */
    createNewAddressBook(addressbookname)
    {
        try{
            let dir = "./AddressBookFiles/";
            let filename = this.showAddressBook();
            for (let i = 0; i < filename.length; i++) {//find if given addressbook name already exist or not
                if(path.parse(filename[i]).name.toUpperCase()==addressbookname.toUpperCase())
                    throw `${addressbookname} named address book already exist`;
            }
            let fileN="./AddressBookFiles/"+addressbookname+".json";
            createIfNotExist(fileN,'[]');
            return 'success';
        }catch(e)
        {
            return e;
        }
    }
    /**
     * 
     * @param {*} filename :name of address book in which you want to save person array
     */
    save(filename)
    {
        let jsonString=JSON.stringify(this.personArray);
        fs.writeFileSync(filename,jsonString);
    }
}
module.exports = { AddressBookUtility };