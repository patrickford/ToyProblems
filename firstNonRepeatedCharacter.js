/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if ((string === undefined) || (string.length === 0)) {
    return false;
  }
  var charCounts = {};
  for (var i = 0; i < string.length; i++) {
    charCounts[string[i]] = charCounts[string[i]] ? charCounts[string[i]]+1 : 1;
  }
  for (var j = 0; j < string.length; j++) {
    if (charCounts[string[j]] === 1) {
      return string[j];
    } 
  }
  return false;
};