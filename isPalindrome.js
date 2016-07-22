str1 = "abcdcba";
str2 = "patrick";

// Using string and array methods
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Using iteration
function isPalindrome2(str) {
  var result = true;
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 -i]) {
      return false;
    }
  }
  return result;
}

// Recursion
function isPalindrome3(str) {
  if (str.slice(0,1) != str.slice(-1)) {
    return false;
  }
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  return isPalindrome3(str.slice(1,-1))
}