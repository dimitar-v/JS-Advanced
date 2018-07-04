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

//module.exports = {makeCard};

console.log('' + makeCard('A', 'S'));	//A♠
console.log('' + makeCard('10', 'H'));  //10♥
console.log('' + makeCard('1', 'S'));	//Error