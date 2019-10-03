/*********************************************************************************************************
 * @purpose	:address class contain variable and setters and getters
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
class Address
{
    constructor()
    {
        this.address="";
        this.city="";
        this.state="";
        this.zip="";
    }
    getAddress()
    {
        return this.address;
    }
    setAddress(address)
    {
        this.address=address;
    }
    getCity()
    {
        return this.city;
    }
    setCity(city)
    {
        this.city=city;
    }
    getState()
    {
        return this.state;
    }
    setState(state)
    {
        this.state=state;
    }
    getZip()
    {
        return this.zip;
    }
    setZip(zip)
    {
        this.zip=zip;
    }
}
module.exports={Address}