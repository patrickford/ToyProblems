function add() {
  sum = 0;
  for (let i=0; i<arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

add(1,2,3,4,5)