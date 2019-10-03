/***************************************************************************************************
 * @purpose	:check whether year is leap year or not
 * @author user:sangita awaghad
 * @since	:23-08-2019
 ****************************************************************************************************/
const utility = require("../Utility/Utility");
leapYear = () => {
    do {
        console.log("Enter Year");
        var year = utility.getInputNumber();//return input from user

        var temp = year;
        var count = 0;
        while (temp >= 1) {     //count length of number
            count = count + 1;
            temp /= 10;

        }
        if (count != 4)
            console.log("year must be four digit");
    } while (count != 4);

    var isLeap = utility.isLeapYear(year);
    if (isLeap)
        console.log(`${year} is leap year`);
    else
        console.log(`${year} is NOT leap year`);
}

module.exports = leapYear();