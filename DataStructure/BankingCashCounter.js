/*****************************************************************************************************
 * @purpose	:create a program which creates banking cash counter where people come in to deposit Cash and withdraw Cash
 * 			add people in queue
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 *****************************************************************************************************/
const utility = require('../Utility/Utility');
const que = require('../Utility/Queue');

bankingCashCounter=()=> {
    try {
        let choice;
        let availableBalance = 50000;
        let queObj = new que.Queue();
        do {
            console.log('\n*************************')
            console.log('1.Add Person in Queue');
            console.log('2.Deposite Amount');
            console.log('3.Withdraw Amount');
            console.log('4.Exit');
            console.log('Enter your Choice');
            choice = utility.getInputNumber();

            switch (choice) {
                case 1: {console.log('How many person you want to add in queue');
                    let totalPerson = utility.getInputNumber();
                    if (totalPerson == 0)
                        throw 'you should add atleast one person in queue';
                    let lastperson = queObj.getLastItem();
                    if (lastperson == 'you can not get last element of empty queue') {
                        return lastperson;
                    }
                    for (let i = 0; i < totalPerson; i++) {
                        let tc1 = queObj.enqueue(++lastperson);//add person in queue by increaming counter
                        if (tc1 == 'data to be added should not contain special symbol' || tc1 == 'data to be added should not be undefined' || tc1 == 'data to be added should not be null') {
                            return tc1;
                        }
                    }
                    console.log(`Queue Status `);
                    let tc2 = queObj.display();               //display status of queue
                    if (tc2 == 'you should not display empty queue') {
                        console.log("queue is empty");
                    }
                    break;
                }
                case 2:
                {    if (queObj.isEmpty()) {
                        console.log('please stand in the queue');
                    } else {
                        console.log('Enter the amount you want to deposit');
                        let depositAmount = utility.getInputNumber();
                        availableBalance = availableBalance + depositAmount;//add deposited  amount into bank available balance
                        console.log(`Available Balance :${availableBalance}`);
                        console.log(`successfully deposit ${depositAmount}`);
                        let tc3 = queObj.dequeue();   //remove person from queue after deposit operation
                        if (tc3 == 'you should not remove item from empty queue') {
                            throw tc3;
                        }
                    }
                    break;
                }
                case 3:
                {    let reply = 'n';
                    do {
                        if (queObj.isEmpty()) {
                            console.log('please stand in queue');
                        }
                        else {
                            console.log('Enter the amount you want to withdraw');
                            let withdrawAmount = utility.getInputNumber()
                            if (availableBalance < withdrawAmount) {
                                console.log('sorry, bank does not have enough balance');
                                console.log('you want to withdaw less amount if yes press "y" if no press "n"');
                                reply = utility.getString();
                            }
                            else {
                                availableBalance = availableBalance - withdrawAmount;//substract withdraw amount from bank available balance
                                console.log(`available Balance :${availableBalance}`);
                                console.log(`successfully withdaw ${withdrawAmount}`);
                                reply = 'n';
                                let tc4 = queObj.dequeue();//remove person from queue after withdraw operation
                                if (tc4 == 'you should not remove item from empty queue') {
                                    throw tc4;
                                }
                                console.log("Queue Status");    //display queue status
                                let tc5 = queObj.display();
                                if (tc5 == 'you should not display empty queue') {
                                    return tc5;
                                }
                            }
                        }
                    } while (reply == 'y');
                    break;
                }
                case 4: process.exit();
            }
        } while (choice != 4);
    }
    catch (e) {
        console.log(`error occured:${e}`);
    }
}
module.exports=bankingCashCounter();