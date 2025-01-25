
class StockPortfolio {
    //Map to store stocks
    //Keys: string for ticks
    //Values: int for the number of shares.
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
        //add to shares if stock already exists.
        if(this.stocks.has(ticker)){
            this.stocks.set(ticker, this.stocks.get(ticker)+shares);
        }
        //Add new stock if not in portfolio.
        else {
            this.stocks.set(ticker, shares);
        }
    }

    //subtracts an amount of shares from the given stock.
    sellShares(ticker, shares){
        if (this.stocks.has(ticker)) {
            //resulting shares will be > 0.
            if(this.stocks.get(ticker) > shares){
                this.stocks.set(ticker, this.stocks.get(ticker)-shares);
            }
            //resulting shares will be === 0.
            else if(this.stocks.get(ticker) === shares){
                this.stocks.delete(ticker);
            }
            //resulting shares will be < 0. Cannot happen.
            else throw Error("Not possible to sell this number of shares.");
        }
        //You don't have any shares of the stock.
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
        else return 0;
    }
}

exports.StockPortfolio = StockPortfolio;