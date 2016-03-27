/*
sample(list, [n]) 
Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

_.sample([1, 2, 3, 4, 5, 6]);
=> 4

_.sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
*/

function sample(arr, n) {
  if (n > arr.length) {
    return n + " must be less than array length";
  }
  var result = [];
  var random;
  if (arguments[1] === undefined) {
    random = Math.floor(Math.random() * arr.length);
    return arr[random];
  } else {
    for (var i = 0; i < n; i++) {
      random = Math.floor(Math.random() * arr.length);     
      while (result.indexOf(arr[random]) != -1) {
        random = Math.floor(Math.random() * arr.length); 
      }
      result.push(arr[random]);      
    }
  }
  return result;
}