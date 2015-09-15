var lengthOfString = function(myString) {

  var words = myString.split(" ");
  var average = 0
  var total = 0;

  for (var i = 0; i < words.length; i++) {
    total = total + words[i].length;
  }

  average = total / words.length;
  return average;
}