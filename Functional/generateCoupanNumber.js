/***************************************************************************************************
 * @purpose	:Given N distinct Coupon Numbers, how many random numbers do you need to generate
 * 			distinct coupon number? This program simulates this random process.
 * @author	:sangita awaghad
 * @since	:23-08-2019
 ***************************************************************************************************/
const utility=require("../Utility/Utility");

generateCoupanNumber=()=>{
    console.log("How many coupan you want to generate :");
    let noOfCoupan=utility.getInputNumber();//take intput from user

    let coupans=utility.generateCoupanNumbers(noOfCoupan);//call method containing actaul logic
    console.log("Coupon Numbers are as follow");
    for(let i=0;i<noOfCoupan;i++)
    {
        console.log(`${i+1} Coupon Number : ${coupans[i]}`);//display coupon number
    }

}
module.exports=generateCoupanNumber();