//result: Global array which holds the list of permutations
//usedChars: Global utility array which holds a list of "currently-in-use" characters
function permutations(str) {
  var result = [], usedChars = [];
  
  function permute(str) {
    //convert str into a char array (one element for each character)
    var ch;
    var chars = str.split("");
    for (var i = 0; i < chars.length; i++) {
      //get and remove character at index "i" from char array
      ch = chars.splice(i, 1);
      //add removed character to the end of used characters
      usedChars.push(ch);
      //when there are no more characters left in char array to add, add used chars to list of permutations
      if (chars.length == 0) {
        // result[result.length] = usedChars.join("");
        if (result.indexOf(usedChars.join("")) == -1) {
          result.push(usedChars.join(""));
        }
      }
      //send characters (minus the removed one from above) from char array to be permuted
      permute(chars.join(""));
      //add removed character back into char array in original position
      chars.splice(i, 0, ch);
      //remove the last character used off the end of used characters array
      usedChars.pop();
    }
  }
  permute(str);
  return result;
}