function reduce(collection, callback, initial) { 
  var accumulator = initial;
  each(collection, function (element) { 
    if (accumulator === undefined) { 
      accumulator = element; } 
    else { 
      accumulator = callback(accumulator, element); 
    } 
  });
  return accumulator; 
}