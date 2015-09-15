
/*
 *  Write a function that takes as its input a string and returns an array of 
 *  arrays showing the frequency of characters.
 *  
 *  
 *       :: Example ::
 *  
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *  
 *  [['i', 4],['s', 4],['p', 2],['m', 1]]
 */

function characterFrequency1 (myString) {
  var result = [],
      charCounts = {},

  for (var i = 0; i < myString.length; i++) {
    if (charCounts[myString[i]]) {
      charCounts[myString[i]] = charCounts[myString[i]] + 1;     
    } else {
      charCounts[myString[i]] = 1;
    }
  }

  for (key in charCounts) {
    var charPair = [];
    charPair[0] = key;
    charPair[1] = charCounts[key];
    result.push(charPair);
  }

  return result;
}


// Alternate implementation using ternary operator
function characterFrequency2 = (string) {
  var result = [];
  var charPair = [];
  var charCounts = {};

// Count occurances of characters in string
  for (var i = 0; i < string.length; i++) {
    charCounts[string[i]] = charCounts[string[i]] ? charCounts[string[i]]+1 : 1;
  }

// Create result arrays
  for (key in charCounts) {
    charPair[0] = key;
    charPair[1] = charCounts[key];
    result.push(charPair);
  }
  
  return result;
};

