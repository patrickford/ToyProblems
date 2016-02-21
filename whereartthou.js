function where(collection, source) {
  var arr = [];
  // What's in a name?
  for (var i = 0; i < collection.length; i++) {
    var match = true;
    for (var prop in source) {
      if (collection[i][prop] != source[prop]) {
        match = false;
      }
    }
    if (match) {
      arr.push(collection[i]);
    }
  }
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Tybalt", last: "Capulet" });
