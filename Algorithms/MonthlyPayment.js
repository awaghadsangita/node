/***************************************************************************************************************
 * @purpose	:reads in three command-line arguments P, Y, and R and calculates the monthly payments you
 *            would have to make over Y years to pay off a P principal loan amount at R per cent
 *            interest compounded monthly
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility = require("../Utility/Utility");

monthlyPayment = () => {
    try {

        let principal = parseInt(process.argv[2]);
        let year = parseInt(process.argv[3]);
        let rate = parseInt(process.argv[4]);
      
        let n = 12 * year;
        let r = rate / (12 * 100);
        let payment = utility.calculatemonthlyPayment(principal,year,rate);
        if(payment["testcaseresult"]=='success')
            console.log(`monthly payment : ${payment["result"]}`);
        else
            console.log(`error occured :${payment["testcaseresult"]}`);
    } catch (e) {
        
        return e;
    }
}
module.exports = monthlyPayment();
