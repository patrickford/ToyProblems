memoize = function(func) {
  var cache = {};
  return function() {
    var arg = arguments[0];
    if (cache[arg]) {
      console.log('memoized result');
      return cache[arg];
    }
    console.log('non-memoized result');
    return cache[arg] = func(arg);
  }
};

// Test cases
function addTen(x) {
  return x + 10;
}
// Test native function
addTen(7);

// Memoize the function
var add10 = memoize(addTen);

// Test it twice with same argument
add10(8);
add10(8);