function solve(arrOfCards){
    let result = [];
    for (let card of arrOfCards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            const currentCard = playingCards(face, suit);
            result.push(currentCard);
        } catch (error) {
            result = ['Invalid card: ' + card];
        }
    }
    // final result
    console.log(result.join(' '));

    function playingCards(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', 'D', 'C'];
        let symbols = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };

        if (!faces.includes(face)) {
            throw new Error('Invalid face: ' + face);
        }

        if (!suits.includes(suit)) {
            throw new Error('Invalid suit: ' + suit);
        }

        const result = {
            face,
            suit: symbols[suit],
            toString() {
                return this.face + this.suit
            },
        };

        return result;
    }
}
solve(['AS', '10D', 'KH', '2C']);
solve(['5S', '3D', 'QD', '1C'])