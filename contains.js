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

// write 'contains' function using 'reduce'
function contains(collection, target) {
  return reduce(collection, function (accumulator, element) {
      return accumulator || element === target;
  }, false);
}