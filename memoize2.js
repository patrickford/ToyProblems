memoize = function(func) {
  var cache = {};
  return function() {
    var args = Array.prototype.slice.call(arguments);
    if (cache[args]) {
      return cache[args];
    }
    return cache[args] = func.apply(this, args);
  }
};

//test case 
//expect(add(1, 2)).to.equal(3);
//expect(memoAdd(1, 2)).to.equal(3);

function add(a, b) {
  return a + b;
};

var memoAdd = memoize(add);

//and more tests demonstrating multiple arguments being cached
// expect(memoAdd(1, 2)).to.equal(3);
// expect(memoAdd(3, 4)).to.equal(7);