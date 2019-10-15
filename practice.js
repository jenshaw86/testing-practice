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
  let encryption = '';
  let upperCaseRegex = /[A-Z]/;
  let otherRegex = /[^a-z]/i;
  let base;

    for (let i = 0; i < word.length; i++) {    
      if(word[i].match(otherRegex)){
        encryption += word[i];
      } else {
        base = word[i].match(upperCaseRegex) ? 64 : 96
        
        let code = word.charCodeAt(i) + num;
        if (code - base > 26) {
          code = ((code - base) % 26) + base;
        } 
        
        encryption += String.fromCharCode(code)
      }
      
    }
  return encryption;
}

// Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
function arrayAnalysis(arr) {
  const analysis = {}
  
  arr = arr.sort((a,b) => a - b);
  
  analysis.min = arr[0];
  analysis.max = arr[arr.length - 1];
  analysis.length = arr.length;
  analysis.average = Math.round((arr.reduce((a,c) => a + c)) / analysis.length);

  return analysis;
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caeserCipher: caesarCipher, 
  arrayAnalysis: arrayAnalysis
}