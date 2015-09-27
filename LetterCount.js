function letterCount(str) { 
	var words = str.split(" ");
	var mostRepeated = "";
	var mostRepeats = 0;
	var temp;

	for (var i = 0; i < words.length; i++) { 
		temp = maxCharacterFrequency(words[i]);

		if (temp > mostRepeats) {
			mostRepeats = temp;
			mostRepeated = words[i]; 
		}
	}

	return mostRepeated;
}

function maxCharacterFrequency(string) { 
	string = string.toLowerCase();
	var charCounts = {}; 
	var mostFrequent = 0;

	for (var i = 0; i < string.length; i++) {
		if (charCounts[string[i]]) {
			charCounts[string[i]]++;
		}  
		else {
			charCounts[string[i]] = 1;
		}	
	}

// Count occurances of characters in string for (var i = 0; i < string.length; i++) { charCounts[string[i]] = charCounts[string[i]] ? charCounts[string[i]]+1 : 1; }
	for (var key in charCounts) {
		if (charCounts[key] > mostFrequent){
	    	mostFrequent = charCounts[key]; 
	    }
	} 
	return mostFrequent;
};


/*function LetterCount(str) {
	var words = str.split(" ");
	var obj = {};
	var count = 0;
	var j = 0;
	 for (var i =0; i<str.length; i++){
		if(obj[j].hasOwnproperty(str[i])){
			obj[j] += 1;
		}
		else{
		obj[j] == str[i];
		}
	}
	return obj;
} */