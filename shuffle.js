var cards = [1,2,3,4,5,6,7,8,9,10];

function shuffle(cards) {
  var temp;
  var random;
  var newCards = cards.slice();
// shuffle the cards into a random order
  for (var i = 0; i < newCards.length; i++) {
    random = Math.floor(Math.random() * newCards.length);    
    temp = newCards[i];
    newCards[i] = newCards[random];
    newCards[random] = temp;
  }
  return newCards;
}