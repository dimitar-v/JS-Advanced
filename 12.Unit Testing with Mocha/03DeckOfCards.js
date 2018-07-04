//let makeCard = require("./02PlayingCards").makeCard;


function printDeckOfCards(cards) {
    function makeCard(face, suit){
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['S', 'H', 'D', 'C'];
        if(!(faces.includes(face) &&  suits.includes(suit)))
            throw new Error ('Invalid input');
        return {
            face: face,
            suit: suit,
            toString: function () {
                let suitToChar = {
                    S:'\u2660',
                    H:'\u2665',
                    D:'\u2666',
                    C:'\u2663'
                };
                return this.face + suitToChar[this.suit];
            }
        };
    }
    let deck = [];
    for (const card of cards) {
        try {
            deck.push(makeCard(card.slice(0,-1),card.slice(-1)));
        } catch (err) {
            return console.log('Invalid card: ' + card);
        }
    }
    console.log(deck.join(' '));
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);	// A♠ 10♦ K♥ 2♣
console.log();
printDeckOfCards(['5S', '3D', 'QD', '1C']);	    // Invalid card: 1C
