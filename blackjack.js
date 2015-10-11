function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

function makeDeck() {
  var deck = [];
  var suits = ["Club", "Diamond", "Heart", "Spade"];

  for (var rank = 1; rank < 14; rank++) {
    for (var suit = 0; suit < suits.length; suit++) {
      deck.push(new Card(rank, suits[suit]))
    }
  }
  return deck;
}

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

function dealHand(deck) {
  var hand = [];
  shuffle(deck);
  // hand = two random cards from deck
  for(var i = 0; i < 2; i++) {
    hand.push(deck.shift());
  }
  return hand;
}

function dealRound(players, deck) {
  shuffle(deck);

  for(var i =0; i < players.length; i++) {
    table.push
  }
  // order is: player, player, player..., then dealer
  // console log each card
  // output = round = { dealer : [card1, card2],
  //                    players: [[card1, card2], [card1, card2]]}
}

