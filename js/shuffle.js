import deckArray from './deckObj';


//begin SHUFFLE DECK
function shuffle(deckArray) {
    for (let i = deckArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckArray[i], deckArray[j]] = [deckArray[j], deckArray[i]];
    }
}

shuffle(deckArray);

console.log('shuffled deckArray==>', deckArray);
//end SHUFFLE DECK




//begin show shuffled deck
deckArray.forEach(function (card) {
    var image = document.createElement('img');
    image.src = card.imgSrcUp;
    document.body.appendChild(image);
});
//end show shuffled deck

