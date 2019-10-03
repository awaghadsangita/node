/*********************************************************************************************************
 * @purpose	:operation class variable and respectice getters and setters
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
class Operation{
    constructor()
    {
        this.operationId;
        this.personId;
        this.symbol;
        this.noOfShares;
        this.operation;
        this.dateTime;
    }
    getOperationId()
    {
        return this.operationId;
    }
    setOperationId(oid)
    {
        this.operationId=oid;
    }
    getPersonId()
    {
        return this.personId;
    }
    setPersonId(pid)
    {
        this.personId=pid;
    }
    getSymbol()
    {
        return this.getSymbol;
    }
    setSymbol(symbol)
    {
        this.symbol=symbol;
    }
    getNoOfshares()
    {
        this.noOfShares;
    }
    setNoOfshares(no)
    {
        this.noOfShares=no;
    }
    getOperation()
    {
        return this.operation;
    }
    setOperation(op)
    {
        this.operation=op;
    }
    getDateTime()
    {
        return this.dateTime;
    }
    setDateTime(dt)
    {
        this.dateTime=dt;
    }
}
module.exports={Operation};