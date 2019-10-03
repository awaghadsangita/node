class Stock{
    constructor()
    {
        this.stockId;
        this.stockName;
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
    }
}
module.exports={Stock}