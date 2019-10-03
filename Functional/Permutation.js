/***************************************************************************************************
 * @purpose	:find the all permutation of given string
 * @author	:sangita awaghad
 * @since	:23-08-2019
 ***************************************************************************************************/
const utility = require('../Utility/Utility');

permutation = () => {
    try {
        console.log("enter string to find all permutation :");
        let string = utility.getString();
                       
        let totalPermutation = 1;
        for (let i = 1; i <= string.length; i++) {
            totalPermutation *= i;
        }
        let permutationArray ;
        permutationArray=utility.findPermutation(string, 0, string.length - 1, totalPermutation);
        console.log(permutationArray["result"]);
    } catch (e) {
        console.log(`error occured :${e}`);
    }
}
module.exports = permutation();