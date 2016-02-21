/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes 
 * a subtractive obertion. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral(romanNumeral){

  var result = 0;
  var subtractive = false;
  var romanChars = romanNumeral.toUpperCase().split("");

  for (var i = 0; i < romanChars.length; i++) {

    // Check two charactors for subtractive obertion
    if (i <= romanChars.length - 2) {
      if (romanChars[i+1] === "M" && romanChars[i] === "C") {
        subtractive = true;
      }
      if (romanChars[i+1] === "D" && romanChars[i] === "C") {
        subtractive = true;
      }
      if (romanChars[i+1] === "C" && romanChars[i] === "X") {
        subtractive = true;
      }  
      if (romanChars[i+1] === "L" && romanChars[i] === "X") {
        subtractive = true;
      }    
      if (romanChars[i+1] === "X" && romanChars[i] === "I") {
        subtractive = true;
      }  
      if (romanChars[i+1] === "V" && romanChars[i] === "I") {
        subtractive = true;
      }     
    }

    // Process each character taking into account the case of subtractive obertion
    if (subtractive) {
      result -= DIGIT_VALUES[romanChars[i]];
      subtractive = false; 
    } else {
      result += DIGIT_VALUES[romanChars[i]];
    }  
  };

  return result;
};