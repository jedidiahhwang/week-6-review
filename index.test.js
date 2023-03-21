function sum(num1, num2) {
    
    return parseInt(num1) + parseInt(num2);
}

test("Check if the sum() function adds two numbers together", () => {
    expect(sum(2, 2)).toBe(4);
})

describe("Group of tests for the sum function", () => {
    test("Does sum return a number", () => {
        expect(typeof sum(2, 2)).toEqual("number");
    })

    test("Does sum accept string numbers", () => {
        expect(sum("2", "2")).toEqual(4);
    })
})