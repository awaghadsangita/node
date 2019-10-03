/******************************************************************************************
 * @purpose	:implement month of calendar using queue using linked list
 * 
 * @author 	:sangita avghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 ******************************************************************************************/
const utility = require('../Utility/Utility');
const linkList = require("../Utility/LinkedList");
calendar=()=> {
    try {
        let month = parseInt(process.argv[2]);
        let day = 1;
        let year = parseInt(process.argv[3]);
        let listObj = new linkList.LinkList();
        if (month <= 0 || month > 12)
            throw "month should be between 1 and 12";
        if (day <= 0 || day > 31)
            throw "day should be between 1 and 31";
        let calenderMonth = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (utility.isLeapYear(year)) {//check if year is leap year or not if yes set monthdays to 29
            monthDays[2] = 29;
        }
        let dayOfWeekIndex = utility.getDayOfWeek(month, day, year);//gives day of week

        let mMonth = [[], []];
        let count = 0;
        let i = 0;

        mMonth[i] = new Array(7);
        while (count < dayOfWeekIndex["result"]) {
            mMonth[i][count] = 0;
            let nodeObj1 = new linkList.DayNode(days[count], 0, null);//create node object
            let tc1=listObj.insertAtEnd(nodeObj1);//call insert at end method of linked list
            if(tc1=='linked list node data should not contain special symbol'||tc1=='linked list data should not be undefined')
            {
                throw tc1;
            }
            count++;

        }
        let d = 1;

        while (d <= monthDays[month]) {
            count++;
            let nodeObj2 = new linkList.DayNode(days[count], d++, null)
            let tc1=listObj.insertAtEnd(nodeObj2);//call insert at end method of linked list
            if(tc1=='linked list node data should not contain special symbol'||tc1=='linked list data should not be undefined')
            {
                throw tc1;
            }
            if (count % 7 == 0) {
                i++;
                mMonth[i] = new Array(7);
                count = 0;
            }
        }
        if (count % 7 != 0) {
            mMonth[i][count] = 0;
            count++;
            let nodeObj = new linkList.DayNode(days[count], 0, null)
            let tc1=listObj.insertAtEnd(nodeObj);//call insert at end method of linked list
            if(tc1=='linked list node data should not contain special symbol'||tc1=='linked list data should not be undefined')
            {
                throw tc1;
            }
        }
        console.log(`\n\t${calenderMonth[month]} ${year}`);
        console.log(`${days[0]} ${days[1]} ${days[2]} ${days[3]} ${days[4]} ${days[5]} ${days[6]}`);

        let head = listObj.HEAD.next;//get HEAD of Linked list
        count = 0;
        while (head != null) {
            let date = head.data;//get date from linked list node

            if (date == 0)
                process.stdout.write(`    `);
            else if (date < 10)
                process.stdout.write(`${date}   `);
            else
                process.stdout.write(`${date}  `);

            head = head.next;//iterate head still last node
            count++;
            if (count % 7 == 0)
                console.log();
        }
        console.log();
    } catch (e) {
        console.log(`error occured :${e}`);
    }

}
module.exports=calendar();