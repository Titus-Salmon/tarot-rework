import deckArray from './deckObj'; //import entire deck

const shuffleButton = document.getElementById('shuffle');
const readingButton = document.getElementById('getReading');
const shuffImg = document.body.children.shuffDiv;
const selecImg = document.body.children.selectDiv;
const deckSelectId = document.getElementById('deckSelect');

var selectedArray = [];

var minorDeckArray = [];

function createMinor() { //create Minor Arcana deck from imported entire deck
    for (let i = 22; i < 78; i++) {
        minorDeckArray.push(deckArray[i]);
    }
}
createMinor();
console.log('minorDeckArray===>', minorDeckArray);


var majorDeckArray = [];

function createMajor() { //create Major Arcana deck from imported entire deck
    for (let i = 0; i < 22; i++) {
        majorDeckArray.push(deckArray[i]);
    }
}
createMajor();
console.log('majorDeckArray===>', majorDeckArray);


var deckToShuffle = deckArray; //set default deck to use for shuffle() to entire deck

/** begin set deckToShuffleArray based on selected option in dropdown*/
deckSelectId.addEventListener('change', () => {
    var deckSelectValue = deckSelectId.options[deckSelectId.selectedIndex].value;
    console.log('selectedDeck==>', deckSelectValue);
    if (deckSelectValue !== 'fullDeck') {
        if (deckSelectValue == 'majorDeck') {
            deckToShuffle = majorDeckArray;
        } else {
            deckToShuffle = minorDeckArray;
        }
    } else {
        deckToShuffle = deckArray;
    }
});
/** end set deckToShuffleArray based on selected option in dropdown*/


function shuffle(deckToShuffle) {
    selectedArray = []; //clear previous selectedArray

    //if there are selected cards present from a previous shuffle, remove them
    while (selecImg.children.length > 0) {
        selecImg.removeChild(selecImg.lastElementChild);
    }

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
        document.getElementById('shuffDiv').appendChild(image);
    });
}

shuffleButton.addEventListener('click', () => {
    //if there are cards present from a previous shuffle, remove them
    while (shuffImg.children.length > 0) {
        shuffImg.removeChild(shuffImg.lastElementChild);
    }
    //if there are reading results present from a previous reading, remove them
    var readingUl = document.getElementById('readingUl');
    while (readingUl.children.length > 0) {
        readingUl.removeChild(readingUl.lastElementChild);
    }
    //then do shuffle
    shuffle(deckToShuffle)
});



//push clicked card into selectedArray & make clicked card from shuffled deck invisible;
document.getElementById('shuffDiv').addEventListener('click', function (e) {
    const nodelistShuff = document.querySelectorAll('#shuffDiv');
    var shuffArray = Array.from(nodelistShuff);
    var shuffArr = Array.from(shuffArray[0].children);
    var index = shuffArr.indexOf(e.target)
    console.log(index);
    selectedArray.push(deckToShuffle[index]);
    console.log('selectedArray===>', selectedArray);
    console.log('e.target==>', e.target)

    if (deckToShuffle[index] !== undefined && e.target.style.visibility !== 'hidden') { //turn over clicked card in #selectDiv
        e.target.style.visibility = 'hidden';
        var image = document.createElement('img');

        // function removeCardData_imageUp() {
        //     delete deckToShuffle[index].imgSrcUp;
        //     image.src = deckToShuffle[index].imgSrcDn;
        // }

        // function removeCardData_imageDn() {
        //     delete deckToShuffle[index].imgSrcDn;
        //     image.src = deckToShuffle[index].imgSrcUp;
        // }
        Math.random() > .5 ? image.src = deckToShuffle[index].imgSrcUp : image.src = deckToShuffle[index].imgSrcDn; //flip coin for up or down card
        //Math.random() > .5 ? removeCardData_imageUp() : removeCardData_imageDn(); //flip coin for up or down card
        document.getElementById('selectDiv').appendChild(image);
    }
});

readingButton.addEventListener('click', () => {
    console.log('your reading', selectedArray);
    //if there are reading results present from a previous reading, remove them
    var readingUl = document.getElementById('readingUl');
    while (readingUl.children.length > 0) {
        readingUl.removeChild(readingUl.lastElementChild);
    }
    for (let i = 0; i < selectedArray.length; i++) {
        if (selectedArray[i].imgSrcUp) {
            console.log(selectedArray[i].imgSrcUp);
            var readingUl = document.getElementById('readingUl');
            var readingLi = document.createElement('li');
            var readingLiText = document.createTextNode(selectedArray[i].descUp);
            readingLi.appendChild(readingLiText);
            readingUl.appendChild(readingLi);
        } else {
            console.log(selectedArray[i].imgSrcDn);
            var readingUl = document.getElementById('readingUl');
            var readingLi = document.createElement('li');
            var readingLiText = document.createTextNode(selectedArray[i].descDn);
            readingLi.appendChild(readingLiText);
            readingUl.appendChild(readingLi);
        }
    }
});