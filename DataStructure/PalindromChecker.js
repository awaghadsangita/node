/*****************************************************************************************************
 * @purpose :using Dequeue ,process the string from left to right and add each character to the rear of 
 *          the deque.delete item of queue from rear end.compare two string to check for palindrom
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 *****************************************************************************************************/
const utility = require('../Utility/Utility');
const queueUtility = require('../Utility/Queue');

palindromChecker=()=> {
    try {
        let queueObj = new queueUtility.Queue();
        console.log("Enter the string for checking wheather it is palindrom or not");

        let stringToCheck = utility.getString();//take input from user
        let stringArray = stringToCheck.split('');//split into input string and covert it array of characters

        for (let i = 0; i < stringArray.length; i++) {
            queueObj.addRear(stringArray[i]);//add character from rear end of queue;
        }

        let reverseString = '';
        for (let i = 0; i < stringArray.length; i++) {
            reverseString = reverseString + queueObj.deteteRear();//delete item from rear end of queue
        }

        if (stringToCheck == reverseString) {//compare original string and reverse string
            console.log(`${stringToCheck} is Palindrom`)
        }
        else {
            console.log(`${stringToCheck} is NOT Palindrom`);
        }
    } catch (e) {
        console.log(e);
        return e;
    }
}
module.exports = palindromChecker();