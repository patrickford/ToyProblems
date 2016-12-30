function accum(str) {
  result = "";
  for (var i=0; i<str.length; i++) {
    result += str[i].toUpperCase();
    for (var j=0; j<i; j++) {
      result += str[i].toLowerCase();
    }
    if (i < str.length-1) {
      result += "-";
    }
  }
  return result
}

accum("abCd");

function shortestWord(sentence) {
  var words = sentence.split(" ");
  var shortest = words[0].length;
  for (var i=1; i<words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length;
    }
  }
  return shortest;
}

function longestWord(sentence) {
  var words = sentence.split(" ");
  var longest = 0;
  var longestWord;
  for (var i=0; i<words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
      longestWord = i;
    }
  }
  return words[longestWord];
}