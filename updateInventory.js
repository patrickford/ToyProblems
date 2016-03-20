function updateInventory(current, newInv) {
    // All inventory must be accounted for or you're fired!
  
    for (var i = 0; i < newInv.length; i++) {
      for (var j = 0; j < current.length; j++) {
        if (newInv[i][1] === current[j][1]) {
          current[j][0] += newInv[i][0];
          break;
        }
        if (newInv[i][1] < current[j][1]) {
          current.splice(j, 0, newInv[i]);
          break;
        }
        if (j == current.length - 1) {
          current.push(newInv[i]);
          break;
        }
      }
      if (current.length === 0) {
        current.push(newInv[i]);
      }      
    }
    return current;
}