var cards = [1,2,3,4,5,6,7,8,9,10];

function shuffle(cards) {
  var temp;
  var random;
// shuffle the cards into a random order
  for (var i = 0; i < cards.length; i++) {
    temp = cards[i];
    random = Math.floor(Math.random() * cards.length);
    cards[i] = cards[random];
    cards[random] = temp;
  }
  return cards;
}