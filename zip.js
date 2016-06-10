
/*zip_.zip(*arrays) 
Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays, this can be used to transpose the matrix.

_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

unzip_.unzip(array) 
The opposite of zip. Given an array of arrays, returns a series of new arrays, the first of which contains all of the first elements in the input arrays, the second of which contains all of the second elements, and so on.

_.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
=> [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]*/

function zip(){
	var result = [];
	for(var i = 0; i < arguments.length; i++){
		for(var j = 0; j < arguments[i].length; j++){
			if(i == 0){
				result.push([]);
			}
			result[i].push(arguments[j][i]);
		}
	}
	return result;
}

function unZip(arr){
	var result = [];
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(i == 0){
				result.push([]);
			}
			result[i].push(arr[j][i]);
		}
	}
	return result;
}

var myArray = zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);