/**************************************************************************************************
 * @Purpose	:take Command Line Argument from user check it in range 1 to 32 and print table of power of two
 * @author	:sangita awaghad
 * @since	:23-08-2019
 **************************************************************************************************/
const utility = require("../Utility/Utility");

powerOfTwo = () => {
    if (process.argv[2] <= 31) {
        var powerOfTwo = 1;
        for (let i = 0; i <= process.argv[2]; i++) {
            console.log(`2^${i} = ${powerOfTwo}`);
            powerOfTwo = powerOfTwo * 2;
        }
    }
    else {
        console.log("Enter Power between 0 and 31");
    }
}
module.exports = powerOfTwo();