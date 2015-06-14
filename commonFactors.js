/*
 * Given two numbers, find all factors of each.
 * Return all of their common factors sorted from highest to lowest.
 *
 * Example 1:
 *  Find all the common factors of 12 and 18.
 *  Factors of 12 are 12, 6, 4, 3, 2, 1
 *  Factors of 18 are 18, 9, 6, 3, 2, 1
 *  The common factors of 12 and 18 are 6, 3, 2, 1
 *
 * Example 2:
 *  var common = commonFactors(20, 25);
 *  console.log(common); // [5, 1]
*/

var commonFactors = function(num1, num2) {
  var max;
  var factors = [];
  if (num1 > num2) {
    max = num1;
  } else {
    max = num2;
  }
  for (var i = max; i >= 1; i--){
    if ((num1 % i) === (num2 % i)){
      factors.push(i);
    }
  }
  return factors;
};