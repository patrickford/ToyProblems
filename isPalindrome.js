str = "abcdcba";

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isPalindrome2(str) {
  var result = true;
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 -i]) {
      return false;
    }
  }
  return result;
}

function isPalindrome2(str) {
  if (str.slice(0,1) != str.slice(-1)) {
    return false;
  }
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  return isPalindrome2(str.slice(1,-1))
}