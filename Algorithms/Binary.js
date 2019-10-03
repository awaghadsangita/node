/***************************************************************************************************************
 * @purpose	:find binary of given decimal then swap nibble and convert it decimal
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
        console.log(`\ndecimal : ${decimal} \nbinary : ${binary}`);

        let l = 0;
        let r = l + 4;
        let binaryArr = binary.split('');
        for (let i = 0; i < 4; i++) {
            let temp = binaryArr[l];
            binaryArr[l] = binaryArr[r];
            binaryArr[r] = temp;
            l++;
            r++;
        }
        console.log(`\n\nAfter Swapping Nibble`);
        decimal = utility.binaryToDecimal(binaryArr);
        console.log(`binary : ${binaryArr.join('')} \ndecimal : ${decimal}`);
    } catch (e) {
        console.log(`Error occured :${e}`);
        return e;
    }

}
module.exports = toBinary();