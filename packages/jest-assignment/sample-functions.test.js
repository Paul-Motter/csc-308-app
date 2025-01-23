const myFunctions = require('./sample-functions.js');

//Setup functions
beforeEach( () => {

});

beforeAll( () => {

});

// //Teardown functions
afterEach( () => {

});

afterAll( () => {

});

// test( 'Describe your test case', () => {

// });

test('Testing sum with zero -- success', () => {
    const target = 30;
    const result = myFunctions.sum(30, 0);
    expect(result).toBe(target);
});

test('Testing sum -- success', () => {
    const target = 30;
    const result = myFunctions.sum(12, 18);
    expect(result).toBe(target);
});

test('Testing sum negative numbers -- success', () => {
    const target = -30;
    const result = myFunctions.sum(-12, -18);
    expect(result).toBe(target);
});
