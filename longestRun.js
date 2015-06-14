var longestRun = function (str) {
    var result = [],
        currentChar,
        previousChar = '',
        currentRun = 1,
        longestRun = 1,
        start = 0;

    for (var i = 0; i < str.length; i++) {
        currentChar = str[i];
        console.log('char = ' + currentChar);
        if (previousChar === currentChar) {
            currentRun++;
            console.log('current run = ' + currentRun);
            if (currentRun > longestRun) {
                result[0] = start;
                result[1] = i;
                longestRun = currentRun;         
            } else {
              start = i;
              currentRun = 1;
            }
        }
        previousChar = currentChar;
    }
    return result;
}