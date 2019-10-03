/***************************************************************************************************************
 * @purpose	:take the temperature in fahrenheit as input outputs the temperature in celsius or viceversa
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility=require("../Utility/Utility");

temperaturConversion=()=>{
    console.log(`enter temperature in fahrenheit`);
    let fahrenheit=utility.getFloatInput();
    
    let celsius=utility.convertTemperatur(fahrenheit,"C");
    if(celsiuc["testcaseresult"]=='success')
    {
        console.log(`Temperature in Celsius :${celsius["result"]}`);
        fahrenheit=utility.convertTemperatur(celsius,"F");
        if(fahrenheit['testcaseresult']=='success')        
            console.log(`Temperature in Fahrenheit :${fahrenheit["result"]}`);
        else
            console.log(`error occured :${fahrenheit["testcaseresult"]}`);
    }else
    console.log(`error occured :${celsius["testcaseresult"]}`);
    
}
module.exports = temperaturConversion();