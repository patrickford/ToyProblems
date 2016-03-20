
// TASK: "Pairwise"

// DESCRIPTION:
// Return the sum of all element indices of array arr that can be paired with one other element 
// to form a sum that equals the value in the second argument arg. 
// If multiple sums are possible, return the smallest sum. 
// Once an element has been used, it cannot be reused to pair with another.

// For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 
// because 4, 2, 3 and 5 can be paired with each other to equal 7 
// and their indices (1, 2, 3, and 5) sum to 11.

// Link: http://www.freecodecamp.com/challenges/pairwise

// SOLUTION 1:
function pairwise(arr, arg) {
  var used = [];
  return arr.reduce(function(previousValue, currentValue, currentIndex, array){
    for (var i = currentIndex + 1; i < array.length; i++) {
      if (used.indexOf(i-1) == -1) {
        if (currentValue + array[i] === arg) {
  			previousValue += (currentIndex + i);
  			used.push(i);
  		}
      }
  	}
  	return previousValue;
      
  }, 0);
}

// SOLUTION 2:
function pairwise(arr, arg) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                sum += (i + j);
                delete arr[i];
                delete arr[j];
            }
        }
    }
    return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7); // should return 11.
pairwise([1, 3, 2, 4], 4); // should return 1.
pairwise([1, 1, 1], 2); // should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1); // should return 10.
pairwise([], 100); // should return 0.



