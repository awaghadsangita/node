export interface IOperation{
    sell(symbol:string, noOfShares:number, personId:number):any;
    buy(symbol:string, noOfShares:number, personId:number):any; 
    saveFile(filename:string, jsonarray:any[]):any;
    // printReport();
}