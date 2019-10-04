"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************************************************
 * @purpose	:contain class node with required property.this class required for linked list
 *
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 *
 **********************************************************************************************************/
var Node = /** @class */ (function () {
    /**inititalized veriables */
    function Node(stockName, symbol, no, price) {
        this.stockName = stockName;
        this.stockSymbol = symbol;
        this.noOfShares = no;
        this.sharesPrice = price;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
