/**************************************************************************************************
 * @purpose	: calculate wind chill temperature
 * @author	: sangita awaghad
 * @since	: 23-08-2019
 **************************************************************************************************/
const utility = require("../Utility/Utility");

windChill = () => {
    try {
        console.log("Program To Calculate WindChill Temperature");

        let t = parseFloat(process.argv[2]);
        let v = parseFloat(process.argv[3]);
        if (typeof t == 'string')
            throw 'temperature should not be string';
        if (typeof v == 'string')
            throw 'wind speed should not be string';
        if (Math.abs(t) > 50)
            throw 'temperature should not be greater than 50 in its absolute value';
        if (v > 120)
            throw 'wind speed(v) should not be larger than 120';
        if(v < 3)
        throw 'wind speed(v) should not be less than 3';
        
        let windChillTemperature = utility.calculateWindChill(t,v);
        if(windChillTemperature["testcaseresult"]=='success')
            console.log("Wind Chill :" + windChillTemperature['result']);

    } catch (e) {
        console.log(`error occured :${e}`);
        return e;
    }
}
module.exports = windChill();