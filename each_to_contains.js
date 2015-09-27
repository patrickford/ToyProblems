var myArray = [1, 2, 3, 4, 5];

// create an object called 'myObject' that contains three properties
var myObject = {
  name: 'luke',
  location: 'tatooine',
  status: 'jedi',
};

// write 'each' function
function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
  for (var key in collection) {
      callback(collection[key]);
    }
  }
}

// write 'each' function
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

// write 'reduce' function
function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function (element) {
    if (accumulator === undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}

// write 'contains' function using 'reduce'
function contains(collection, target) {
  return reduce(collection, function (accumulator, element) {
      return accumulator || element === target;
  }, false);
}

// write 'contains' function using 'reduce'
function contains(collection, target) {
  return reduce(collection, function (accumulator, element) {
    if (accumulator) {
      return true;
    } else {
      return element === target;
    }
  }, false);
}
