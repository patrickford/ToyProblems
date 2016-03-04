function sym() {
  var union = [];
  var temp = [];

  function unique(arr) {
    var result = [];
    for (var j = 0; j < arr.length; j++) {
      if (result.indexOf(arr[j]) == -1)
        result.push(arr[j]);
    }
    return result;
  }

  function join(arrA, arrB) {
    var result = [];
    for (var k = 0; k < arrA.length; k++) {
      if (arrB.indexOf(arrA[k]) == -1) {
        result.push(arrA[k]);
      }
    }
    for (var l = 0; l < arrB.length; l++) {
      if (arrA.indexOf(arrB[l]) == -1) {
        result.push(arrB[l]);
      }
    } 
    return result;   
  }

  union = unique(arguments[0]);
  for (var i = 1; i < arguments.length; i++) {
    // make array full of uniques
    temp = unique(arguments[i]);
    union = join(union, temp);
  }

  return union;
}