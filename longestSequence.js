function longestSequence(myString) {
  var result = [0,0], 
      longestRun = 0,
      currentRun = 0,
      start = 0,
      end = 0;

  for (var i = 0; i < myString.length; i++) {
    if (i > 0) {
      if (myString[i] === myString[i-1]) {
        currentRun++;
        end = i;
      } else {
        if (currentRun > longestRun) {
          result[0] = start;
          result[1] = end;
          longestRun = currentRun;
        }
      currentRun = 0;
      start = i;
      end = i;
      }
    }
  }
  return result;
}
