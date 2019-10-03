/*********************************************************************************************************
 * @purpose	:report method gives flow of control
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const utility = require('../../Utility/Utility');
const stockUtility = require('./StockUtility');
const fs = require('fs');
class StockRpt {
    report() {//main method starting point
        try {
            let choice
            let stockUtilityObj = new stockUtility.StockUtility();//create stock utility class object
            stockUtilityObj.getStockArray();
            do {
                console.log('****************************************************************************************');
                console.log('\t1.Add New Stock');
                console.log('\t2.Update Existing Stock');
                console.log('\t3.Delete Existing Stock');
                console.log('\t4.Stock Report')
                console.log('\t5.Exit')
                process.stdout.write('\twhich operation you want to perform :');
                choice = utility.getInputNumber();
                switch (choice) {
                    case 1: {//add new stock
                        process.stdout.write('Enter the Stock Name :');
                        let mName = utility.getString();
                        process.stdout.write('Enter the Number of Shares :');
                        let mNoofshares = utility.getInputNumber();
                        process.stdout.write('Enter the Price of Shares :');
                        let mPrice = utility.getInputNumber();
                        let tc1 = stockUtilityObj.addStock(mName, mNoofshares, mPrice);//call add stock method
                        if (tc1 instanceof Error) {//tc1 instanceof Error
                            throw tc1.message.toString();
                        }
                        else {//successfully added stock in stock file
                            console.log(`${mName} Stock Successfully add into Stock List.Your Stock Id is ${tc1}`);
                        }
                    }
                        break;
                    case 2: {//update existing stock
                        process.stdout.write('Enter Stock Id :');
                        let mStockid = utility.getInputNumber();
                        console.log('1.Update Only No of Shares ');
                        console.log('2.Update Price of Shares');
                        console.log('3.Update both number of shares and price of shares');
                        process.stdout.write('What do you want to update :');
                        let innerchoice = utility.getInputNumber();//take user choice
                        let tc1
                        if (innerchoice == 1) {//update only shares
                            process.stdout.write('How many shares you want to add :');
                            let mNoofshares = utility.getInputNumber();
                            tc1 = stockUtilityObj.updateStock(mStockid, mNoofshares, null);
                            if (tc1 instanceof Error) {
                                throw tc1.message.toString();
                            }
                        }
                        else if (innerchoice == 2) {//update only price
                            process.stdout.write('Enter updated Price of shares :');
                            let mPrice = utility.getInputNumber();
                            tc1 = stockUtilityObj.updateStock(mStockid, null, mPrice);
                            if (tc1 instanceof Error) {
                                throw tc1.message.toString();
                            }
                        } else if (innerchoice == 3) {//update both stock and price
                            process.stdout.write('How many shares you want to add :');
                            let mNoofshares = utility.getInputNumber();
                            process.stdout.write('Enter updated Price of shares :');
                            let mPrice = utility.getInputNumber();
                            tc1 = stockUtilityObj.updateStock(mStockid, mNoofshares, mPrice);
                            if (tc1 instanceof Error) {
                                throw tc1.message.toString();
                            }
                        }
                        if (tc1 == 'success') {//successfully performed update operation
                            console.log('successfully updated the stock');
                        }
                        else {
                            console.log(`Stock id ${mStockid} does not exist`);
                        }
                    }
                        break;
                    case 3: {//delete stock record from file
                        process.stdout.write('Enter the stock id to delete');
                        let mStockid = utility.getInputNumber();
                        let tc1 = stockUtilityObj.deleteStock(mStockid);
                        if (tc1 == 'success') {//successfully performed delete operation
                            console.log('Successfully deleted stock entry from stock list');
                        }
                        else {
                            console.log(`Stock Id ${mStockid} does not Exist`);
                        }
                    }
                        break;
                    case 4:
                        {//print stock report and customer report
                            stockUtilityObj.stockReport();
                        }
                }
            } while (choice != 5)
        } catch (e) {
            console.log(`Error Occured :${e}`);
        }
    }
}
module.exports = { StockRpt };
let obj = new StockRpt()
obj.report();