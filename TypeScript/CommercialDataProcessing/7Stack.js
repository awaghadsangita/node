"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************************************************
 * @purpose	:maintain the Stock Symbol purchased or sold in a Stack implemented using linked list to indicate transactions done.
 *
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 *
 **********************************************************************************************************/
var fs = require("fs");
var moment = require("moment");
var operationNode_1 = require("./operationNode");
var linkedlist_1 = require("./linkedlist");
var utility = require("../Utility/utility");
var OperationStack = /** @class */ (function () {
    function OperationStack() {
        this.stockArray = new Array();
        this.personArray = new Array();
        this.transactionArray = new Array();
        this.stockjsonFilename = './stock.json';
        this.transactionjsonFilename = './operation.json';
        this.personjsonFilename = './person.json';
        this.linkedlistObj = new linkedlist_1.Linkedlist();
    }
    /**read stock json file and store data in stockArray */
    OperationStack.prototype.readStockJsonArray = function () {
        try {
            var jsonString = fs.readFileSync(this.stockjsonFilename);
            this.stockArray = JSON.parse(jsonString.toString());
        }
        catch (e) {
            return e;
        }
    };
    /**read treanscation json file and store data in treansactionArray */
    OperationStack.prototype.readTrasactionJsonArray = function () {
        try {
            var jsonString = fs.readFileSync(this.transactionjsonFilename);
            this.transactionArray = JSON.parse(jsonString.toString());
        }
        catch (e) {
            return e;
        }
    };
    /**read person json file and store data in personArray */
    OperationStack.prototype.readPersonJsonArray = function () {
        try {
            var jsonString = fs.readFileSync(this.personjsonFilename);
            this.personArray = JSON.parse(jsonString.toString());
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:performs buy operation for commercial data processing
     * @param symbol :stock symbol
     * @param noOfShares :number of shares
     * @param personId :person id
     */
    OperationStack.prototype.buy = function (symbol, noOfShares, personId) {
        try {
            if (symbol == null) {
                throw new Error('stock symbol should not be null');
            }
            if (symbol === undefined) {
                throw new Error('stock symbol should not be undefined');
            }
            var regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(symbol)) {
                throw new Error('stock symbol should not contained special symbol');
            }
            if (typeof noOfShares != 'number') {
                throw new Error('number shares should be number');
            }
            if (noOfShares == null) {
                throw new Error('number of shares should not be null');
            }
            if (noOfShares === undefined) {
                throw new Error('number of shares should not be undefined');
            }
            if (typeof personId != 'number') {
                throw new Error('person id should be number');
            }
            if (personId == null) {
                throw new Error('person id should not be null');
            }
            if (personId === undefined) {
                throw new Error('person id should not be undefined');
            }
            var personArrayIndex = -1;
            var stockArrayIndex = -1;
            for (var i = 0; i < this.personArray.length; i++) {
                if (this.personArray[i]['personId'] == personId) {
                    personArrayIndex = i;
                    break;
                }
            }
            for (var i = 0; i < this.stockArray.length; i++) {
                if (this.stockArray[i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    stockArrayIndex = i;
                    break;
                }
            }
            /**check company has enough shares to sold */
            if (this.stockArray[stockArrayIndex]['noOfShares'] < noOfShares) {
                throw new Error('company should not have enough shares');
            }
            /**check person has enough balance to purchase shares */
            if (this.personArray[personArrayIndex]['balance'] < noOfShares * this.stockArray[stockArrayIndex]['sharesPrice']) {
                throw new Error('you should not have enough balance');
            }
            var isFound = false;
            /**update balance */
            this.personArray[personArrayIndex]['balance'] = this.personArray[personArrayIndex]['balance'] - noOfShares * this.stockArray[stockArrayIndex]['sharesPrice'];
            /**find whether person buy shares first time or not if not update number of shares */
            for (var i = 0; i < this.personArray[personArrayIndex]['shares'].length; i++) {
                if (this.personArray[personArrayIndex]['shares'][i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    isFound = true;
                    var totalShares = this.personArray[personArrayIndex]['shares'][i]['noOfShares'] + noOfShares;
                    this.personArray[personArrayIndex]['shares'][i]['noOfShares'] = totalShares;
                    var tc2_1 = this.saveFile(this.personjsonFilename, this.personArray);
                }
            }
            /**person buy shares first time from requested stock */
            if (isFound === false) {
                /**create json object */
                var obj_1 = {
                    "stockId": this.stockArray[stockArrayIndex]['stockId'],
                    "stockName": this.stockArray[stockArrayIndex]['stockName'],
                    "stockSymbol": this.stockArray[stockArrayIndex]['stockSymbol'],
                    "noOfShares": noOfShares,
                    "sharesPrice": this.stockArray[stockArrayIndex]['sharesPrice']
                };
                /**push json object into list */
                this.personArray[personArrayIndex]['shares'].push(obj_1);
                var tc2_2 = this.saveFile(this.personjsonFilename, this.personArray);
            }
            /**update stock */
            var totalshares = this.stockArray[stockArrayIndex]['noOfShares'] - noOfShares;
            this.stockArray[stockArrayIndex].noOfShares = totalshares;
            /**update person json file and stock json file */
            var tc1 = this.saveFile(this.stockjsonFilename, this.stockArray);
            var tc2 = this.saveFile(this.personjsonFilename, this.personArray);
            if (tc1 == 'success' && tc2 == 'success') {
                var tid = this.transactionArray[this.transactionArray.length - 1]['operationId'] + 1;
                var dt = moment(new Date()).format('DD-MM-YYYY HH:MM');
                /**create json object */
                var obj_2 = {
                    "operationId": tid,
                    "personId": personId,
                    "symbol": symbol,
                    "noOfShares": noOfShares,
                    "operation": "BUY",
                    "dateTime": dt
                };
                /**push json object into array */
                this.transactionArray.push(obj_2);
                /**update transaction json file */
                var tc3 = this.saveFile(this.transactionjsonFilename, this.transactionArray);
                /**create transaction node */
                var newnode = new operationNode_1.OperationNode(personId, symbol, noOfShares, "BUY", dt);
                /**call insert at first method of linked list */
                this.linkedlistObj.insertAtFirst(newnode);
                return 'success';
            }
        }
        catch (e) {
            console.log(e);
            return e;
        }
    };
    /**
     * @description:performs sell operation of commercial data processing
     * @param symbol :stock symbol
     * @param noOfShares :number of shares
     * @param personId :person id
     */
    OperationStack.prototype.sell = function (symbol, noOfShares, personId) {
        try {
            if (symbol == null) {
                throw new Error('stock symbol should not be null');
            }
            if (symbol === undefined) {
                throw new Error('stock symbol should not be undefined');
            }
            var regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(symbol)) {
                throw new Error('stock symbol should not contained special symbol');
            }
            if (typeof noOfShares != 'number') {
                throw new Error('number shares should be number');
            }
            if (noOfShares == null) {
                throw new Error('number of shares should not be null');
            }
            if (noOfShares === undefined) {
                throw new Error('number of shares should not be undefined');
            }
            if (typeof personId != 'number') {
                throw new Error('person id should be number');
            }
            if (personId == null) {
                throw new Error('person id should not be null');
            }
            if (personId === undefined) {
                throw new Error('person id should not be undefined');
            }
            var personArrayIndex = -1;
            var stockArrayIndex = -1;
            /**get person array index of personArray from person id */
            for (var i = 0; i < this.personArray.length; i++) {
                if (this.personArray[i]['personId'] == personId) {
                    personArrayIndex = i;
                    break;
                }
            }
            /**get stock array index of stockArray from symbol */
            for (var i = 0; i < this.stockArray.length; i++) {
                if (this.stockArray[i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    stockArrayIndex = i;
                    break;
                }
            }
            // if (this.personArray[personArrayIndex]['balance'] < noOfShares * this.stockArray[stockArrayIndex]['sharesPrice']) {
            //     throw new Error('you should not have enough balance');
            // }
            var isFound = false;
            /**first check person has requested stock shares if yes update number of shares of person */
            for (var i = 0; i < this.personArray[personArrayIndex]['shares'].length; i++) {
                if (this.personArray[personArrayIndex]['shares'][i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    isFound = true;
                    if (this.personArray[personArrayIndex]['shares'][i]['noOfShares'] > noOfShares) {
                        var totalshares = this.personArray[personArrayIndex]['shares'][i]['noOfShares'] - noOfShares;
                        this.personArray[personArrayIndex]['shares'][i]['noOfShares'] = totalshares;
                        var balance = this.personArray[personArrayIndex]['balance'] + noOfShares * this.stockArray[stockArrayIndex]['sharesPrice'];
                        this.personArray[personArrayIndex]['balance'] = balance;
                        var tc2 = this.saveFile(this.personjsonFilename, this.personArray);
                    }
                    else {
                        throw new Error('you should not have enough shares to sell');
                    }
                }
            }
            if (isFound === false) {
                throw new Error("you should not have " + symbol.toUpperCase() + " company's  shares to sell");
            }
            /**update stock */
            var totolShares = this.stockArray[stockArrayIndex]['noOfShares'] + noOfShares;
            this.stockArray[stockArrayIndex]['noOfShares'] = totolShares;
            if (isFound == true) {
                /**update person json file and stock json file */
                var tc1 = this.saveFile(this.stockjsonFilename, this.stockArray);
                var tc2 = this.saveFile(this.personjsonFilename, this.personArray);
                if (tc1 == 'success' && tc2 == 'success') {
                    var tid = this.transactionArray[this.transactionArray.length - 1]['operationId'] + 1;
                    var dt = moment(new Date()).format('DD-MM-YYYY HH:MM');
                    /**create trasaction json object */
                    var obj_3 = {
                        "operationId": tid,
                        "personId": personId,
                        "symbol": symbol,
                        "noOfShares": noOfShares,
                        "operation": "SELL",
                        "dateTime": dt
                    };
                    /**push json object into array */
                    this.transactionArray.push(obj_3);
                    /**update transaction json file */
                    var tc3 = this.saveFile(this.transactionjsonFilename, this.transactionArray);
                    /**create treansction node */
                    var newnode = new operationNode_1.OperationNode(personId, symbol, noOfShares, "SELL", dt);
                    /**call insert at first method of linked list */
                    this.linkedlistObj.insertAtFirst(newnode);
                    return 'success';
                }
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:write array into json file
     * @param filename :file name
     * @param jsonarray :json array
     */
    OperationStack.prototype.saveFile = function (filename, jsonarray) {
        try {
            var jsonString = JSON.stringify(jsonarray);
            fs.writeFileSync(filename, jsonString);
            this.readPersonJsonArray();
            this.readStockJsonArray();
            this.readTrasactionJsonArray();
            return 'success';
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:runner method
     */
    OperationStack.prototype.mainMethod = function () {
        try {
            /**read stock person and transaction json file and store data in respective array */
            this.readStockJsonArray();
            this.readPersonJsonArray();
            this.readTrasactionJsonArray();
            /**create stack of transaction array */
            for (var i = 0; i < this.transactionArray.length; i++) {
                var personId = this.transactionArray[i]['personId'];
                var symbol = this.transactionArray[i]['symbol'];
                var noOfShares = this.transactionArray[i]['noOfShares'];
                var operation = this.transactionArray[i]['operation'];
                var dateTime = this.transactionArray[i]['dateTime'];
                /**create new node */
                var newnode = new operationNode_1.OperationNode(personId, symbol, noOfShares, operation, dateTime);
                /**call insert at first method of linked list */
                this.linkedlistObj.insertAtFirst(newnode);
            }
            var choice = void 0;
            do {
                /**give various options to user  */
                console.log("1.BUY");
                console.log("2.SELL");
                console.log("3.Show");
                console.log("4.Exit");
                console.log("Enter your choice");
                choice = utility.getNumber(); //get user choice
                switch (choice) {
                    case 1:
                        {
                            /**get information from console from console */
                            process.stdout.write('\t1.Enter the your id :');
                            var pid = utility.getNumber();
                            process.stdout.write('\t2.Enter the Company Symbol :');
                            var symbol = utility.getString();
                            process.stdout.write('\t3.How Many Share you want to buy :');
                            var noofshares = utility.getNumber();
                            var tc1 = this.buy(symbol, noofshares, pid); //call buy()
                            if (tc1 instanceof Error) //if tc1 instance of error
                             {
                                throw tc1.message.toString();
                            }
                            if (tc1 == 'success') //buy operation successfully performed
                             {
                                console.log("\tSuccessfully bought the " + noofshares + " shares from" + symbol);
                            }
                        }
                        break;
                    case 2:
                        {
                            /**get information for sell opeartion from console */
                            process.stdout.write('\t1.Enter the your id :');
                            var pid = utility.getNumber();
                            process.stdout.write('\t2.Enter the Company Symbol :');
                            var symbol = utility.getString();
                            process.stdout.write('\t3.How Many Share you want to sell :');
                            var noofshares = utility.getNumber();
                            var tc1 = this.sell(symbol, noofshares, pid); //call sell() method
                            if (tc1 instanceof Error) {
                                throw tc1.message.toString();
                            }
                            if (tc1 == 'success') //sell operation successfully performed
                             {
                                console.log("\tSuccessfully Sold the " + noofshares + " shres to " + symbol);
                            }
                        }
                        break;
                    case 3: {
                        /**linked list show method */
                        this.linkedlistObj.showTransaction();
                    }
                }
            } while (choice != 4);
        }
        catch (e) {
            console.log('Error occured ', e);
        }
    };
    return OperationStack;
}());
exports.OperationStack = OperationStack;
var obj = new OperationStack();
obj.mainMethod();
