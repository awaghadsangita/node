/****************************************************************************************************
 * @purpose	:A program with cubic running time. read in N integers and counts the
 * 			number of triples that sum to exactly 0
 * @author	:sangita awaghad
 * @since	:23-08-2019
 ****************************************************************************************************/
const utility = require('../Utility/Utility');

sumofThreeInteger = () => {
    try {
        console.log(`how many element you want in array`);
        let size = utility.getInputNumber();
        if(size<=0)
            throw 'size of array should not be less than one';
        let a = new Array(size);
        console.log(`enter the ${size} integer elements`);
        for (let i = 0; i < size; i++) {
            a[i] = utility.getInputNumber();
        }
        
        let arr=utility.sumofThreeIntegerAddsZero(a);
        for(let i=0;i<arr["result"].length;i++)
        {
            console.log(`${arr["result"][i]["first"]}+${arr["result"][i]["second"]}+${arr["result"][i]["third"]}=0`);
        }
        
        
    } catch (e) {
        console.log(`error occured :${e}`);
    }
}

module.exports = sumofThreeInteger();