
class StockPortfolio {
    stocks = new Map();

    constructor() {
    }

    //checks if stocks is empty and returns boolean.
    isEmpty(){
        if (this.stocks.size === 0){
            return true;
        }
        else return false;
    }

    //Adds a stock with a ticker and shares.
    addStock(ticker, shares){
        this.stocks.set(ticker, shares);
    }

    //subtracts an amount of shares from the given stock.
    sellShares(ticker, shares){
        if (this.stocks.has(ticker)) {
            if(this.stocks.get(ticker) > shares){
                this.stocks.set(ticker, this.stocks.get(ticker)-shares);
            }
            else throw Error("Not enough shares.");
        }
        else throw Error("Stock is not in your portfolio.");
    }

    //gets the number of unique ticks within stocks.
    getNumUniqueTicks(){
        return this.stocks.size;
    }

    //returns the number of shares for the given stock.
    getShares(ticker){
        if (this.stocks.has(ticker)){
            return this.stocks.get(ticker);
        }
        else throw Error("Stock is not in your portfolio.");
    }
}

exports.StockPortfolio = StockPortfolio;