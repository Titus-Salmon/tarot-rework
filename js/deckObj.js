//'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers',
//'The Chariot', 'Strength', 'The Hermit', 'Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil',
//'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgment', 'The World', 'Ace of Wands', 'Two of Wands', 'Three of Wands',
//'Four of Wands', 'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 'Ten of Wands',
//'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands', 'Ace of Cups', 'Two of Cups', 'Three of Cups',
//'Four of Cups', 'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 'Ten of Cups',
//'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups', 'Ace of Swords', 'Two of Swords', 'Three of Swords',
//'Four of Swords', 'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords',
//'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords', 'Ace of Pentacles',
//'Two of Pentacles', 'Three of Pentacles', 'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles',
//'Seven of Pentacles', 'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles',
//'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles'

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
var c3 = {
    name: 'The Empress',
    imgSrcUp: '../img/cardimg/03.jpg',
    imgSrcDn: '../img/cardimg/03r.jpg'
}
var c4 = {
    name: 'The Emperor',
    imgSrcUp: '../img/cardimg/04.jpg',
    imgSrcDn: '../img/cardimg/04r.jpg'
}
var c5 = {
    name: 'The Hierophant',
    imgSrcUp: '../img/cardimg/05.jpg',
    imgSrcDn: '../img/cardimg/05r.jpg'
}
var c6 = {
    name: 'The Lovers',
    imgSrcUp: '../img/cardimg/06.jpg',
    imgSrcDn: '../img/cardimg/06r.jpg'
}
var c7 = {
    name: 'The Chariot',
    imgSrcUp: '../img/cardimg/07.jpg',
    imgSrcDn: '../img/cardimg/07r.jpg'
}
var c8 = {
    name: 'Strength',
    imgSrcUp: '../img/cardimg/08.jpg',
    imgSrcDn: '../img/cardimg/08r.jpg'
}
var c9 = {
    name: 'The Hermit',
    imgSrcUp: '../img/cardimg/09.jpg',
    imgSrcDn: '../img/cardimg/09r.jpg'
}
var c10 = {
    name: 'Fortune',
    imgSrcUp: '../img/cardimg/10.jpg',
    imgSrcDn: '../img/cardimg/10r.jpg'
}
var c11 = {
    name: 'Justice',
    imgSrcUp: '../img/cardimg/11.jpg',
    imgSrcDn: '../img/cardimg/11r.jpg'
}
var c12 = {
    name: 'The Hanged Man',
    imgSrcUp: '../img/cardimg/12.jpg',
    imgSrcDn: '../img/cardimg/12r.jpg'
}
var c13 = {
    name: 'Death',
    imgSrcUp: '../img/cardimg/13.jpg',
    imgSrcDn: '../img/cardimg/13r.jpg'
}
var c14 = {
    name: 'Temperance',
    imgSrcUp: '../img/cardimg/14.jpg',
    imgSrcDn: '../img/cardimg/14r.jpg'
}
var c15 = {
    name: 'The Devil',
    imgSrcUp: '../img/cardimg/15.jpg',
    imgSrcDn: '../img/cardimg/15r.jpg'
}
var c16 = {
    name: 'The Tower',
    imgSrcUp: '../img/cardimg/16.jpg',
    imgSrcDn: '../img/cardimg/16r.jpg'
}
var c17 = {
    name: 'The Star',
    imgSrcUp: '../img/cardimg/17.jpg',
    imgSrcDn: '../img/cardimg/17r.jpg'
}
var c18 = {
    name: 'The Moon',
    imgSrcUp: '../img/cardimg/18.jpg',
    imgSrcDn: '../img/cardimg/18r.jpg'
}
var c19 = {
    name: 'The Sun',
    imgSrcUp: '../img/cardimg/19.jpg',
    imgSrcDn: '../img/cardimg/19r.jpg'
}
var c20 = {
    name: 'Judgment',
    imgSrcUp: '../img/cardimg/20.jpg',
    imgSrcDn: '../img/cardimg/20r.jpg'
}
var c21 = {
    name: 'The World',
    imgSrcUp: '../img/cardimg/21.jpg',
    imgSrcDn: '../img/cardimg/21r.jpg'
}
var c22 = {
    name: 'Ace of Wands',
    imgSrcUp: '../img/cardimg/22.jpg',
    imgSrcDn: '../img/cardimg/22r.jpg'
}
var c23 = {
    name: 'Two of Wands',
    imgSrcUp: '../img/cardimg/23.jpg',
    imgSrcDn: '../img/cardimg/23r.jpg'
}
var c24 = {
    name: 'Three of Wands',
    imgSrcUp: '../img/cardimg/24.jpg',
    imgSrcDn: '../img/cardimg/24r.jpg'
}
var c25 = {
    name: 'Four of Wands',
    imgSrcUp: '../img/cardimg/25.jpg',
    imgSrcDn: '../img/cardimg/25r.jpg'
}
var c26 = {
    name: 'Five of Wands',
    imgSrcUp: '../img/cardimg/26.jpg',
    imgSrcDn: '../img/cardimg/26r.jpg'
}
var c27 = {
    name: 'Six of Wands',
    imgSrcUp: '../img/cardimg/27.jpg',
    imgSrcDn: '../img/cardimg/27r.jpg'
}
var c28 = {
    name: 'Seven of Wands',
    imgSrcUp: '../img/cardimg/28.jpg',
    imgSrcDn: '../img/cardimg/28r.jpg'
}
var c29 = {
    name: 'Eight of Wands',
    imgSrcUp: '../img/cardimg/29.jpg',
    imgSrcDn: '../img/cardimg/29r.jpg'
}
var c30 = {
    name: 'Nine of Wands',
    imgSrcUp: '../img/cardimg/30.jpg',
    imgSrcDn: '../img/cardimg/30r.jpg'
}
var c31 = {
    name: 'Ten of Wands',
    imgSrcUp: '../img/cardimg/31.jpg',
    imgSrcDn: '../img/cardimg/31r.jpg'
}
var c32 = {
    name: 'Page of Wands',
    imgSrcUp: '../img/cardimg/32.jpg',
    imgSrcDn: '../img/cardimg/32r.jpg'
}
var c33 = {
    name: 'Knight of Wands',
    imgSrcUp: '../img/cardimg/33.jpg',
    imgSrcDn: '../img/cardimg/33r.jpg'
}
var c34 = {
    name: 'Queen of Wands',
    imgSrcUp: '../img/cardimg/34.jpg',
    imgSrcDn: '../img/cardimg/34r.jpg'
}
var c35 = {
    name: 'King of Wands',
    imgSrcUp: '../img/cardimg/35.jpg',
    imgSrcDn: '../img/cardimg/35r.jpg'
}
var c36 = {
    name: 'Ace of Cups',
    imgSrcUp: '../img/cardimg/36.jpg',
    imgSrcDn: '../img/cardimg/36r.jpg'
}
var c37 = {
    name: 'Two of Cups',
    imgSrcUp: '../img/cardimg/37.jpg',
    imgSrcDn: '../img/cardimg/37r.jpg'
}
var c38 = {
    name: 'Three of Cups',
    imgSrcUp: '../img/cardimg/38.jpg',
    imgSrcDn: '../img/cardimg/38r.jpg'
}
var c39 = {
    name: 'Four of Cups',
    imgSrcUp: '../img/cardimg/39.jpg',
    imgSrcDn: '../img/cardimg/39r.jpg'
}
var c40 = {
    name: 'Five of Cups',
    imgSrcUp: '../img/cardimg/40.jpg',
    imgSrcDn: '../img/cardimg/40r.jpg'
}
var c41 = {
    name: 'Six of Cups',
    imgSrcUp: '../img/cardimg/41.jpg',
    imgSrcDn: '../img/cardimg/41r.jpg'
}
var c42 = {
    name: 'Seven of Cups',
    imgSrcUp: '../img/cardimg/42.jpg',
    imgSrcDn: '../img/cardimg/42r.jpg'
}
var c43 = {
    name: 'Eight of Cups',
    imgSrcUp: '../img/cardimg/43.jpg',
    imgSrcDn: '../img/cardimg/43r.jpg'
}
var c44 = {
    name: 'Nine of Cups',
    imgSrcUp: '../img/cardimg/44.jpg',
    imgSrcDn: '../img/cardimg/44r.jpg'
}
var c45 = {
    name: 'Ten of Cups',
    imgSrcUp: '../img/cardimg/45.jpg',
    imgSrcDn: '../img/cardimg/45r.jpg'
}
var c46 = {
    name: 'Page of Cups',
    imgSrcUp: '../img/cardimg/46.jpg',
    imgSrcDn: '../img/cardimg/46r.jpg'
}
var c47 = {
    name: 'Knight of Cups',
    imgSrcUp: '../img/cardimg/47.jpg',
    imgSrcDn: '../img/cardimg/47r.jpg'
}
var c48 = {
    name: 'Queen of Cups',
    imgSrcUp: '../img/cardimg/48.jpg',
    imgSrcDn: '../img/cardimg/48r.jpg'
}
var c49 = {
    name: 'King of Cups',
    imgSrcUp: '../img/cardimg/49.jpg',
    imgSrcDn: '../img/cardimg/49r.jpg'
}
var c50 = {
    name: 'Ace of Swords',
    imgSrcUp: '../img/cardimg/50.jpg',
    imgSrcDn: '../img/cardimg/50r.jpg'
}
var c51 = {
    name: 'Two of Swords',
    imgSrcUp: '../img/cardimg/51.jpg',
    imgSrcDn: '../img/cardimg/51r.jpg'
}
var c52 = {
    name: 'Three of Swords',
    imgSrcUp: '../img/cardimg/52.jpg',
    imgSrcDn: '../img/cardimg/52r.jpg'
}
var c53 = {
    name: 'Four of Swords',
    imgSrcUp: '../img/cardimg/53.jpg',
    imgSrcDn: '../img/cardimg/53r.jpg'
}
var c54 = {
    name: 'Five of Swords',
    imgSrcUp: '../img/cardimg/54.jpg',
    imgSrcDn: '../img/cardimg/54r.jpg'
}
var c55 = {
    name: 'Six of Swords',
    imgSrcUp: '../img/cardimg/55.jpg',
    imgSrcDn: '../img/cardimg/55r.jpg'
}
var c56 = {
    name: 'Seven of Swords',
    imgSrcUp: '../img/cardimg/56.jpg',
    imgSrcDn: '../img/cardimg/56r.jpg'
}
var c57 = {
    name: 'Eight of Swords',
    imgSrcUp: '../img/cardimg/57.jpg',
    imgSrcDn: '../img/cardimg/57r.jpg'
}
var c58 = {
    name: 'Nine of Swords',
    imgSrcUp: '../img/cardimg/58.jpg',
    imgSrcDn: '../img/cardimg/58r.jpg'
}
var c59 = {
    name: 'Ten of Swords',
    imgSrcUp: '../img/cardimg/59.jpg',
    imgSrcDn: '../img/cardimg/59r.jpg'
}
var c60 = {
    name: 'Page of Swords',
    imgSrcUp: '../img/cardimg/60.jpg',
    imgSrcDn: '../img/cardimg/60r.jpg'
}
var c61 = {
    name: 'Knight of Swords',
    imgSrcUp: '../img/cardimg/61.jpg',
    imgSrcDn: '../img/cardimg/61r.jpg'
}
var c62 = {
    name: 'Queen of Swords',
    imgSrcUp: '../img/cardimg/62.jpg',
    imgSrcDn: '../img/cardimg/62r.jpg'
}
var c63 = {
    name: 'King of Swords',
    imgSrcUp: '../img/cardimg/63.jpg',
    imgSrcDn: '../img/cardimg/63r.jpg'
}
var c64 = {
    name: 'Ace of Pentacles',
    imgSrcUp: '../img/cardimg/64.jpg',
    imgSrcDn: '../img/cardimg/64r.jpg'
}
var c65 = {
    name: 'Two of Pentacles',
    imgSrcUp: '../img/cardimg/65.jpg',
    imgSrcDn: '../img/cardimg/65r.jpg'
}
var c66 = {
    name: 'Three of Pentacles',
    imgSrcUp: '../img/cardimg/66.jpg',
    imgSrcDn: '../img/cardimg/66r.jpg'
}
var c67 = {
    name: 'Four of Pentacles',
    imgSrcUp: '../img/cardimg/67.jpg',
    imgSrcDn: '../img/cardimg/67r.jpg'
}
var c68 = {
    name: 'Five of Pentacles',
    imgSrcUp: '../img/cardimg/68.jpg',
    imgSrcDn: '../img/cardimg/68r.jpg'
}
var c69 = {
    name: 'Six of Pentacles',
    imgSrcUp: '../img/cardimg/69.jpg',
    imgSrcDn: '../img/cardimg/69r.jpg'
}
var c70 = {
    name: 'Seven of Pentacles',
    imgSrcUp: '../img/cardimg/70.jpg',
    imgSrcDn: '../img/cardimg/70r.jpg'
}
var c71 = {
    name: 'Eight of Pentacles',
    imgSrcUp: '../img/cardimg/71.jpg',
    imgSrcDn: '../img/cardimg/71r.jpg'
}
var c72 = {
    name: 'Nine of Pentacles',
    imgSrcUp: '../img/cardimg/72.jpg',
    imgSrcDn: '../img/cardimg/72r.jpg'
}
var c73 = {
    name: 'Ten of Pentacles',
    imgSrcUp: '../img/cardimg/73.jpg',
    imgSrcDn: '../img/cardimg/73r.jpg'
}
var c74 = {
    name: 'Page of Pentacles',
    imgSrcUp: '../img/cardimg/74.jpg',
    imgSrcDn: '../img/cardimg/74r.jpg'
}
var c75 = {
    name: 'Knight of Pentacles',
    imgSrcUp: '../img/cardimg/75.jpg',
    imgSrcDn: '../img/cardimg/75r.jpg'
}
var c76 = {
    name: 'Queen of Pentacles',
    imgSrcUp: '../img/cardimg/76.jpg',
    imgSrcDn: '../img/cardimg/76r.jpg'
}
var c77 = {
    name: 'King of Pentacles',
    imgSrcUp: '../img/cardimg/77.jpg',
    imgSrcDn: '../img/cardimg/77r.jpg'
}

//end define cards as objects


let deckArray = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43,
c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66,
c67, c68, c69, c70, c71, c72, c73, c74, c75, c76, c77];

export default deckArray;



