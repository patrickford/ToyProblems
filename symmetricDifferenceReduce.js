function symmetricDifference() {

  var collection = [];
  
  for (var i = 0; i < arguments.length; i++) {
    var uniques = [];
    for (var j = 0; j < arguments[i].length; j++) {
      if (uniques.indexOf(arguments[i][j]) == -1)
        uniques.push(arguments[i][j]);
    }
    collection.push(uniques);
  }

  return collection.reduce(function(arrA, arrB) {
    var union = [];
    for (var k = 0; k < arrA.length; k++) {
      if (arrB.indexOf(arrA[k]) == -1) {
        union.push(arrA[k]);
      } else {
        arrB = arrB.slice(0,arrB.indexOf(arrA[k])).concat(arrB.slice(arrB.indexOf(arrA[k])+1));
      }
    }
    return union.concat(arrB);      
  });
}