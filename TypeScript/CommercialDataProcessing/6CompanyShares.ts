/*********************************************************************************************************
 * @purpose	:maintain the List of sompanyShares in a Linked List So new sompanyShares can be added or removed easily
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 * 
 **********************************************************************************************************/
import {Node} from './node';
import {Linkedlist} from './linkedlist';
import * as utility from '../Utility/utility';
import * as fs from 'fs';
class Runner{
    private stockArray=new Array();
    private stockjsonFilename:string='./stock.json';
    /**main runner method */
    main(){
        let choice:number;
        let linkedlistObj=new Linkedlist();
        /**read stock json file */
        this.readStockFile();
        /**create linked list of all json object */
        for(let i=0;i<this.stockArray.length;i++)
        {
            let stockname:string=this.stockArray[i]['stockName'];
            let stocksymbol:string=this.stockArray[i]['stockSymbol'];
            let no:number=this.stockArray[i]['noOfShares'];
            let price:number=this.stockArray[i]['sharesPrice'];
            let newnode=new Node(stockname,stocksymbol,no,price)
            linkedlistObj.insertAtEnd(newnode);
        }
        do{
            /**show various option for user */
            console.log('1.Add Stock')
            console.log('2.Delete Stock');
            console.log('3.Stock List');
            console.log('4.Exit');
            console.log('Enter the your choice');
            choice=utility.getNumber();//get user choice
            switch(choice)
            {
                case 1:{
                        /**show various option for adding stock */
                        console.log('1.Add Stock at the beginning of linkedlist');
                        console.log('2.Add Stock at the end of linkedlist');
                        console.log('3.Add Stock at the specific position');
                        console.log('Enter your choice');
                        /**read stock information from console */
                        let addchoice=utility.getNumber();
                        console.log("Enter the Stock Name :");
                        let stockname=utility.getString();
                        console.log("Enter the Stock Symbol");
                        let stocksymbol=utility.getString();
                        console.log("Enter the Number of shares");
                        let noofshares=utility.getNumber();
                        console.log("Enter the Shares Price");
                        let price=utility.getNumber();
                        /**create new node for stock */
                        let newnode=new Node(stockname,stocksymbol,noofshares,price)

                        switch(addchoice)
                        {
                            case 1:{
                                /**call insert at first method of linked list */
                                linkedlistObj.insertAtFirst(newnode);
                                /**call show method of linked list */
                                // linkedlistObj.showLinkedlist();
                            }break;
                            case 2:{
                                /**call insert at last method of linked list */
                                linkedlistObj.insertAtEnd(newnode);
                                /**call show method of linked list */
                                // linkedlistObj.showLinkedlist();
                            }break;
                            case 3:{
                                console.log('Enter the Position to add node in linked list');
                                let pos=utility.getNumber();//get position for inserting stock in linked list
                                let result=linkedlistObj.insertInBetween(newnode,pos);
                                if(result instanceof Error)
                                {
                                    throw result.message;
                                }
                                // linkedlistObj.showLinkedlist();//call show method of linked list
                             
                            }break;
                        }                    
                }break;
                case 2:{
                    /**show various option for deleting stock from linked list */
                    console.log('1.delete first stock');
                    console.log('2.delete last stock');
                    console.log('3.delete specific stock');
                    let deletechoice=utility.getNumber();//get user choice for deletion
                    switch(deletechoice)
                    {
                        case 1:{
                            /**call delete first method of linked list */ 
                            linkedlistObj.deletefirst();
                            /**call show method of linked list */
                            // linkedlistObj.showLinkedlist();
                        }break;
                        case 2:{
                            /**call delete last method of linked list */
                            linkedlistObj.deletelast();
                            /**call show method of linked list */
                            // linkedlistObj.showLinkedlist();
                        }break;
                        case 3:{
                            /**get stock symbol to delete from user */
                            console.log('Enter the Stock Symbol');
                            let symbol=utility.getString();
                            /**serach position of stock symbol in linked list */
                            let pos=linkedlistObj.serachSymbol(symbol);
                            /**call deleteat method of linked list */
                            linkedlistObj.deleteAt(pos);
                            /**call show method of linked list */
                            // linkedlistObj.showLinkedlist();
                        }break;
                    }

                }break;
                case 3:{
                    /**call show method of linked list */
                    linkedlistObj.showLinkedlist();
                }break;
            }
            linkedlistObj.writeToJsonFile();
        }while(choice!=4)
    }
    /**read stock json file */
    readStockFile()
    {
        try {

            let jsonString = fs.readFileSync(this.stockjsonFilename);
            this.stockArray = JSON.parse(jsonString.toString());
        } catch (e) {
            return e;
        }
    }
    
}
export {Runner}
let obj=new Runner();
obj.main();