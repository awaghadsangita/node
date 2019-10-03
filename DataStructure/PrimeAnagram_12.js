/*************************************************************************************************
 * @purpose	:find prime number then find anagram and not anagram number,store in a 2D array the 
 *          numbers that are anagram and numbers that are not Anagram
 * 
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility=require('../Utility/Utility');

primeAnagram=()=>{

    let primeArray=utility.getPrimeNumber(0,1000);//return array of prime numbers between 0 to 1000
    if(primeArray=='starting and ending point should be number'||primeArray=='start and end point of range should not be negative')
    {
        throw primeArray;
    }
    console.log("*********Prime Array*******")
    for(let i=0;i<primeArray.length;i++)
    {
        process.stdout.write(`${primeArray[i]} `);
    }
    let anagramArray=utility.getAnagram(primeArray);//return two d array of anangram and not anagram numbers
    if(anagramArray=='array element not in have proper data type')
    {
        throw anagramArray;
    }
    console.log("\n\n*********Anagram Array*******")
    for(let i=0;i<anagramArray[0].length;i++)
    {
        process.stdout.write(`${anagramArray[0][i]} `);
    }
    console.log("\n\n*********Not Anagram Array*******")
    for(let i=0;i<anagramArray[1].length;i++)
    {
        process.stdout.write(`${anagramArray[1][i]} `);
    }
   console.log();
}
module.exports=primeAnagram();