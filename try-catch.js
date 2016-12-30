function tryit() {
  try {
    var x = 7;
    x();
    } catch (e) {  
      if (e instanceof TypeError) {
      console.log("TypeError caught");
    } else if (e instanceof ReferenceError) {
      console.log("ReferenceError caught");
    }
  }
}