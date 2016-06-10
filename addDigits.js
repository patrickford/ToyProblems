function addDigits(num) {
  var sum = 0;
  var str = num.toString();
  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}

function addDigits(num) {
  var sum = 0;
  var digit;
  while (num > 0) {
    digit = num % 10;
    sum += digit;
    num = Math.floor(num/10);
    console.log(digit);
  }
  return sum;
}
