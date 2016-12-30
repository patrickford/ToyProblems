function mostFrequentWord(words) {
  // your code here
  // `words` is an array of strings.
  var freq = {};
  for (var i = 0; i < words.length; i++) {
    freq[words[i]] ? freq[words[i]]++ : freq[words[i]] = 1;
  }

  var most = 0;
  var result = "";
  for (var key in freq) {
    if (freq[key] > most) {
      most = freq[key];
      result = key;
    } else if (freq[key] === most) {
      if (key < result) {
        result = key;
      }
    }
  }
  return result;
}

words = ["retrieve", "retrieve", "receive", "get", "receive"];

{retrieve: 2, get: 1, receive: 2};