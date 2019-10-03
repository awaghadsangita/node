/***************************************************************************************************************
 * @purpose	:to compute the square root of a nonnegative number
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility = require("../Utility/Utility");

sqrt = () => {
    let number;
    try {
        console.log(`enter non-negative number`);
        number = utility.getInputNumber();
        
        if(number<=0)
            throw 'number should be non negative';
        
            let squareroot = utility.calculateSqaureRoot(number);
        console.log(`sqaure root of ${number} is ${squareroot["result"]}`);

        return 'success';
    } catch (e) {
        console.log(`Error Occured :${e}`);
        return e;
    }
}

module.exports = sqrt();
