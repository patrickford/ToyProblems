var findSmallestDifference = function(arr) {
  if (arr.length > 1) {
    var smallestDifference = Math.abs(arr[0] - arr[1]);
  } else {
    return "Array needs at least two values."
  };
  
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr.length; j++){
      if (i != j) {
        difference = Math.abs(arr[i] - arr[j]);
        if (difference < smallestDifference) {
          smallestDifference = difference;
        }
      }
    }
  }
  return smallestDifference;
};

var result = findSmallestDifference([100, 500, 300, 1000, -200, 990]);
console.log(result);