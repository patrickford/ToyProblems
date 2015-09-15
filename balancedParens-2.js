function balancedParens(str) {
  str = str.match(/[\[\]/)/(/}/{]/g);

  if (str.length % 2 == 1) {
      return false;
  }

  var brackets = ['[', ']', '(', ')', '{', '}'];

  var posIndex = str.map(function(char) {
    console.log("char = " + char);
    return brackets.indexOf(char);
  });

  var stack = [];

  for (var i = 0; i < posIndex.length; i++) {
    if (posIndex[i] % 2 == 0) { 
      stack.push(posIndex[i]);
    } 
    if (posIndex[i] % 2 == 1) { 
      if (stack.pop() != posIndex[i] - 1) {
        return false;
      }
    }
  }
  return stack.length == 0;
}