/*********************************************************************************************************
 * @purpose	:contains all methods required to perform commercial data processing
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 * 
 **********************************************************************************************************/

import {IOperation}  from "./IOpreration";
import * as fs from 'fs';
import * as moment from 'moment';
class OperationUtility implements IOperation {
    private stockArray = new Array();//array of stock information
    private personArray = new Array();//array of person information
    private transactionArray = new Array();//array of transaction information
    private stockjsonFilename = './stock.json';
    private transactionjsonFilename = './operation.json';
    private personjsonFilename = './person.json';
    /**
     * @description:read stock json file and store data in stockArray
     */
    readStockJsonArray() {
        try {
            let jsonString = fs.readFileSync(this.stockjsonFilename);
            this.stockArray = JSON.parse(jsonString.toString());
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:read Transaction json file and store data in transactionArray
     */
    readTrasactionJsonArray() {
        try {
            let jsonString = fs.readFileSync(this.transactionjsonFilename);
            this.transactionArray = JSON.parse(jsonString.toString());
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:read person json file and store data personArray
     */
    readPersonJsonArray() {
        try {
            let jsonString = fs.readFileSync(this.personjsonFilename);
            this.personArray = JSON.parse(jsonString.toString());
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:perform buy operation for commercial data processing
     * @param symbol :stock symbol
     * @param noOfShares :number of shares to buy
     * @param personId :person id
     */
    buy(symbol: string, noOfShares: number, personId: number): any {
        try {
            if (symbol == null||symbol==undefined) {
                throw new Error('stock symbol should not be null or undefined');
            }
            let regex: RegExp = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(symbol)) {
                throw new Error('stock symbol should not contained special symbol');
            }
            if (noOfShares == null||noOfShares==undefined) {
                throw new Error('number of shares should not be null or undefined');
            }
            
            if (typeof noOfShares != 'number') {
                throw new Error('number shares should be number');
            }
            
            if (personId == null||personId===undefined) {
                throw new Error('person id should not be null or undefined');
            }
            if (typeof personId != 'number') {
                throw new Error('person id should be number');
            }
            
            let personArrayIndex = -1;
            let stockArrayIndex = -1;
            /**gives array index from person id of personArray*/
            for (let i = 0; i < this.personArray.length; i++) {
                if (this.personArray[i]['personId'] == personId) {
                    personArrayIndex = i;
                    break;
                }
            }
            /**gives array index from symbol of stockArray */
            for (let i = 0; i < this.stockArray.length; i++) {
                if (this.stockArray[i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    stockArrayIndex = i;
                    break;
                }
            }
            /**check whether company has enough shares */
            if (this.stockArray[stockArrayIndex]['noOfShares'] < noOfShares) {
                throw new Error('company should not have enough shares');
            }
            /**check whether person has enough balance */
            if (this.personArray[personArrayIndex]['balance'] < noOfShares * this.stockArray[stockArrayIndex]['sharesPrice']) {
                throw new Error('you should not have enough balance');
            }
            let isFound: boolean = false;
            this.personArray[personArrayIndex]['balance'] = this.personArray[personArrayIndex]['balance'] - noOfShares * this.stockArray[stockArrayIndex]['sharesPrice'];
            /**check whether person buy shares previously of requested stock if yes update number of shares */
            for (let i = 0; i < this.personArray[personArrayIndex]['shares'].length; i++) {
                if (this.personArray[personArrayIndex]['shares'][i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    isFound = true;
                    let totalShares = this.personArray[personArrayIndex]['shares'][i]['noOfShares'] + noOfShares;
                    this.personArray[personArrayIndex]['shares'][i]['noOfShares'] = totalShares;
                    let tc2 = this.saveFile(this.personjsonFilename, this.personArray);
                }
            }
            /**person buy shares first time */
            if (isFound === false) {
                /**create new json object */
                let obj = {
                    "stockId": this.stockArray[stockArrayIndex]['stockId'],
                    "stockName": this.stockArray[stockArrayIndex]['stockName'],
                    "stockSymbol": this.stockArray[stockArrayIndex]['stockSymbol'],
                    "noOfShares": noOfShares,
                    "sharesPrice": this.stockArray[stockArrayIndex]['sharesPrice']
                }
                /**push json object into shares array */
                this.personArray[personArrayIndex]['shares'].push(obj);
                let tc2 = this.saveFile(this.personjsonFilename, this.personArray);

            }
            /**update company shares */
            let totalshares = this.stockArray[stockArrayIndex]['noOfShares'] - noOfShares;
            this.stockArray[stockArrayIndex].noOfShares = totalshares;
            /**save update stock and person data in json file */
            let tc1 = this.saveFile(this.stockjsonFilename, this.stockArray);
            let tc2 = this.saveFile(this.personjsonFilename, this.personArray);
            if (tc1 == 'success' && tc2 == 'success') {
                let tid = this.transactionArray[this.transactionArray.length - 1]['operationId'] + 1;
                let dt = moment(new Date()).format('DD-MM-YYYY HH:MM');
                let obj = {
                    "operationId": tid,
                    "personId": personId,
                    "symbol": symbol,
                    "noOfShares": noOfShares,
                    "operation": "BUY",
                    "dateTime": dt
                }
                /**save treansction in json file */
                this.transactionArray.push(obj);
                let tc3 = this.saveFile(this.transactionjsonFilename, this.transactionArray);
                return 'success';
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    /**
     * @description:performs sell operation for commercial data processing
     * @param symbol :stock symbol
     * @param noOfShares :number of shares to sell
     * @param personId :person id
     */
    sell(symbol: string, noOfShares: number, personId: number): any {
        try {
            if (symbol == null||symbol==undefined) {
                throw new Error('stock symbol should not be null or undefined');
            }
            let regex: RegExp = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(symbol)) {
                throw new Error('stock symbol should not contained special symbol');
            }
            if (noOfShares == null||noOfShares==undefined) {
                throw new Error('number of shares should not be null or undefined');
            }
            
            if (typeof noOfShares != 'number') {
                throw new Error('number shares should be number');
            }
            
            if (personId == null||personId===undefined) {
                throw new Error('person id should not be null or undefined');
            }
            if (typeof personId != 'number') {
                throw new Error('person id should be number');
            }
            
            let personArrayIndex = -1;
            let stockArrayIndex = -1;
            /**gives array index of personArray from person id */
            for (let i = 0; i < this.personArray.length; i++) {
                if (this.personArray[i]['personId'] == personId) {
                    personArrayIndex = i;
                    break;
                }
            }
            /**gives array index of stockArray from symbol */
            for (let i = 0; i < this.stockArray.length; i++) {
                if (this.stockArray[i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    stockArrayIndex = i;
                    break;
                }
            }
            // /**check whether person has enough shares to sell */
            // if (this.personArray[personArrayIndex]['balance'] < noOfShares * this.stockArray[stockArrayIndex]['sharesPrice']) {
            //     throw new Error('you should not have enough balance');
            // }
            let isFound:boolean = false;
            /**find whether person has requested stock shares if yes update number of shares and balance */
            for (let i = 0; i < this.personArray[personArrayIndex]['shares'].length; i++) {
                if (this.personArray[personArrayIndex]['shares'][i]['stockSymbol'].toLowerCase() == symbol.toLowerCase()) {
                    isFound = true;
                    if (this.personArray[personArrayIndex]['shares'][i]['noOfShares'] > noOfShares) {
                        let totalshares = this.personArray[personArrayIndex]['shares'][i]['noOfShares'] - noOfShares;
                        this.personArray[personArrayIndex]['shares'][i]['noOfShares'] = totalshares;
                        let balance = this.personArray[personArrayIndex]['balance'] + noOfShares * this.stockArray[stockArrayIndex]['sharesPrice'];
                        this.personArray[personArrayIndex]['balance'] = balance;
                        let tc2 = this.saveFile(this.personjsonFilename, this.personArray);
                    }
                    else {
                        throw new Error('you should not have enough shares to sell');
                    }
                }
            }
            /**if person not have requested stock shares */
            if (isFound === false) {
                throw new Error(`you should not have ${symbol.toUpperCase()} company's  shares to sell`);
            }
            /**update stock */
            let totolShares = this.stockArray[stockArrayIndex]['noOfShares'] + noOfShares;
            this.stockArray[stockArrayIndex]['noOfShares'] = totolShares;
            if (isFound == true) {
                /**update stockjson file and person json file */
                let tc1 = this.saveFile(this.stockjsonFilename, this.stockArray);
                let tc2 = this.saveFile(this.personjsonFilename, this.personArray);
                if (tc1 == 'success' && tc2 == 'success') {
                    let tid = this.transactionArray[this.transactionArray.length - 1]['operationId'] + 1;
                    let dt = moment(new Date()).format('DD-MM-YYYY HH:MM');
                    let obj = {
                        "operationId": tid,
                        "personId": personId,
                        "symbol": symbol,
                        "noOfShares": noOfShares,
                        "operation": "SELL",
                        "dateTime": dt
                    }
                    /**update transaction json file */
                    this.transactionArray.push(obj);
                    let tc3 = this.saveFile(this.transactionjsonFilename, this.transactionArray);
                    return 'success';
                }

            }

        } catch (e) {
            return e;
        }
    }
    /**
     * @description:print stock report and user report
     */
    printReport() {
        try {
            /**print all stock information  present json file */
            console.log('*************************************************************************************************************************');
            console.log('================================\t\t  STOCK REPROT  \t\t========================================');
            console.log('*************************************************************************************************************************');
            for (let i = 0; i < this.stockArray.length; i++) {
                console.log("\t" + this.stockArray[i]['stockName'].toUpperCase());
                console.log("\t\tNumber of Shares :" + this.stockArray[i]['noOfShares']);
                console.log("\t\tPrice of Shares :" + this.stockArray[i]['sharesPrice']);
                let total = this.stockArray[i]['sharesPrice'] * this.stockArray[i]['noOfShares'];
                console.log("\t\t\tTotal Value :" + total);
            }
            /**print all user inforation present in json file */
            console.log('**************************************************************************************');
            console.log('\t\t\t\t  USER REPROT ');
            console.log('**************************************************************************************');
            
            for (let k = 0; k < this.personArray.length; k++) {
                
                console.log("\t",this.personArray[k]['personId'] );
                console.log("\tName : ",this.personArray[k]['PersonName']);
                console.log("\t\t  Shares :");
                for (let j = 0; j < this.personArray[k]['shares'].length; j++) {
                    let itr = j + 1;
                    console.log("\t\t\t" + itr +".", this.stockArray[j]['stockName'].toUpperCase());
                    console.log("\t\t\t\tNumber of Shares :" + this.stockArray[j]['noOfShares']);
                    console.log("\t\t\t\tPrice of Shares :" + this.stockArray[j]['sharesPrice']);
                    let total = this.stockArray[j]["sharesPrice"] * this.stockArray[j]["noOfShares"];
                    console.log("\t\t\t\t\tTotal Value :" + total);
                }
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:perform file write operation
     * @param filename :filename
     * @param jsonarray :Array of json file
     */
    saveFile(filename: string, jsonarray: any[]): any {
        try {
            if(filename==null||filename==undefined)
            {
                throw new Error('filename should not be null or undefined');
            }
            if(jsonarray==null || jsonarray==undefined)
            {
                throw new Error('json array should not be null or undefined');
            }
            let jsonString = JSON.stringify(jsonarray);
            fs.writeFileSync(filename, jsonString);
            this.readPersonJsonArray();
            this.readStockJsonArray();
            this.readTrasactionJsonArray();
            return 'success';
        } catch (e) {
            return e;
        }
    }
}
export { OperationUtility };
