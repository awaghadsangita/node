/******************************************************************************************************
 * @purpose	: find the prime number and print it
 * @Author	: sangita awaghad
 * @since	: 23-08-2019
 ******************************************************************************************************/
const utility=require("../Utility/Utility");

primeFactors=()=>{
    console.log("Enter Number to calculate Prime Factor :");
    var number=utility.getInputNumber();

    var primefactor=utility.calculatePrimeFactor(number);//method return prime factors
    
    console.log(`Prime Factor of ${number} \n${primefactor}`);

}
module.exports=primeFactors();