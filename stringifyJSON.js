  var myObj = {
    name: "Patrick",
    address: {
      street: {
        number: "559",
        streetName: "Lincoln Ave."
      },
      city: "Alameda",
      state: "CA",
      zip: "94501"
    },
    phone: "310-351-4050",
    hobbies: ["scuba", "poker", "comedy"],
    pets: ['Bixie', 'Coookie'],
    age: 57
  }

  // "{'name':'Patrick',address{'street'}
  function stringifyJSON(obj) {
    var result = "{";
    function buildString(obj) {
      for (var key in obj) {
        if (Array.isArray(obj[key])) {
          result += "'" + key + "':" + "[";
          for (var i=0; i<obj[key].length; i++) {
            if (typeof obj[key][i] == 'object') {
              buildString(obj[key][i]);
            } else {
              result += "'" + obj[key][i] + "',";
            }
          } 
          result = result.slice(0,result.length-1) + "],";
        } else if (typeof obj[key] == 'object') {
          result += "'" + key + "':" + "{";
          buildString(obj[key]);
          result = result.slice(0,result.length-1) + "},";        
        } else {
          result += "'" + key + "':'" + obj[key] + "',";
        }
      }
    }
    buildString(obj);
    result = result.slice(0,result.length-1) + "}";
    return result;
  }