// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

var odds = [1,1,2,2,2,3,3,4,4,4,4,4]; // returns [2,4]

function findOdd(arr) {
  //happy coding!
  var result = [];
  var hist = histogram(arr);
  for (prop in hist) {
    if (hist[prop] % 2 === 1) {
      result.push(Number(prop));
    }
  }
  return result;
}

function each(collection, callback){
  if (Array.isArray(collection)) {
    for(var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

function filter (collection, predicate) {
  var result = [];
  each(collection, function(element){
    if (predicate(element)) {
      result.push(element);
    }
  });
  return result;
}

function reduce(collection, callback, initial) {
  var accumVal = initial;
  each(collection, function(element){
       if(accumVal === undefined) {
        accumVal = element;
       } else {
        accumVal = callback(accumVal, element);
       }
  });
  return accumVal;
}

function histogram(collection) {
  return reduce(collection, function(accumVal, element){
    if(accumVal[element] === undefined) {
      accumVal[element] = 1;
    } else {
      accumVal[element]++;
    }
      return accumVal;
  }, {});
}
