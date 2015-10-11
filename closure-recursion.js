function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}


function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str.slice(0,1) != str.slice(-1)) {
    return false;
  }
  console.log(str);
  return isPalindrome(str.slice(1,-1))
}

