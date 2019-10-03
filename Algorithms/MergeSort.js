/***************************************************************************************************************
 * @purpose	:read list of string from keyboard and sort it ascending order using merge sort
 * 
 * @author	:sangita awaghad
 * @version :1.0
 * @since	:24-08-2019
 * 
 ***************************************************************************************************************/
const utility = require("../Utility/Utility");
mergeSortString = () => {
    try {
        console.log(`how many string you want in array list i.e(size of the array)`);
        let size = utility.getInputNumber();

        if(size<=0)
            throw 'array size should be greater than zero';

        let stringArr = new Array(size);
        console.log(stringArr.length);
        console.log(`enter ${size} strings`);
        for (let i = 0; parseInt(i) < size; i++) {
            stringArr[i] = utility.getString();
            
        }
      
        let result=utility.mergeSort(stringArr,0,stringArr.length-1);

        console.log(`\n\nsorted string are as follows`);
        for (let k = 0; parseInt(k) < size; k++) {
            console.log(stringArr[k]);
        }

        return "success";
    } catch (e) {
        console.log(`Error Occured :${e}`);
        return e;
    }
}
module.exports = mergeSortString();