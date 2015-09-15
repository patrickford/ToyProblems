//Assume 0 - hat off, 1 - hat on
/*
### PROBLEM DESCRIPTION 

# You have 100 cats (You are quite lucky to own so many cats!).

# You have arranged all your cats in a line. Initially, none of your cats 
# have any hats. You take 100 rounds walking around the cats, always starting 
# at the beginning. Every time you stop at a cat, you put a hat on it if it 
# doesn't have one, and you take its hat off if it has one on.

# The first round, you stop at every cat. The second round, you only stop at 
# every 2nd cat (#2, #4, #6, #8, etc.). The third round, you only stop at 
# every 3rd cat (#3, #6, #9, #12, etc.). You continue this process until the 
# 100th round (i.e. you only visit the 100th cat).

# Write a program that prints which cats have hats at the end. */


var collection = {};
for(var t = 1; t <= 100; t++){
  collection["cat" + t] = false;
}

var iterator = 1;
function catsWithHats(collection, iterator){
  // exit condition
  if iterator = 100 {
    return collection;
  }
             
  for(var j = iterator; j<=100; j = j + iterator;){
    collection[j] = !collection[j];
  }

  return catsWithHats(collection, iterator+1);
}

function factorial(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        console.log(num);
        return (num * factorial(num - 1));
    }
}

           
           