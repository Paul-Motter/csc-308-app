const myFunctions = require('./assignment-functions.js');

//----------div tests----------
test("Test div with two positives.", () => {
    const target = 1.5;
    const result = myFunctions.div(15,10);
    expect(result).toBe(target);
})

test("Test div with one negative.", () => {
    const target = -4;
    const result = myFunctions.div(40,-10);
    expect(result).toBe(target);
})

test("Test div with two negatives.", () => {
    const target = 5;
    const result = myFunctions.div(-50,-10);
    expect(result).toBe(target);
})

test("Test div by 0.", () => {
    const target = Infinity;
    const result = myFunctions.div(50,0);
    expect(result).toBe(target);
})

//----------containsNumber tests----------
test("Test containsNumber with empty string.", () =>{
    const target = false;
    const result = myFunctions.containsNumbers("");
    expect(result).toBe(target);
})

test("Test containsNumber with letters only string.", () =>{
    const target = false;
    const result = myFunctions.containsNumbers("abcdefghijklmnopqrstuvwxyz");
    expect(result).toBe(target);
})

test("Test containsNumber with a symbols only string.", () =>{
    const target = false;
    const result = myFunctions.containsNumbers(".,;'\"\t\n\\!@#$%^&*()[]{}_-+=~`<>/?");
    expect(result).toBe(target);
})

test("Test containsNumber with a sentence string.", () =>{
    const target = false;
    const result = myFunctions.containsNumbers("Hello My name is John.");
    expect(result).toBe(target);
})

test("Test containsNumber with a number.", () => {
    const target = true;
    const result = myFunctions.containsNumbers("1");
    expect(result).toBe(target);
})

test("Test containsNumber with a numbers and letters.", () => {
    const target = true;
    const result = myFunctions.containsNumbers("Hello I just turned 4852 years old.");
    expect(result).toBe(target);
})
