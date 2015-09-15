function ThirdGreatest(strArr) { 
  var first = "", second = "", third = "";
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= first.length) {
      third = second;
      second = first; 
      first = strArr[i];          
      console.log ("first longest " + first + " " + second + " " + third);
      continue;
    }
    if (strArr[i].length >= second.length) {
      third = second;
      second = strArr[i];
      console.log ("second longest " + first + " " + second + " " + third);      
      continue;
    } 
    if (strArr[i].length >= third.length) {
      third = strArr[i];
      console.log ("third longest "  + first + " " + second + " " + third);      
      continue;
    }        
  } 
  return third;        
}
   
