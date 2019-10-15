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

it('shifts lowercase string', () => {
  expect(practice.caeserCipher(3, 'zebra')).toBe('cheud');
})

it('shifts uppercase string', () => {
  expect(practice.caeserCipher(5, 'PIZZA')).toBe('UNEEF');
})

it('shifts lower and uppercase characters respectively', () => {
  expect(practice.caeserCipher(1, 'SuperCaliFrageListicExpiAliDocious')).toBe('TvqfsDbmjGsbhfMjtujdFyqjBmjEpdjpvt');
})

it('ignores punctuation', () => {
  expect(practice.caeserCipher(8, 'Seattle, WA')).toBe('Amibbtm, EI');
})

// Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
it('returns an object', () => {
  expect(practice.arrayAnalysis([2,4,6,8,10])).toEqual({min: 2, max: 10, average: 6, length: 5})
})

it('rounds floats', () => {
  expect(practice.arrayAnalysis([1, 2, 4, 5, 3, 11, 123, 0])).toEqual({min: 0, max: 123, average: 19, length: 8})
})