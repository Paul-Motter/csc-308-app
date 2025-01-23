const imports = require("./stock-portfolio.js")

// 2.1 
test("Creating a stock portfolio and have it be empty.", () => {
    const myStocks = new imports.StockPortfolio();
    const result = myStocks.stocks;
    const target = [];
    expect(result).toEqual(target);
})

// 2.2
test("Check if portfolio is empty.", () => {
    const myStocks = new imports.StockPortfolio();
    const result = myStocks.isEmpty();
    const target = true;
    expect(result).toBe(target);
})

// 2.3
test("Add to portfolio and check if empty.", () => {
    const myStocks = new imports.StockPortfolio();
    myStocks.addStock("ABC", 12);
    const result = myStocks.isEmpty();
    const target = false;
    expect(result).toBe(target);
})
