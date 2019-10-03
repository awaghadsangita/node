/*************************************************************************************************
 * @purpose	:demonstrat regex validation.use Regex to replace name, full name, Mobile#, and Date with proper value
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-09-2019
 * 
 **************************************************************************************************/
const utility=require('../../Utility/Utility');

regularExpDemonstration=()=>{
    try{
       let originalString='Hello <<name>>,\nWe have your full name as <<full name>> in our system. \nyour contact number is 91-xxxxxxxxxx.';
       process.stdout.write('enter the first name :');
       let firstname=utility.getString();//input the first name
       if(firstname=='input must contain letters only')
       {
           throw firstname;
       }
       process.stdout.write('enter the middle name :');
       let middlename=utility.getString();//input the middle name
       if(middlename=='input must contain letters only')
       {
           throw middlename;
       }
       process.stdout.write('enter the last name :');
       let lastname=utility.getString();//input the last name
       if(lastname=='input must contain letters only')
       {
           throw lastname;
       }
       let fullname=firstname+" "+middlename+" "+lastname;//concat firstname middle name and last to form full name
       process.stdout.write('enter the mobile number :');
       let mobileNumber=utility.getMobileNumber();
       if(mobileNumber=='invalid mobile number')
       {
           throw mobileNumber;
       }
       originalString=originalString.replace('<<name>>',firstname);//replace name with firstname
       originalString=originalString.replace('<<full name>>',fullname);//replace fullname with actual fullname
       originalString=originalString.replace('xxxxxxxxxx',mobileNumber);//replace x with mobile name
       console.log('string after replacement\n');
       console.log(originalString);//display string after all replacement
    }
    catch(e)
    {
        console.log(e);
    }
}
module.exports=regularExpDemonstration();