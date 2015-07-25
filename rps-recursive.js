var prepend = function(item) {  
  return function(array) {
    return [item].concat(array);
  };
};

var rockPaperScissors = function(n) {  
  if (n === 0) return [[]];

  // Avoid computing rockPaperScissors(n - 1) three times
  var rpsNMinusOne = rockPaperScissors(n - 1);

  return rpsNMinusOne.map(prepend('rock'))
  .concat(rpsNMinusOne.map(prepend('paper')),
      rpsNMinusOne.map(prepend('scissors')));
};