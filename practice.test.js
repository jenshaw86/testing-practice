const practice = require('./practice')

it('capitalizes the first letter of a string', () => {
  expect(practice.capitalize('aliya')).toBe('Aliya');
})

it('capitalizes first letter and lowercases rest', () => {
  expect(practice.capitalize('PARIS')).toBe('Paris');
})

// reverseString(string) takes a string and returns it reversed.
it('reverses a string', () => {
  expect(practice.reverseString('Peanut')).toBe('tunaeP');
})

// A calculator object that contains the basic operations: add, subtract, divide, and multiply.
it('adds two numbers and returns a sum', () => {
  expect(practice.calculator.add(32,45)).toEqual(77);
})

it('subtracts two numbers and returns the difference', () => {
  expect(practice.calculator.subtract(53,34)).toEqual(19)
})

it('multiplies two numbers and returns the product', () => {
  expect(practice.calculator.multiply(31,3)).toEqual(93)
})

it('divides two numbers and returns the quotient', () => {
  expect(practice.calculator.divide(72, 3)).toEqual(24)
})
// Caesar Cipher. Read about it on this website

it('shifts characters by 3 letters', () => {
  expect(practice.caeserCipher(3, 'zebra')).toBe('bgdtc');
})
// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesar() function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
// Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
