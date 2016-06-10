function generateGUID() {
  // generate random 4 char hex
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
  }
 
  // call S4, insert hyphens, plus stitch in '4' in the third group
  guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
  return guid;  
}
