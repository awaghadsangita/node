/***************************************************************************************************************
 * @purpose	:find day of week
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility = require("../Utility/Utility");

dayOfWeek = () => {
    try {
        let month = parseInt(process.argv[2]);
        let day = parseInt(process.argv[3]);
        let year = parseInt(process.argv[4]);
        // let month=21;
        // let day=34;
        // let year=2015;

        if (month <= 0 || month > 12)
            throw "month should be between 1 and 12";
        if (day <= 0 || day > 31)
            throw "day should be between 1 and 31";

        let days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thuresday", "Friday", "Saturday"];

        let dayOfWeekIndex = utility.getDayOfWeek(month, day, year);
        if(dayOfWeekIndex["testcasetesult"]=='success')
        {
        console.log(`\n\ngiven date :${day}-${month}-${year}`);
        console.log(`day of week :${days[dayOfWeekIndex["result"]]}`);
        }
        return 'sucess';
    } catch (e) {
        console.log(`error occured :${e}`);
        return e;
    }
}

module.exports = dayOfWeek();