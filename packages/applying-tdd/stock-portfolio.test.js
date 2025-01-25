const imports = require("./stock-portfolio.js")

/* 
3. REFLECTION:
    I felt that I was able to follow the test-first approach most of the time. I found the first requirements to be 
difficult to test due to a lack of appropriate methods to retrieve information. For example, in part 2.4 I had no method 
for testing if the portfolio was changed. I therefore wrote perhaps too much production code so that I could get results 
to see if a functionality was actually working. I also thought for part 2.4 that errors, for selling more stocks than 
you have or selling stocks that you don't have any of, would be implied functionalities of the requirement. As such, 
part 2.8 was already complete when I got to it. Overall I liked this approach but think the more specific the requirements 
are the better. I also believe TDD might be more difficult with larger problems that are difficult to split up. One 
last observation is that coming up with method names in the tests was sometimes difficult. I believe this is due to 
discrepancies between how a method is used versus how it's developed. As such a different name sometimes fits better 
depending on the perspective. 
*/

// 2.1 later adapated to 2.2 Tests.
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
    expect(() => myStocks.sellShares("ABC", 17)).toThrow("Not possible to sell this number of shares.");
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

// 2.6 
test("Add a stock and then sell all of them. The stock should no longer be in the portfolio.", () => {
    const myStocks = new imports.StockPortfolio();
    myStocks.addStock("ABC", 15);
    myStocks.sellShares("ABC", 15);
    const result = myStocks.getNumUniqueTicks();
    const target = 0;
    expect(result).toBe(target);
})

test("Add two different stocks and then sell all of one of them. Only one stock should still be in the portfolio.", () => {
    const myStocks = new imports.StockPortfolio();
    myStocks.addStock("ABC", 15);
    myStocks.addStock("DEF", 30)
    myStocks.sellShares("ABC", 15);
    const result = myStocks.getNumUniqueTicks();
    const target = 1;
    expect(result).toBe(target);
})

// 2.7
test("Get shares of a stock not in portfolio.", () => {
    const myStocks = new imports.StockPortfolio()
    const result = myStocks.getShares("ABC");
    const target = 0;
    expect(result).toBe(target);
})

test("Get shares of a stock that is in the portfolio.", () => {
    const myStocks = new imports.StockPortfolio();
    myStocks.addStock("ABC", 10);
    const result = myStocks.getShares("ABC");
    const target = 10;
    expect(result).toBe(target);
})

// 2.8
//Implemented on version 2.4 only slignly modified the message.


