myArray = [1,2,3,4,5];

myObj = {one: 1, two: 2, three: 3, four: 4, five: 5}

// Utility functions
function add(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function addTen(x) {
  return x + 10;
}

function even(x) {
  return x % 2 == 0;
}

function odd(x) {
  return x % 2 != 0;
}

function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
}

function map(collection, callback) {
  var result = [];
  each(collection, function (element) {
    result.push(callback(element));
  });
  return result;
}

function filter(collection, predicate) {
  var result = [];
  each(collection, function (element) {
    if (predicate(element)) {
      result.push(element);
    }
  });
  return result;
}

function reduce(collection, callback, initial) { 
  var accumulator = initial;
  each(collection, function (element) { 
    if (accumulator === undefined) { 
      accumulator = element; 
    } 
    else { 
      accumulator = callback(accumulator, element); 
    } 
  });
  return accumulator; 
}

// Refactored reduce function with ternary operator
function reduce(collection, callback, initial) { 
  var accumulator = initial;
  each(collection, function (element) { 
    accumulator = accumulator === undefined ? element : callback(accumulator, element);
  });
  return accumulator; 
}

// Contains using reduce
function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return accumulator || accumulator === target;
  }, false);
}

function contains(collection, target) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i += 1) {
      if (collection[i] === target) { return true };
    }
  } else {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (collection[key] === target) { return true };
      }
    }
  }
  return false;
}
