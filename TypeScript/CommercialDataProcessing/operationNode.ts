class OperationNode{
    private personId:number;
    private symbol: string;
    private noOfShares: number;
    private operation: string;
    private dateTime: string;
    private next:OperationNode;
    constructor(pid:number,symbol:string,no:number,operation:string,dt:string){
        this.personId=pid;
        this.symbol=symbol;
        this.noOfShares=no;
        this.operation=operation;
        this.dateTime=dt;
        this.next=null;
    }
}
export{OperationNode}