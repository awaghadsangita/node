/************************************************************************************************
 * @purpose	:implement vending machine giveing change in minimum notes
 * 
 * @author	:sangita awaghad
 * @version :1.0
 * @since	:24-08-2019 
 * 
 **************************************************************************************************/
const utility = require("../Utility/Utility");

vendingMachine = () => {

    try {
        console.log(`Enter amount for change`);
        let amount = utility.getInputNumber();

        if (typeof amount == 'string')
            throw 'amount should not be string';
        if (amount <= 0)
            throw 'amount should be greater than zero';
        utility.getChange(amount);
        return 'success';

    }
    catch (e) {
        console.log(`Error Occured :${e}`);
        return e;
    }
}

module.exports = vendingMachine();