/*********************************************************************************************************
 * @purpose	:person class contain variable and setters and getters
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const addressUtility=require('./Address');
class Person{
    constructor()
    {
        this.personId=""
        this.firstName="";
        this.lastName="";
        this.address=new addressUtility.Address();
        this.phone="";
    }
    getPersonId()
    {
        return this.personId;
    }
    setPersonId(pid)
    {
        this.personId=pid;
    }
    getFirstName()
    {
        return this.address;
    }
    setFirstName(fname)
    {
        this.firstName=fname;
    }
    getLastName()
    {
        return this.lastName;
    }
    setLastName(lname)
    {
        this.lastName=lname;
    }
    getAddress()
    {
        return this.address;
    }
    setAddress(address)
    {
        this.address=address;
    }
    getPhone()
    {
        return this.phone;
    }
    setPhone(ph)
    {
        this.phone=ph;
    }
}
module.exports={Person}