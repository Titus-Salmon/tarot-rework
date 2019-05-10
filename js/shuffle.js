import deckArray from './deckObj';


//begin Durstenfeld shuffle
function shuffle(deckArray) {
    for (let i = deckArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckArray[i], deckArray[j]] = [deckArray[j], deckArray[i]];
    }
}
//end Durstenfeld shuffle


shuffle(deckArray);
console.log('shuffled deckArray==>', deckArray);


//begin show shuffled deck
deckArray.forEach(function (card) {
    var image = document.createElement('img');
    Math.random() > .5 ? image.src = card.imgSrcUp : image.src = card.imgSrcDn; //flip coin for up or down card
    document.body.appendChild(image);
});
//end show shuffled deck