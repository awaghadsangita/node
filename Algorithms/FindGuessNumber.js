/****************************************************************************************************
 * @purpose	:find Guess number in given limit(command Line argument) using Binary Search;
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************/
const utility = require('../Utility/Utility');
findGuessNumber = () => {
    console.log("enter the lower limit and upper limit");
    let l = parseInt(process.argv[2]);
    let r = parseInt(process.argv[3]);
    let mid;
    let replyYes = "yes";
    let replyNo = "no";
    let userReply;
    try {
        do {

            mid = (l + r) / 2;
            mid = mid.toFixed(0);
            console.log(`is your guess number is ${mid}`);
            userReply = utility.getString(); 

            if (userReply.toLocaleLowerCase() == replyNo) {
                console.log(`is your guess number greater than ${mid}`);
                let isGreaterThan = utility.getString();
            
                if (isGreaterThan.toLocaleLowerCase() == replyYes) {
                    l = parseInt(mid) + 1;
                }
                else {
                    r = parseInt(mid) - 1;
                }
            }
        } while (userReply.toLocaleLowerCase() != replyYes);
        console.log(`\n*************************\nyour Guess Number :${mid}\n*************************`);
    } catch (e) {
        console.log(`Error Occured : ${e}`);
    }
}
module.exports = findGuessNumber();
