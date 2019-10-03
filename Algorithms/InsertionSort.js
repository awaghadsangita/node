/******************************************************************************************************************
 * @purpose	:read list of string from keyboard and sort it ascending order using insertion sort
 * 
 * @author	:sangita awaghad
 * @version :1.0
 * @since	:24-08-2019
 * 
 ******************************************************************************************************************/
const utility = require("../Utility/Utility");
insertionSort = () => {
    try {
        console.log(`how many string you want in array i.e(size of array)`);
        let size = utility.getInputNumber();
        if(size<=0)
            throw 'array size should be greater than zero';

        let stringArray = new Array(size);
        console.log(`Enter ${size} strings :`);
        for (let i = 0; i < size; i++) {
            stringArray[i] = utility.getString();
            
        }

        let sortedArray = utility.insertionSort(stringArray);
        console.log(`\n\nStrings in sorted order are as follows:`);
        for (let i = 0; i < size; i++) {
            console.log(sortedArray["result"][i]);
        }
        return 'success';
    } catch (e) {
        console.log(`Error Occured :${e}`);
        return e;
    }
}
module.exports = insertionSort();