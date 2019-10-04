import { Node } from './node';
import * as fs from 'fs';
class Linkedlist {
    private HEAD: any;
    isEmpty(): boolean {
        return this.HEAD == null;
    }
    insertAtFirst(newnode: any) {
        try {
            if (this.isEmpty()) {
                this.HEAD = newnode;
            } else {
                newnode.next = this.HEAD;
                this.HEAD = newnode;
            }
        } catch (e) {
            return e;
        }
    }
    insertAtEnd(newnode: any) {
        try {
            if (this.isEmpty() == true) {
                this.HEAD = newnode;

            } else {
                let temp = this.HEAD;
                while (temp.next != null) {
                    temp = temp.next;
                }
                temp.next = newnode;
            }
        } catch (e) {
            return e;
        }
    }
    insertInBetween(newnode: any, pos: number) {
        try {
            if (pos < -1 || this.size() < pos) {
                throw new Error('Invalid Position');
            }
            if (this.isEmpty()) {
                this.HEAD = newnode;
            } else {
                let count: number = 1;
                let temp = this.HEAD;
                while (count < pos - 1) {
                    temp = temp.next;
                    count++;
                }
                let current = temp.next;
                temp.next = newnode;
                newnode.next = current;

            }
        } catch (e) {
            return e;
        }
    }
    showLinkedlist() {
        try {
            let temp = this.HEAD;
            for (let i = temp; i != null; i = i.next) {
                console.log('Stock Name', i.stockName);
                console.log('Stock Symbol', i.stockSymbol);
                console.log('Number of Shares :', i.noOfShares);
                console.log('Price :', i.sharesPrice);
                console.log('**************************************************')
            }
        } catch (e) {

        }
    }
    size(): number {
        try {
            let count: number = 0;
            let temp = this.HEAD;
            for (let i = temp; i != null; i = i.next) {
                count++;
            }
            return count;
        } catch (e) {
            return e;
        }
    }
    deletefirst() {
        try {
            if (this.isEmpty()) {
                throw new Error('Linked list is Empty');
            }
            if (this.HEAD.next == null) {
                this.HEAD = null;
            } else {
                let temp = this.HEAD.next;
                this.HEAD = temp;
            }
        } catch (e) {
            return e;
        }
    }
    deletelast() {
        try {
            if (this.isEmpty()) {
                throw new Error('Linked list is Empty');
            } else {
                let temp = this.HEAD;
                let secondLastNode = this.HEAD;
                while (temp.next != null) {
                    secondLastNode = temp;
                    temp = temp.next;
                }
                if (temp == this.HEAD) {
                    this.HEAD = null;
                }
                else {
                    secondLastNode.next = null;
                }

            }

        } catch (e) {
            return e;
        }
    }
    deleteAt(position: number) {
        try {
            let temp = this.HEAD;
            if (position == 1) {
                this.HEAD = temp.next;
            }
            else {
                let count = 1;
                while (count < position - 1) {
                    console.log("inside count ",count);
                    
                    temp = temp.next;
                    count++;
                }
                let current = temp.next;
                temp.next = current.next;
            }

        } catch (e) {
            return e;
        }
    }
    serachSymbol(symbol: string): number {
        try {
            let temp = this.HEAD;
            let count = 0;
            for (let i = temp; i != null; i = i.next) {
                count = count + 1;
                if (i.stockSymbol == symbol) {
                    break;
                }
            }
            return count;
        } catch (e) {
            return e;
        }
    }
    showTransaction()
    {
        try{
            let temp = this.HEAD;
            for (let i = temp; i != null; i = i.next) {
                console.log('Stock Symbol', i.symbol.toLowerCase());
                console.log('Number of Shares', i.noOfShares);
                console.log('Transaction :', i.operation);
                console.log('Transaction Time :',i.dateTime);
                console.log('**************************************************')
            }
        }catch(e)
        {
            return e;
        }
    }
    /**writetoJsonFile */
    writeToJsonFile(){
        try{
            let stockArray=new Array();
            let temp=this.HEAD;
            let k:number=1;
            for(let i=temp;i!=null;i=i.next)
            {
                let obj={"stockId":k++, 
                "stockName": i.stockName,
                "stockSymbol": i.stockSymbol,
                "noOfShares": i.noOfShares,
                "sharesPrice":i.sharesPrice}
                stockArray.push(obj);
            }      
            let jsonString = JSON.stringify(stockArray);
            fs.writeFileSync('./stock.json', jsonString);
             
        }catch(e)
        {
            return e;
        }
    }
}
export { Linkedlist }