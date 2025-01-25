const imports = require("./stock-portfolio.js")

// 2.1 later adapated to 2.2
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

// 2.4
test("Add to portfolio and sell some of those stocks.", () => {
    const myStocks = new imports.StockPortfolio();
    myStocks.addStock("ABC", 12);
    myStocks.sellShares("ABC", 5);
    const result = myStocks.getShares("ABC");
    const target = 7;
    expect(result).toBe(target);
})

test("Add to portfolio and sell more of those stocks than you have.", () => {
    const myStocks = new imports.StockPortfolio();
    myStocks.addStock("ABC", 12);
    expect(() => myStocks.sellShares("ABC", 17)).toThrow("Not enough shares.");
})

test("Sell from stocks whose ticker is not in your portfolio.", () => {
    const myStocks = new imports.StockPortfolio();
    expect(() => myStocks.sellShares("ABC")).toThrow("Stock is not in your portfolio.");
})

// 2.5
test("Get number of unique stocks with nothing in the portfolio", () => {
    const myStocks = new imports.StockPortfolio();
    const result = myStocks.getNumUniqueTicks();
    const target = 0;
    expect(result).toBe(target)
})

test("Get number of unique stocks with multiple stocks in the portfolio.", () => {
    const myStocks = new imports.StockPortfolio();
    myStocks.addStock("ABC", 5);
    myStocks.addStock("DEF", 10);
    const result = myStocks.getNumUniqueTicks();
    const target = 2;
    expect(result).toBe(target)

})
