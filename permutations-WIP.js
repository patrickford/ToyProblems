function permutations(str) {
  var result = [];

  function getPermutations(str, pos, len) {
    if (pos == len) {
      result.push(str);
      return result;
    } else {
      for (var i = pos; i <= len; i++) {
        letters = str.split("");
        var temp = letters[pos];
        letters[pos] = letters[i];
        letters[i] = temp;
        str = letters.join("");
        console.log(str)
        return getPermutations(str, pos+1, len);
      }
    }
  }

  getPermutations(str, 0, str.length);
  return result;
}