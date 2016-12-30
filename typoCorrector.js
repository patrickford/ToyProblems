function typoCorrector(str, target, value) {
  var regex = new RegExp(target, "g");
  console.log("Regex: " + regex);
  var search = str.match(regex);
  console.log("Search: " + search)
  if (search) {
    var count = search.length;
  } else {
    count = 0;
  }
  var result = str.replace(regex, value);
  console.log("We are replacing " + count + " instances of: " +
    target + " with: " + value);
  console.log(result);
}