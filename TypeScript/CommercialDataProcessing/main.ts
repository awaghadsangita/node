/*********************************************************************************************************
 * @purpose	:main method gives flow of control
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 * 
 **********************************************************************************************************/

import { OperationUtility } from './Operationutility';//import implementation class
import * as utility from '../Utility/utility';//import utility class
class Main {
    /**
     * @description:runner method
     */
    mainMethod() {
        {
            try {
                let stockObj = new OperationUtility();//create object of implementation class
                stockObj.readPersonJsonArray();//read person json file
                stockObj.readStockJsonArray();//read stock json file
                stockObj.readTrasactionJsonArray();//read treansction json file
                let choice;
                do {
                    console.log('************************************************************************************************************************');
                    console.log('\t\t\t\t1.Buy         ');
                    console.log('\t\t\t\t2.Sell        ');
                    console.log('\t\t\t\t3.Print Report');
                    process.stdout.write('\t\t\t\tEnter your choice :');
                    choice = utility.getNumber();//take user choice
                    switch (choice) {
                        case 1: {//buy operation
                            console.log('*************************************************************************************************************************');
                            console.log('================================\t\t  BUY OPERTION  \t\t=========================================');
                            console.log('*************************************************************************************************************************');
                            process.stdout.write('\t1.Enter the your id :');
                            let pid = utility.getNumber();
                            process.stdout.write('\t2.Enter the Company Symbol :');
                            let symbol = utility.getString();
                            process.stdout.write('\t3.How Many Share you want to buy :');
                            let noofshares = utility.getNumber();
                            let tc1 = stockObj.buy(symbol, noofshares, pid);//call buy()
                            if (tc1 instanceof Error)//if tc1 instance of error
                            {
                                throw tc1.message.toString();
                            }
                            if (tc1 == 'success')//buy operation successfully performed
                            {
                                console.log("\tSuccessfully bought the " + noofshares + " shares from " + symbol);
                            }
                        }
                            break;
                        case 2: {//sell opertion
                            console.log('*************************************************************************************************************************');
                            console.log('================================\t\t  SELL OPERTION  \t\t========================================');
                            console.log('*************************************************************************************************************************');
                            process.stdout.write('\t1.Enter the your id :');
                            let pid = utility.getNumber();
                            process.stdout.write('\t2.Enter the Company Symbol :');
                            let symbol = utility.getString();
                            process.stdout.write('\t3.How Many Share you want to sell :');
                            let noofshares = utility.getNumber();
                            let tc1 = stockObj.sell(symbol, noofshares, pid);//call sell() method
                            if (tc1 instanceof Error) {
                                throw tc1.message.toString();
                            }
                            if (tc1 == 'success')//sell operation successfully performed
                            {
                                console.log(`\tSuccessfully Sold the ${noofshares} shares to ${symbol}`);
                            }
                        }
                            break;
                        case 3: {//print stock report and customer reports
                            stockObj.printReport();
                        }

                    }

                    
                } while (choice != 4);
            } catch (e) {
                console.log(`Error Occured : ${e}`);
            }
        }
    }
}
export { Main };
let obj = new Main();
obj.mainMethod();