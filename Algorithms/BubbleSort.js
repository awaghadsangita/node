/*************************************************************************************************************
 * @purpose	:read list of numbers from keyboard and sort it ascending order using bubble sort
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 *************************************************************************************************************/
const utility = require("../Utility/Utility");

bubbleSortNumber = () => {
    try {
        console.log(`how many number you want in array i.e(size of array) :`);
        let size = utility.getInputNumber();
        if(size<=0)
            throw "array size must be greater than zero";
        let integerArray = new Array(size);
 
        console.log(`Enter ${size} numbers`);
        for (let i = 0; i < size; i++) {
            integerArray[i] = utility.getInputNumber();
            if(typeof integerArray[i] =='string')
                throw 'array element should not be string';
        }

        let sortedArray = utility.bubbleSort(integerArray);
        console.log(`\n\nnumbers in sorted order`);
        for (let i = 0; i < size; i++) {
            console.log(sortedArray["resut"][i]);
        }
        
    } catch (e) {
        console.log(`Error Occured :${e}`);
        return e;
    }

}
module.exports = bubbleSortNumber();