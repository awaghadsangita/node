
/*********************************************************************************************************
 * @purpose	:flip a coin and calculate percentage of head and tail
 * 
 * @author	:sangita awaghad
 * @since	:23-08-2019
 * 
 *********************************************************************************************************/
const utility = require('../Utility/Utility');

filpCoin = () => {
    console.log("How many times you want to filp");
    let noOfFilips = utility.getInputNumber();//take input from keybaord

    let headCount = 0;
    let tailCount = 0;
    
    do {
        var rand = Math.random();
        if (rand < 0.5) {
            headCount++;
            console.log("you flip HEAD");
        }
        else {
            tailCount++;
            console.log("you flip Tail");
        }
    } while ((headCount + tailCount) < noOfFilips);

    console.log("HEAD Percentage :" + headCount / noOfFilips * 100);
    console.log("TAIL Percentage :" + tailCount / noOfFilips * 100);
}
module.exports = flipCoin();