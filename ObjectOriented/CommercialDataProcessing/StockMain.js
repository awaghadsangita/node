
/*********************************************************************************************************
 * @purpose	:main method gives flow of control
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const utility=require('../../Utility/Utility');
const stockUtility=require('./StockUtility');
class StockMain{
    main()//main method gives flow of control
    {
        try{
        let stockObj=new stockUtility.StockAccount();
        stockObj.getPersonArray();//read person json file
        stockObj.getStockArray();//read stock json file
        stockObj.getTransctionArray();//read treansction json file
        let choice;
        do{
            console.log('************************************************************************************************************************');
            console.log('*********************************\t\t1.Buy        \t\t\t****************************************');
            console.log('*********************************\t\t2.Sell        \t\t\t****************************************');
            console.log('*********************************\t\t3.Print Report\t\t\t****************************************');
   process.stdout.write('*********************************\t\tEnter your choice :');
            choice=utility.getInputNumber();//take user choice
            switch(choice)
            {
                case 1:{//buy operation
                    console.log('*************************************************************************************************************************');
                    console.log('================================\t\t  BUY OPERTION  \t\t=========================================');
                    console.log('*************************************************************************************************************************');
                    process.stdout.write('\t1.Enter the your id :');
                    let pid=utility.getInputNumber();
                    process.stdout.write('\t2.Enter the Company Symbol :');
                    let symbol=utility.getString();
                    process.stdout.write('\t3.How Many Share you want to buy :');
                    let noofshares=utility.getInputNumber();
                    let tc1=stockObj.buy(symbol,noofshares,pid);//call buy()
                    if(tc1 instanceof Error)//if tc1 instance of error
                    {
                        throw tc1.message.toString();
                    }
                    if(tc1=='success')//buy operation successfully performed
                    {
                        console.log(`\tSuccessfully bought the ${noofshares} shares from ${symbol}`);
                    }
                }
                break;
                case 2:{//sell opertion
                    console.log('*************************************************************************************************************************');
                    console.log('================================\t\t  SELL OPERTION  \t\t========================================');
                    console.log('*************************************************************************************************************************');
                    process.stdout.write('\t1.Enter the your id :');
                    let pid=utility.getInputNumber();
                    process.stdout.write('\t2.Enter the Company Symbol :');
                    let symbol=utility.getString();
                    process.stdout.write('\t3.How Many Share you want to sell :');
                    let noofshares=utility.getInputNumber();
                    let tc1=stockObj.sell(symbol,noofshares,pid);//call sell() method
                    if(tc1 instanceof Error)
                    {
                        throw tc1.message.toString();
                    }
                    if(tc1=='success')//sell operation successfully performed
                    {
                        console.log(`\tSuccessfully Sold the ${noofshares} shres to ${symbol}`);
                    }
                }
                break;
                case 3:{//print stock report and customer reports
                        stockObj.printReport();       
                    }
    
            }
            
            choice=4;
        }while(choice!=4);
    }catch(e)
    {
        console.log(`Error Occured : ${e}`);
    }
    }
}
module.exports={StockMain};
let obj = new StockMain();
obj.main(); 