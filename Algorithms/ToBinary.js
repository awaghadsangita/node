/***************************************************************************************************************
 * @purpose	:outputs the binary (base 2) representation of the decimal number typed as the input
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility = require("../Utility/Utility");
toBinary = () => {
    try {
        let decimal;
        console.log(`enter the positive decimal number`);
        decimal = utility.getInputNumber();
        if (decimal < 0)
            throw 'number should be greater than zero';
        if (decimal > 512)
            throw 'number should not be less than 512';

        let binary = utility.decimalToBinary(decimal);
        console.log(`\ndecimal: ${decimal} \nbinary:${binary["result"]}`);
    } catch (e) {
        console.log(`error occured :${e}`);
        return e;
    }

}
module.exports = toBinary();