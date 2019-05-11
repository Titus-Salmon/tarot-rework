import deckArray from './deckObj'; //import entire deck

var minorDeckArray = [];

function createMinor() {    //create Minor Arcana deck from imported entire deck
    for (let i = 0; i < 3; i++) {
        minorDeckArray.push(deckArray[i]);
    }
}
createMinor();
console.log('minorDeckArray===>', minorDeckArray);


var majorDeckArray = [];

function createMajor() {    //create Major Arcana deck from imported entire deck
    for (let i = 3; i < 6; i++) {
        majorDeckArray.push(deckArray[i]);
    }
}
createMajor();
console.log('majorDeckArray===>', majorDeckArray);


var deckToShuffle = deckArray;  //set default deck to use for shuffle() & turn() to entire deck

/** begin set deckToShuffleArray based on selected option in dropdown*/
var deckSelectId = document.getElementById('deckSelect');
var deckSelectValue = deckSelectId.options[deckSelectId.selectedIndex].value;
console.log('deckSelectValue===>', deckSelectValue);

document.getElementById('deckSelect').addEventListener('change', () => {
    console.log('selectedDeck==>', document.getElementsByTagName('option')[deckSelectId.selectedIndex].value);

    if (document.getElementsByTagName('option')[deckSelectId.selectedIndex].value !== 'fullDeck') {
        if (document.getElementsByTagName('option')[deckSelectId.selectedIndex].value == 'majorDeck') {
            deckToShuffle = majorDeckArray;
        } else {
            deckToShuffle = minorDeckArray;
        }
    } else {
        deckToShuffle = deckArray;
    }
});
/** end set deckToShuffleArray based on selected option in dropdown*/


const shuffleButton = document.getElementById('shuffle');
const turnButton = document.getElementById('turn');


function shuffle(deckToShuffle) {
    //begin Durstenfeld shuffle
    for (let i = deckToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckToShuffle[i], deckToShuffle[j]] = [deckToShuffle[j], deckToShuffle[i]];
    }
    //end Durstenfeld shuffle
    console.log('shuffled deckToShuffle==>', deckToShuffle);

    deckToShuffle.forEach(function () {
        var image = document.createElement('img');
        image.src = '../img/cardimg/rider-waite-original-back.jpg';
        image.width = "100";
        image.height = "171";
        document.body.appendChild(image);
    });
}

function turn() {
    //begin assign images to shuffled cards & allow for upright/reversed cards
    deckToShuffle.forEach(function (card) {
        var image = document.createElement('img');
        Math.random() > .5 ? image.src = card.imgSrcUp : image.src = card.imgSrcDn; //flip coin for up or down card
        document.body.appendChild(image);
    });
    //end assign images to shuffled cards & allow for upright/reversed cards
    console.log('shuffled deckToShuffle after coin toss==>', deckToShuffle);
}

shuffleButton.addEventListener('click', () => {
    //if there are cards present from a previous shuffle, remove them
    while (document.body.getElementsByTagName('img').length > 0) {
        document.body.removeChild(document.body.lastElementChild);
    }
    //then do shuffle
    shuffle(deckToShuffle)
});

turnButton.addEventListener('click', () => {
    //if there are cards present from a previous shuffle, remove them
    while (document.body.getElementsByTagName('img').length > 0) {
        document.body.removeChild(document.body.lastElementChild);
    }
    //then do turn
    turn();
});