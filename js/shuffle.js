//begin define cards as objects

var c0 = {
    name: 'The Fool',
    imgSrcUp: '../img/cardimg/00.jpg',
    imgSrcDn: '../img/cardimg/00r.jpg'
}

var c1 = {
    name: 'The Magician',
    imgSrcUp: '../img/cardimg/01.jpg',
    imgSrcDn: '../img/cardimg/01r.jpg'
}

var c2 = {
    name: 'The High Priestess',
    imgSrcUp: '../img/cardimg/02.jpg',
    imgSrcDn: '../img/cardimg/02r.jpg'
}

//end define cards as objects


const deck = [
    c0, c1, c2
]


//begin SHUFFLE DECK

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

shuffle(deck);

console.log('shuffled deck==>', deck);

//end SHUFFLE DECK


//begin show shuffled deck

deck.forEach(function (card) {
    var image = document.createElement('img');
    image.src = card.imgSrcUp;
    document.body.appendChild(image);
});

//end show shuffled deck

