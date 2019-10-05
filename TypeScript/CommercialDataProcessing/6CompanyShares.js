"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************************************************
 * @purpose	:maintain the List of sompanyShares in a Linked List So new sompanyShares can be added or removed easily
 *
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 *
 **********************************************************************************************************/
var node_1 = require("./node");
var linkedlist_1 = require("./linkedlist");
var utility = __importStar(require("../Utility/utility"));
var fs = __importStar(require("fs"));
var Runner = /** @class */ (function () {
    function Runner() {
        this.stockArray = new Array();
        this.stockjsonFilename = './stock.json';
    }
    /**main runner method */
    Runner.prototype.main = function () {
        var choice;
        var linkedlistObj = new linkedlist_1.Linkedlist();
        /**read stock json file */
        this.readStockFile();
        /**create linked list of all json object */
        for (var i = 0; i < this.stockArray.length; i++) {
            var stockname = this.stockArray[i]['stockName'];
            var stocksymbol = this.stockArray[i]['stockSymbol'];
            var no = this.stockArray[i]['noOfShares'];
            var price = this.stockArray[i]['sharesPrice'];
            var newnode = new node_1.Node(stockname, stocksymbol, no, price);
            linkedlistObj.insertAtEnd(newnode);
        }
        do {
            /**show various option for user */
            console.log('1.Add Stock');
            console.log('2.Delete Stock');
            console.log('3.Stock List');
            console.log('4.Exit');
            console.log('Enter the your choice');
            choice = utility.getNumber(); //get user choice
            switch (choice) {
                case 1:
                    {
                        /**show various option for adding stock */
                        console.log('1.Add Stock at the beginning of linkedlist');
                        console.log('2.Add Stock at the end of linkedlist');
                        console.log('3.Add Stock at the specific position');
                        console.log('Enter your choice');
                        /**read stock information from console */
                        var addchoice = utility.getNumber();
                        console.log("Enter the Stock Name :");
                        var stockname = utility.getString();
                        console.log("Enter the Stock Symbol");
                        var stocksymbol = utility.getString();
                        console.log("Enter the Number of shares");
                        var noofshares = utility.getNumber();
                        console.log("Enter the Shares Price");
                        var price = utility.getNumber();
                        /**create new node for stock */
                        var newnode = new node_1.Node(stockname, stocksymbol, noofshares, price);
                        switch (addchoice) {
                            case 1:
                                {
                                    /**call insert at first method of linked list */
                                    linkedlistObj.insertAtFirst(newnode);
                                    /**call show method of linked list */
                                    // linkedlistObj.showLinkedlist();
                                }
                                break;
                            case 2:
                                {
                                    /**call insert at last method of linked list */
                                    linkedlistObj.insertAtEnd(newnode);
                                    /**call show method of linked list */
                                    // linkedlistObj.showLinkedlist();
                                }
                                break;
                            case 3:
                                {
                                    console.log('Enter the Position to add node in linked list');
                                    var pos = utility.getNumber(); //get position for inserting stock in linked list
                                    var result = linkedlistObj.insertInBetween(newnode, pos);
                                    if (result instanceof Error) {
                                        throw result.message;
                                    }
                                    // linkedlistObj.showLinkedlist();//call show method of linked list
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    {
                        /**show various option for deleting stock from linked list */
                        console.log('1.delete first stock');
                        console.log('2.delete last stock');
                        console.log('3.delete specific stock');
                        var deletechoice = utility.getNumber(); //get user choice for deletion
                        switch (deletechoice) {
                            case 1:
                                {
                                    /**call delete first method of linked list */
                                    linkedlistObj.deletefirst();
                                    /**call show method of linked list */
                                    // linkedlistObj.showLinkedlist();
                                }
                                break;
                            case 2:
                                {
                                    /**call delete last method of linked list */
                                    linkedlistObj.deletelast();
                                    /**call show method of linked list */
                                    // linkedlistObj.showLinkedlist();
                                }
                                break;
                            case 3:
                                {
                                    /**get stock symbol to delete from user */
                                    console.log('Enter the Stock Symbol');
                                    var symbol = utility.getString();
                                    /**serach position of stock symbol in linked list */
                                    var pos = linkedlistObj.serachSymbol(symbol);
                                    /**call deleteat method of linked list */
                                    linkedlistObj.deleteAt(pos);
                                    /**call show method of linked list */
                                    // linkedlistObj.showLinkedlist();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    {
                        /**call show method of linked list */
                        linkedlistObj.showLinkedlist();
                    }
                    break;
            }
            linkedlistObj.writeToJsonFile();
        } while (choice != 4);
    };
    /**read stock json file */
    Runner.prototype.readStockFile = function () {
        try {
            var jsonString = fs.readFileSync(this.stockjsonFilename);
            this.stockArray = JSON.parse(jsonString.toString());
        }
        catch (e) {
            return e;
        }
    };
    return Runner;
}());
exports.Runner = Runner;
var obj = new Runner();
obj.main();
