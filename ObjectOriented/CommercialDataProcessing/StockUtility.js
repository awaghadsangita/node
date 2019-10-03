/*********************************************************************************************************
 * @purpose	:this class contain various method required for stock market
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const fs = require('fs');
const moment = require('moment');
const stockPOJO = require('./Stock');
const personPOJO = require('./Person');
const transcationPojo = require('./OperationStockPOJO');
class StockAccount {
    constructor() {
        this.stockFileName = './stockDetails.json';
        this.personFileName = './personDetails.json';
        this.transactionFileName = './stockAccountDetails.json';
        this.stockArray;
        this.personArray;
        this.transactionArray;
    }
    /**
     * @description:read person json file and add into personArray
     * @returns:personArray
     */
    getPersonArray() {
        let jsonString = fs.readFileSync(this.personFileName);
        this.personArray = JSON.parse(jsonString);
        return this.personArray;
    }
    /**
     * @description:read stock json file and add into stockArray
     * @returns:stockArray
     */
    getStockArray() {
        let jsonString = fs.readFileSync(this.stockFileName);
        this.stockArray = JSON.parse(jsonString);
        return this.stockArray;
    }
    /**
     * @description:read transcation json file and into transcation array
     * @returns:transactionArray
     */
    getTransctionArray() {
        let jsonString = fs.readFileSync(this.transactionFileName);
        this.transactionArray = JSON.parse(jsonString);
        return this.transactionArray;
    }
    /**
     * @description:buy shares from company
     * @param {*} symbol :unique indentifcation of company
     * @param {*} noOfShares :number shares to buy
     * @param {*} personId :person id
     */
    buy(symbol, noOfShares, personId) {
        try {
            if (symbol == null) {
                throw new Error('stock symbol should not be null');
            }
            if (symbol === undefined) {
                throw new Error('stock symbol should not be undefined');
            }
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(symbol)) {
                throw new Error('stock symbol should not contained special symbol');
            }
            if (typeof noOfShares != 'number') {
                throw new Error('number shares should be number');
            }
            if (noOfShares == null) {
                throw new Error('number of shares should not be null');
            }
            if (noOfShares == 'undefined') {
                throw new Error('number of shares should not be undefined');
            }
            if (typeof personId != 'number') {
                throw new Error('person id should be number');
            }
            if (personId == null) {
                throw new Error('person id should not be null');
            }
            if (personId == 'undefined') {
                throw new Error('person id should not be undefined');
            }
            let personArrayIndex = -1;
            let stockArrayIndex = -1;
            for (let i = 0; i < this.personArray.length; i++) {//find index of personArray based on person id
                if (this.personArray[i].personId == personId) {
                    personArrayIndex = i;
                    break;
                }
            }
            for (let i = 0; i < this.stockArray.length; i++) {//find index of stockArray based on symbol
                if (this.stockArray[i].stockSymbol == symbol) {
                    stockArrayIndex = i;
                    break;
                }
            }
            // console.log(this.personArray[personArrayIndex].balance + "===>balance");
            // console.log(noOfShares * this.stockArray[stockArrayIndex].sharesPrice + "===>price")
            if (this.stockArray[stockArrayIndex].noOfShares < noOfShares) {//check company has enough shares to buy
                throw new Error('company should not have enough shares');
            }
            //check person has enough balance to buy shares
            if (this.personArray[personArrayIndex].balance < noOfShares * this.stockArray[stockArrayIndex].sharesPrice) {
                throw new Error('you should not have enough balance');
            }

            let isFound = false;
            this.personArray[personArrayIndex].balance = this.personArray[personArrayIndex].balance - noOfShares * this.stockArray[stockArrayIndex].sharesPrice;
            for (let i = 0; i < this.personArray[personArrayIndex].shares.length; i++) {
                if (this.personArray[personArrayIndex].shares[i].stockSymbol == symbol) {//check user shares of same company before
                    isFound = true;
                    this.personArray[personArrayIndex].shares[i].noOfShares = this.personArray[personArrayIndex].shares[i].noOfShares + noOfShares;
                }
            }
            if (isFound == false) {//user first time buy shares
                let stockObj = new stockPOJO.Stock();
                stockObj.setstockId(this.stockArray[stockArrayIndex].stockId);
                stockObj.setStockName(this.stockArray[stockArrayIndex].stockName);
                stockObj.setStockSymbol(this.stockArray[stockArrayIndex].stockSymbol);
                stockObj.setNoOfShares(noOfShares);
                stockObj.setSharesPrice(this.stockArray[stockArrayIndex].sharesPrice);
                this.personArray[personArrayIndex].shares.push(stockObj);
            }
            let totalshares = this.stockArray[stockArrayIndex].noOfShares - noOfShares;
            this.stockArray[stockArrayIndex].noOfShares = totalshares;
            let tc1 = this.save(this.stockFileName, this.stockArray);//save data to stock files
            let tc2 = this.save(this.personFileName, this.personArray);//save date person files
            if (tc1 == 'success' && tc2 == 'success') {//above both save operation successfully performed then  add buy operation to treanscation file
                let transactionObj = new transcationPojo.Operation();
                transactionObj.setOperationId(this.transactionArray[this.transactionArray.length - 1].operationId + 1);
                transactionObj.setPersonId(personId);
                transactionObj.setSymbol(symbol);
                transactionObj.setNoOfshares(noOfShares);
                transactionObj.setOperation('BUY')
                let dt = moment(new Date()).format('DD-MM-YYYY HH:MM');
                transactionObj.setDateTime(dt);
                this.transactionArray.push(transactionObj);
                let tc3 = this.save(this.transactionFileName, this.transactionArray);//save transcation data to transcation file
                return 'success';
            }
        }
        catch (e) {
            return e;
        }

    }
    /**
     * @description:sell shares back to company
     * @param {*} symbol :unique indentifcation of company
     * @param {*} noOfShares :number shares to buy
     * @param {*} personId :person id
          */
    sell(symbol, noOfShares, personId) {
        try {
            if (symbol == null) {
                throw new Error('stock symbol should not be null');
            }
            if (symbol === undefined) {
                throw new Error('stock symbol should not be undefined');
            }
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(symbol)) {
                throw new Error('stock symbol should not contained special symbol');
            }
            if (typeof noOfShares != 'number') {
                throw new Error('number shares should be number');
            }
            if (noOfShares == null) {
                throw new Error('number of shares should not be null');
            }
            if (noOfShares == 'undefined') {
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
            let personArrayIndex = -1;
            let stockArrayIndex = -1;
            //find array index of personArray based on person id
            for (let i = 0; i < this.personArray.length; i++) {
                if (this.personArray[i].personId == personId) {
                    personArrayIndex = i;
                    break;
                }
            }
            //find array index of stock array based on symbol
            for (let i = 0; i < this.stockArray.length; i++) {
                if (this.stockArray[i].stockSymbol.toLowerCase() == symbol.toLowerCase()) {
                    stockArrayIndex = i;
                    break;
                }
            }
            //check person has enough shares to sell
            // if (this.personArray[personArrayIndex].balance < noOfShares * this.stockArray[stockArrayIndex].sharesPrice) {
            //     throw new Error('you should not have enough balance');
            // }

            let isFound = false;
            for (let i = 0; i < this.personArray[personArrayIndex].shares.length; i++) {
                //check person has enough shares to sell
                if (this.personArray[personArrayIndex].shares[i].stockSymbol.toLowerCase() == symbol.toLowerCase()) {
                    isFound = true;
                    if (this.personArray[personArrayIndex].shares[i].noOfShares > noOfShares) {
                        let totalshares = this.personArray[personArrayIndex].shares[i].noOfShares - noOfShares;
                        this.personArray[personArrayIndex].shares[i].noOfShares = totalshares;
                        let balance = this.personArray[personArrayIndex].balance - noOfShares * this.stockArray[stockArrayIndex].sharesPrice;
                        this.personArray[personArrayIndex].balance = balance;

                    }
                    else {
                        throw new Error('you should not have enough shares to sell');
                    }
                }
            }
            //if person not have given symbol company's shares
            if (isFound == false) {
                throw new Error(`you should not have ${symbol.toUpperCase()} company's  shares to sell`);
            }
            let totolShares = this.stockArray[stockArrayIndex].noOfShares + noOfShares;//update given company shares by number of shares sold
            this.stockArray[stockArrayIndex].noOfShares = totolShares;
            if (isFound == true) {
                let tc1 = this.save(this.stockFileName, this.stockArray);//save stock date to stock file
                let tc2 = this.save(this.personFileName, this.personArray);//save person data to person file
                if (tc1 == 'success' && tc2 == 'success') {//if both successed then write given sell operation to transction file
                    let transactionObj = new transcationPojo.Operation();
                    transactionObj.setOperationId(this.transactionArray[this.transactionArray.length - 1].operationId + 1);
                    transactionObj.setPersonId(personId);
                    transactionObj.setSymbol(symbol);
                    transactionObj.setNoOfshares(noOfShares);
                    transactionObj.setOperation('SELL');
                    let dt = moment(new Date()).format('DD-MM-YYYY HH:MM');
                    transactionObj.setDateTime(dt);
                    this.transactionArray.push(transactionObj);
                    let tc3 = this.save(this.transactionFileName, this.transactionArray);
                    return 'success';
                }
            }

        } catch (e) {
            return e;
        }
    }
    /**
     * @description:print stock details and customer details
     */
    printReport() {
        console.log('*************************************************************************************************************************');
        console.log('================================\t\t  STOCK REPROT  \t\t========================================');
        console.log('*************************************************************************************************************************');
        for (let i = 0; i < this.stockArray.length; i++) {
            console.log(`\t${this.stockArray[i].stockName.toUpperCase()}`);
            console.log(`\t\tNumber of Shares : ${this.stockArray[i].noOfShares}`);
            console.log(`\t\tPrice of Shares : ${this.stockArray[i].sharesPrice}`);
            let total = this.stockArray[i].sharesPrice * this.stockArray[i].noOfShares;
            console.log(`\t\t\tTotal Value : ${total}`);
        }
        console.log('*************************************************************************************************************************');
        console.log('================================\t\t  USER REPROT  \t\t================================================');
        console.log('*************************************************************************************************************************');
        for (let i = 0; i < this.personArray.length; i++) {
            
            console.log(`\t${this.personArray[i].personId}. Name : ${this.personArray[i].personName.toUpperCase()}`);
            console.log(`\t\t  Shares : `);
            for (let j = 0; j < this.personArray[i].shares.length; j++) {
                let k = j + 1;
                console.log(`\t\t\t${k}.${this.stockArray[j].stockName.toUpperCase()} `);
                console.log(`\t\t\tNumber of Shares : ${this.stockArray[j].noOfShares}`);
                console.log(`\t\t\tPrice of Shares : ${this.stockArray[j].sharesPrice}`);
                let total = this.stockArray[j].sharesPrice * this.stockArray[j].noOfShares;
                console.log(`\t\t\t\tTotal Value : ${total}`);
            }
        }
    }
    save(filename, jsonarray) {
        let jsonString = JSON.stringify(jsonarray);
        fs.writeFileSync(filename, jsonString);
        return 'success';
    }
}

module.exports = { StockAccount }