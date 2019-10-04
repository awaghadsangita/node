/*********************************************************************************************************
 * @purpose	:contain class node with required property.this class required for linked list
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 * 
 **********************************************************************************************************/
class Node {
    stockName: string;
    stockSymbol: string;
    noOfShares: number;
    sharesPrice: number;
    next: Node;
    /**inititalized veriables */
    constructor(stockName: string,symbol:string,no:number,price:number) {
      this.stockName = stockName;
      this.stockSymbol=symbol;
      this.noOfShares=no;
      this.sharesPrice=price;
      this.next=null;
    }
  }
export{Node};