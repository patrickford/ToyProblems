
// I refactored the code slightly so the zip function could handle differing amounts of array inputs.

function zip(){
	var result = [];
	for (var i = 0; i < arguments.length; i++) {
		for (var j = 0; j < arguments[i].length; j++) {
			if (result[j] === undefined) {
				result[j] = [];
			}
			result[j].push(arguments[i][j]);
		}
	}
	return result;
}

// original
var zip1 = zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// // => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
console.log("zip1: ", zip1);

// 4 stooges
var zip2 = zip(['moe', 'larry', 'curly', 'shemp'], [30, 40, 50, 60], [true, false, false, true]);
console.log("zip2: ", zip2);

// 5 stooges
var zip3 = zip(['moe', 'larry', 'curly', 'shemp', 'joe'], [30, 40, 50, 60, 70], [true, false, false, true, true]);
console.log("zip3: ", zip3);

// 5 stooges (added: hair-types)
var zip4 = zip(['moe', 'larry', 'curly', 'shemp', 'joe'], [30, 40, 50, 60, 70], [true, false, false, true, true], ['straight', 'frissy', 'bald', 'stringy', 'shiny-bald']);
console.log("zip4: ", zip4);

// 5 stooges (added: hair types and personalities) 
var zip5 = zip(['moe', 'larry', 'curly', 'shemp', 'joe'], [30, 40, 50, 60, 70], [true, false, false, true, true], ['straight', 'frissy', 'bald', 'greasy', 'shiny-bald'], ['stern', 'scattered', 'goofy', 'babbling', "dim"]);
console.log("zip5: ", zip5);

console.log("-----------------------");



function unZip(arr){
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (result[j] === undefined) {
				result[j] = [];
			}
			result[j].push(arr[i][j]);
		}
	}
	return result;
}

var unZip1 = unZip(zip1);
console.log("unZip1: ", unZip1);

var unZip2 = unZip(zip2);
console.log("unZip2: ", unZip2);

var unZip3 = unZip(zip3);
console.log("unZip3: ", unZip3);

var unZip4 = unZip(zip4);
console.log("unZip4: ", unZip4);

var unZip5 = unZip(zip5);
console.log("unZip5: ", unZip5);

