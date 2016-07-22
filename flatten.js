 var arr = [ [2,3], [4,5], [6,7,8] ] 

 function flatten(arr) {
  var result = [];
  for (var i=0; i<arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;
 }