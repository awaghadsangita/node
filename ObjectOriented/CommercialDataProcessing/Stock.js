/*********************************************************************************************************
 * @purpose	:stock class contain variable and setters and getters
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
class Stock{
    constructor()
    {
        this.stockId;
        this.stockName;
        this.stockSymbol;
        this.noOfShares;
        this.sharesPrice;
    }
    getstockId()
    {
        return this.stockId;
    }
    setstockId(id)
    {
        this.stockId=id;
    }
    getStockName()
    {
        return this.stockName;
    }
    setStockName(name)
    {
        this.stockName=name;
    }
    getStockSymbol()
    {
        return this.stockSymbol;
    }
    setStockSymbol(symbol)
    {
        this.stockSymbol=symbol;
    }
    getNoOfShares()
    {
        return this.stockName;
    }
    setNoOfShares(noofshares)
    {
        this.noOfShares=noofshares;
    }
    getSharesPrice()
    {
        return this.sharesPrice;
    }
    setSharesPrice(price)
    {
        this.sharesPrice=price;
    }}
    
module.exports={Stock}