/******************************************************************************************
 * @purpose	:store the calendar in an 2D array,the first dimension the week of the month and 
 * 			the second dimension stores the day.prints the calendar of the month. of the week
 *
 * @author 	:sangita avghad
 * @version	:1.0
 * @since	:20-08-2019
 * 
 ******************************************************************************************/
const utility = require('../Utility/Utility');
calendar=()=> {
    try {
        let month = parseInt(process.argv[2]);
        let day = 1;
        let year = parseInt(process.argv[3]);

        if (month <= 0 || month > 12)
            throw "month should be between 1 and 12";
        if (day <= 0 || day > 31)
            throw "day should be between 1 and 31";
        let calenderMonth = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (utility.isLeapYear(year)) {//if given year is leap year month contain 29 days
            monthDays[2] = 29;
        }
        let dayOfWeekIndex = utility.getDayOfWeek(month, day, year);

        if (dayOfWeekIndex["testcasetesult"] == 'success') {
            console.log(dayOfWeekIndex["result"]);
            console.log(`\n\ngiven date :${day}-${month}-${year}`);
            console.log(`day of week :${days[dayOfWeekIndex["result"]]}`);
        }

        let mMonth = [[], []];//two day storing week and 7 days
        let count = 0;
        let i = 0;
        mMonth[i] = new Array(7);
        while (count < dayOfWeekIndex["result"]) {
            mMonth[i][count] = 0;
            count++;
        }
        let d = 1;

        while (d <= monthDays[month]) {
            mMonth[i][count] = d++;
            count++;
            if (count % 7 == 0) {
                i++;
                mMonth[i] = new Array(7);
                count = 0;
            }
        }
        
        while(parseInt(count % 7) != 0) {
            mMonth[i][count] = 0;
            count++;
        }
        
        console.log(`\n\t${calenderMonth[month]} ${year}`);
        console.log(`${days[0]} ${days[1]} ${days[2]} ${days[3]} ${days[4]} ${days[5]} ${days[6]}`);
        for (let i = 0; i < mMonth.length; i++) {
            mMonth[i];
            for (let j = 0; j < 7; j++) {
                if (mMonth[i][j] == 0)
                    process.stdout.write(`    `);
                else if (mMonth[i][j] < 10)
                    process.stdout.write(`${mMonth[i][j]}   `);
                else
                    process.stdout.write(`${mMonth[i][j]}  `);
            }
            console.log();
        }
    } catch (e) {
        console.log(`error occured :${e}`);

    }
}
module.exports=calendar()
