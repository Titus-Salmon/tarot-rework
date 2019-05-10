import deckArray from './deckObj';

const shuffleButton = document.getElementById('shuffle');
const turnButton = document.getElementById('turn');

function shuffle(deckArray) {
    //begin Durstenfeld shuffle
    for (let i = deckArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckArray[i], deckArray[j]] = [deckArray[j], deckArray[i]];
    }
    //end Durstenfeld shuffle
    console.log('shuffled deckArray==>', deckArray);

    //begin assign images to shuffled cards & allow for upright/reversed cards
    deckArray.forEach(function (card) {
        var image = document.createElement('img');
        Math.random() > .5 ? image.src = card.imgSrcUp : image.src = card.imgSrcDn; //flip coin for up or down card
        document.body.appendChild(image);
    });
    //end assign images to shuffled cards & allow for upright/reversed cards
    console.log('shuffled deckArray after coin toss==>', deckArray);
}

shuffleButton.addEventListener('click', () => {
    //if there are cards present from a previous shuffle, remove them
    while (document.body.getElementsByTagName('img').length > 0) {
        document.body.removeChild(document.body.lastElementChild);
    }
    //then do shuffle
    shuffle(deckArray)
});

turnButton.addEventListener('click', () => {
    turn();
});