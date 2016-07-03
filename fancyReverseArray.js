var fancyReverseArray = function(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array);
    array.splice(i,0,array.pop());
  };
  return array;
};
