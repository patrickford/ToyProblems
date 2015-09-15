function getNames() {
  var names = ["William","Cindy","Maureen","Brenden"];
  var counter = -1;

  return function() {
    counter += 1;
    return names[counter];
  };
}
 
var nextName = getNames();

 
—————————————————————
 
function getNames() {
  var names = ["William", "Cindy", "Maureen", "Brenden"];
  var counter = -1;

  return function() {
      return names[++counter]
  };
}
 
var nextName = getNames();