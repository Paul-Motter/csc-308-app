
class StockPortfolio {
    stocks = [
        // stock{
        //     ticker:"",
        //     shares:0
        // }
    ];

    constructor() {
    }

    isEmpty(){
        if (this.stocks.length === 0){
            return true
        }
        else return false;
    }

    addStock(ticker, shares){
        this.stocks.push(
            {
                ticker: ticker,
                shares: shares
            }
        )
    }
}

exports.StockPortfolio = StockPortfolio;