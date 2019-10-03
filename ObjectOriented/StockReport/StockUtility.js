/*********************************************************************************************************
 * @purpose	:contains various method required to perform various stock operation
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const fs=require('fs');
const stockPojo=require('./Stock');

class StockUtility{
    /**
     * @description: constructor initialized instance variable
     */
    constructor()
    {
        this.stockArray=[];
        this.fileName='./StockDetails.json';
    }
    /**
     * @description:read stock json file and store data to stockArray
     */
    getStockArray()
    {
        let jsonString=fs.readFileSync(this.fileName);
        this.stockArray=JSON.parse(jsonString);
        return this.stockArray;
    }
    /**
     * @description:add new stock to stock json file
     * @param {*} name :name of stock
     * @param {*} noofshares :number of shares
     * @param {*} price :price of stock
     */
    addStock(name,noofshares,price)
    {
        try{
            let regex=/^[a-zA-Z0-9]{1,}$/;
            if(!regex.test(name))
            {
                throw new Error('stock should be alphanumeric');
            }
            if(name==null)
            {
                throw  new Error('stock should not be null');
            }
            if(name=='undefined')
            {
                throw new Error('stock should not be undefined');
            }
            let regex1=/^[0-9]{1,}$/;
            if(!regex1.test(noofshares))
            {
                throw new Error('no of shares should be whole number');
            }
            if(noofshares=='null')
            {
                throw new Error('no of shares should not be null');
            }
            if(noofshares=='undefined')
            {
                throw new Error('no of shares should not be undefined');
            }
            if(typeof price=='string')
            {
                throw new Error('price should not be string');
            }
            if(price=='null')
            {
                throw new Error('price should not be null');
            }
            if(price=='undefined')
            {
                throw new Error('price should not be undefined');
            }
            let stockObj=new stockPojo.Stock();
            stockObj.setstockId(this.stockArray[this.stockArray.length-1].stockId+1);
            stockObj.setStockName(name);
            stockObj.setNoOfShares(noofshares);
            stockObj.setSharesPrice(price);
            this.stockArray.push(stockObj);
            this.writeJsonArrayIntoFile(this.fileName,this.stockArray);
            return stockObj.getstockId();
        }
        catch(e){
            return e;
        }
    }
    /**
     * @description:update stock details
     * @param {*} mStockid :stock id which you want to update
     * @param {*} mNoofshares :number of shares
     * @param {*} mPrice :price of shares
     */
    updateStock(mStockid,mNoofshares,mPrice)
    {
        try{
            if(mStockid=='undefined')
            {
                throw new Error('stock id should not be undefined');
            }
            if(mStockid==null)
            {
                throw new Error('stock id should not be null');
            }
            if(typeof mStockid!='number')
            {
                throw new Error('stock id should be number');
            }
            if(mNoofshares==null && mPrice==null)
            {
                throw new Error('you should update atlest on feild');
            }
            let isSuccess=false;
            for(let i=0;i<this.stockArray.length;i++)
            {
                if(this.stockArray[i].stockId==mStockid)
                {
                    if(mPrice!=null && mNoofshares!=null)
                    {
                        this.stockArray[i].noOfShares=(this.stockArray[i].noOfShares+mNoofshares);
                        this.stockArray[i].sharesPrice=mPrice;
                    }
                    else if(mPrice!=null && mNoofshares==null)
                    {
                        this.stockArray[i].sharesPrice=mPrice;
                    }
                    else if(mPrice==null && mNoofshares!=null)
                    {
                        this.stockArray[i].noOfShares=(this.stockArray[i].noOfShares+mNoofshares);
                    }
                    isSuccess=true;
                }
            }
            let isWrite;
            if(isSuccess==true)
            {
                isWrite=this.writeJsonArrayIntoFile(this.fileName,this.stockArray);
            }
            return isWrite;
        }catch(e)
        {
            return e;
        }
    }
    /**
     * @description:delete stock from json file
     * @param {*} mStockid :stock id which you want to delete from file
     */
    deleteStock(mStockid)
    {
        try{
            let isDeleted=false;
            if(typeof mStockid!='number')
            {
                throw new Error('stock id should be number');
            }
            if(mStockid==null)
            {
                throw new Error('stock id should not be null');
            }
            if(mStockid=='undefined')
            {
                throw new Error('stock id should not be undefined');
            }
            for(let i=0;i<this.stockArray.length;i++)
            {
                if(this.stockArray[i].stockId==mStockid)
                {
                    this.stockArray.splice(i,1);
                    isDeleted=true;
                }
            }
            let isWrite;
            if(isDeleted==true)
            {
                isWrite=this.writeJsonArrayIntoFile(this.fileName,this.stockArray);
            }
            return isWrite;
        }catch(e)
        {
            return e
        }
    }
    /**
     * @description:print the report of stock
     */
    stockReport()
    {
            console.log('====================================================================================================================================');
            console.log(`\t\t\t\t\t\t\tREPORT`);
            console.log('====================================================================================================================================');
        for(let i=0;i<this.stockArray.length;i++)
        {
            console.log('****************************************************************************************************************************************')
            console.log(`\t\t\t\t\t\t\t${this.stockArray[i].stockName.toUpperCase()}`);
            console.log('****************************************************************************************************************************************')
            console.log(`\t\t\t\t\tNumber of Shares :${this.stockArray[i].noOfShares}`);
            console.log(`\t\t\t\t\tPrice of shares:${this.stockArray[i].sharesPrice}`);
            let totalprice=this.stockArray[i].sharesPrice*this.stockArray[i].noOfShares;
            console.log(`\t\t\t\t\t\t\tTOTAL VALUE :${totalprice}\n\n`);
            
        }
    }
    writeJsonArrayIntoFile(file,jsonArr)
    {
        let jsonString=JSON.stringify(jsonArr);
        fs.writeFileSync(file,jsonString);
        this.getStockArray();
        return 'success';
    }
}
module.exports={StockUtility};