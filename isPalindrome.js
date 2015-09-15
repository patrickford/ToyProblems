function isPalindrome(string) {
  /* TODO: Strip spaces and punctuation before analyzing string */
  string = string.replace(/[^\w\s]|_/g, "")
                 .replace(/\s+/g, " ");
  for (var i = 0; i < Math.floor(string.length/2); i++) {
    if (string[i] != string[string.length-1-i]) {
      return false;
    }
  }
  return true;
}