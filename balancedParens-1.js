var balancedParens = function(expression) {
  var open = {'(':'(','[':'[','{':'{'};
  var close = {')':'(',']':'[','}':'{'};
  var chr, last;
  var stack = [];
  var result = true;

  for (var i = 0; i < expression.length; i++) {
    chr = expression[i];
    if (open[chr]) {
      stack.push(chr);
      last = chr;
    }
    if (close[chr]) {
      if (stack.length === 0 || close[chr] !== last) {
        result = false;
      } else {
        stack.pop();
        last = stack[stack.length-1];
      }
    }
  }
  if (stack.length > 0) {
    result = false;
  }
  console.log(i + " " + expression + " " + result);
  return result;
};