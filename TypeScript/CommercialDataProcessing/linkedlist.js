"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Linkedlist = /** @class */ (function () {
    function Linkedlist() {
    }
    /**
     * @description check whether linkedlist empty or not
     */
    Linkedlist.prototype.isEmpty = function () {
        return this.HEAD == null;
    };
    /**
     * @description:insert node at beginning of linkedlist
     * @param newnode :node to be inserted
     */
    Linkedlist.prototype.insertAtFirst = function (newnode) {
        try {
            if (this.isEmpty()) {
                this.HEAD = newnode;
            }
            else {
                newnode.next = this.HEAD;
                this.HEAD = newnode;
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:insert node at end of linkedlist
     * @param newnode :node to be inserted
     */
    Linkedlist.prototype.insertAtEnd = function (newnode) {
        try {
            if (this.isEmpty() == true) {
                this.HEAD = newnode;
            }
            else {
                var temp = this.HEAD;
                while (temp.next != null) {
                    temp = temp.next;
                }
                temp.next = newnode;
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:insert node at specific position
     * @param newnode :node to be inserted
     * @param pos :position where node is inserted
     */
    Linkedlist.prototype.insertInBetween = function (newnode, pos) {
        try {
            if (pos < -1 || this.size() < pos) {
                throw new Error('Invalid Position');
            }
            if (this.isEmpty()) {
                this.HEAD = newnode;
            }
            else {
                var count = 1;
                var temp = this.HEAD;
                while (count < pos - 1) {
                    temp = temp.next;
                    count++;
                }
                var current = temp.next;
                temp.next = newnode;
                newnode.next = current;
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:display all stock in linked list
     */
    Linkedlist.prototype.showLinkedlist = function () {
        try {
            var temp = this.HEAD;
            for (var i = temp; i != null; i = i.next) {
                console.log('Stock Name', i.stockName);
                console.log('Stock Symbol', i.stockSymbol);
                console.log('Number of Shares :', i.noOfShares);
                console.log('Price :', i.sharesPrice);
                console.log('**************************************************');
            }
        }
        catch (e) {
        }
    };
    /**
     * @description:give lenth of linkedlist
     */
    Linkedlist.prototype.size = function () {
        try {
            var count = 0;
            var temp = this.HEAD;
            for (var i = temp; i != null; i = i.next) {
                count++;
            }
            return count;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:delete first node of linked list
     */
    Linkedlist.prototype.deletefirst = function () {
        try {
            if (this.isEmpty()) {
                throw new Error('Linked list is Empty');
            }
            if (this.HEAD.next == null) {
                this.HEAD = null;
            }
            else {
                var temp = this.HEAD.next;
                this.HEAD = temp;
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:delete last node of linkedlist
     */
    Linkedlist.prototype.deletelast = function () {
        try {
            if (this.isEmpty()) {
                throw new Error('Linked list is Empty');
            }
            else {
                var temp = this.HEAD;
                var secondLastNode = this.HEAD;
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
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:delete node at specific positon
     * @param position :gives position of node to be deleted
     */
    Linkedlist.prototype.deleteAt = function (position) {
        try {
            var temp = this.HEAD;
            if (position == 1) {
                this.HEAD = temp.next;
            }
            else {
                var count = 1;
                while (count < position - 1) {
                    console.log("inside count ", count);
                    temp = temp.next;
                    count++;
                }
                var current = temp.next;
                temp.next = current.next;
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:search stock symbol in linked list return position
     * @param symbol :stock symbol to be search
     */
    Linkedlist.prototype.serachSymbol = function (symbol) {
        try {
            var temp = this.HEAD;
            var count = 0;
            for (var i = temp; i != null; i = i.next) {
                count = count + 1;
                if (i.stockSymbol == symbol) {
                    break;
                }
            }
            return count;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:shows all transaction present in linked list
     */
    Linkedlist.prototype.showTransaction = function () {
        try {
            var temp = this.HEAD;
            for (var i = temp; i != null; i = i.next) {
                console.log('Stock Symbol', i.symbol.toLowerCase());
                console.log('Number of Shares', i.noOfShares);
                console.log('Transaction :', i.operation);
                console.log('Transaction Time :', i.dateTime);
                console.log('**************************************************');
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:write newly added stock in json file
     */
    Linkedlist.prototype.writeToJsonFile = function () {
        try {
            var stockArray = new Array();
            var temp = this.HEAD;
            var k = 1;
            for (var i = temp; i != null; i = i.next) {
                var obj = { "stockId": k++,
                    "stockName": i.stockName,
                    "stockSymbol": i.stockSymbol,
                    "noOfShares": i.noOfShares,
                    "sharesPrice": i.sharesPrice };
                stockArray.push(obj);
            }
            var jsonString = JSON.stringify(stockArray);
            fs.writeFileSync('./stock.json', jsonString);
        }
        catch (e) {
            return e;
        }
    };
    return Linkedlist;
}());
exports.Linkedlist = Linkedlist;
