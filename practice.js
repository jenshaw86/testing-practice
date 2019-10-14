function capitalize(str) {
  let newStr = str.toLowerCase();
  newStr = newStr.charAt(0).toUpperCase().concat(newStr.slice(1))
  return newStr;
}

function reverseString(str) {
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = str[i].concat(newStr)
  }
  return newStr;
}

const calculator = {
  add: (a,b) => {
    return a+b;
  },
  subtract: (a,b) => {
    return a-b;
  },
  multiply: (a,b) => {
    return a*b;
  },
  divide: (a,b) => {
    return a/b;
  }
}

function caesarCipher(num, word){
  let encryption = "";
  for (let i = 0; i < word.length; i++) {
    let origCharCode = word.charCodeAt(i);
    isUpperCase = true;
    if (origCharCode > 97) isUpperCase = false;
    
    let shift = (origCharCode + num) % 26;
    
    if (isUpperCase) {
      shift + 64
    } else {
      shift + 96
    }

    // first, find the character code of each letter
    // add num to character code to shift
    // mod 26 to wrap
    // if under 97, add to 64 (caps)
    // if over, add to 96 (lower)
  }

  return encryption;
}

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesar() function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
// Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caeserCipher: caesarCipher
}