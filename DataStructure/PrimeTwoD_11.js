/*************************************************************************************************
 * @purpose	:find prime number store the prime numbers in a 2D array, the first dimension 
 *          represents the range 0-100,100-200, and so on. While the second dimension represents
 *          the prime numbers in that range
 *  
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');

primeTwoDArray=()=> {
    try {
        let prime = [[], []];
        let start = 0;
        let end = 100;
        let k = 0;
        for (let i = 0; i < 10; i++) {
            let primeArray = utility.getPrimeNumber(start, end);//return array of prime numbers in specific range
            if (primeArray == 'starting and ending point should be number' || primeArray == 'start and end point of range should not be negative') {
                throw primeArray;
            }
            prime[i] = new Array(primeArray);
            prime[i][k++] = primeArray;
            start += 100;
            end += 100;
        }
        start = 0;
        end = 100;

        console.log("*********Prime Array*******")
        for (let i = 0; i < 10; i++) {
            process.stdout.write(`Range :${start}-${end}  :`);
            for (let j = 0; j < 100; j++) {
                if (typeof prime[i][j] != 'undefined')
                    process.stdout.write(`${prime[i][j]} `);
            }
            start += 100;
            end += 100;
            console.log();
        }
    } catch (e) {
        console.log(`Error occured :${e}`);
    }

}
module.exports=primeTwoDArray();
