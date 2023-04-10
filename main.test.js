//👉 Write your tests below here:

//import testing functions from jest
import { test, expect } from "@jest/globals";

//import function to be tested
import { sumofTwoLowestNumbers } from "./main.js";

//TEST CASES
//Test Case 1 - Check when all inputs are positive integers and not in numerical order
test("array of all positive integers", () => {
    expect(sumofTwoLowestNumbers([5, 8, 12, 3, 9])).toEqual(8);
});

//test Case 2 - check again with all positive integers not in numerical order where smallest nums are double digits
test("array of all positive integers 2", () => {
    expect(
        sumofTwoLowestNumbers([10, 104, 25, 67, 443, 932, 12, 24, 75])
    ).toEqual(22);
});

//Test Case 3 - test with array containing duplicates
test("array containing duplicates", () => {
    expect(sumofTwoLowestNumbers([7, 5, 2, 4, 2, 4, 5, 7])).toEqual(4);
});

//Test Case 4 - test with array containing negative numbers
test("array containing negatives", () => {
    expect(sumofTwoLowestNumbers([-5, -8, 4, 10, -2, 0, 1])).toEqual(-13);
});

//Test case 5 - test with array containing positive floats (decimals)
test("array containing positive floats", () => {
    expect(sumofTwoLowestNumbers([0.5, 2.1, 1.3, 7.8, 11.4, 5.9])).toEqual(1.8);
});

//Test case 6 - test with array with negative floats (decimals)
test("array containing negative floats", () => {
    expect(
        sumofTwoLowestNumbers([-0.5, -2.1, -1.3, -7.8, -11.4, -5.9])
    ).toEqual(-19.2);
});

//Test case 7 - test with positve and negative integers and floats and zero and duplicates
test("array containing whole range of values", () => {
    expect(sumofTwoLowestNumbers([250, -250, 0, 0, 11.6, -11.6])).toEqual(
        -261.6
    );
});

/*
Coded solution
export function sumofTwoLowestNumbers(numbers) {
    
    // Sort the input array in ascending order
    numbers.sort((a, b) => a - b);

    // Return the sum of the first two elements (the two lowest numbers)
    return numbers[0] + numbers[1];
}
*/
