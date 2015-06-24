function capitalize(string) {
  var capNeeded = false;
  for (var i=0; i<string.length; i++) {
    if (string[i] === " ") {
      capNeeded = true;
    } else {
      if capNeeded {
        string[i] = string[i].toUpperCase();
        capNeeded = false;
      }
    }
  }
  return string;
}