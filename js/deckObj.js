//begin define cards as objects
var c0 = {
    name: 'The Fool',
    imgSrcUp: '../img/cardimg/00.jpg',
    imgSrcDn: '../img/cardimg/00r.jpg',
    descUp: 'Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.',
    descDn: 'Negligence, absence, distribution, carelessness, apathy, nullity, vanity.'
}
var c1 = {
    name: 'The Magician',
    imgSrcUp: '../img/cardimg/01.jpg',
    imgSrcDn: '../img/cardimg/01r.jpg',
    descUp: 'Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.',
    descDn: 'Physician, Magus, mental disease, disgrace, disquiet.'
}
var c2 = {
    name: 'The High Priestess',
    imgSrcUp: '../img/cardimg/02.jpg',
    imgSrcDn: '../img/cardimg/02r.jpg',
    descUp: 'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.',
    descDn: 'Passion, moral or physical ardour, conceit, surface knowledge.'
}
var c3 = {
    name: 'The Empress',
    imgSrcUp: '../img/cardimg/03.jpg',
    imgSrcDn: '../img/cardimg/03r.jpg',
    descUp: 'Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.',
    descDn: 'Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.'
}
var c4 = {
    name: 'The Emperor',
    imgSrcUp: '../img/cardimg/04.jpg',
    imgSrcDn: '../img/cardimg/04r.jpg',
    descUp: 'Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.',
    descDn: 'Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.'
}
var c5 = {
    name: 'The Hierophant',
    imgSrcUp: '../img/cardimg/05.jpg',
    imgSrcDn: '../img/cardimg/05r.jpg',
    descUp: 'Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.',
    descDn: 'Society, good understanding, concord, overkindness, weakness.'
}
var c6 = {
    name: 'The Lovers',
    imgSrcUp: '../img/cardimg/06.jpg',
    imgSrcDn: '../img/cardimg/06r.jpg',
    descUp: 'Attraction, love, beauty, trials overcome.',
    descDn: 'Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.'
}
var c7 = {
    name: 'The Chariot',
    imgSrcUp: '../img/cardimg/07.jpg',
    imgSrcDn: '../img/cardimg/07r.jpg',
    descUp: 'Succour, providence also war, triumph, presumption, vengeance, trouble.',
    descDn: 'Riot, quarrel, dispute, litigation, defeat.'
}
var c8 = {
    name: 'Strength',
    imgSrcUp: '../img/cardimg/08.jpg',
    imgSrcDn: '../img/cardimg/08r.jpg',
    descUp: 'Power, energy, action, courage, magnanimity; also complete success and honours.',
    descDn: 'Despotism, abuse if power, weakness, discord, sometimes even disgrace.'
}
var c9 = {
    name: 'The Hermit',
    imgSrcUp: '../img/cardimg/09.jpg',
    imgSrcDn: '../img/cardimg/09r.jpg',
    descUp: 'Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.',
    descDn: 'Concealment, disguise, policy, fear, unreasoned caution.'
}
var c10 = {
    name: 'Fortune',
    imgSrcUp: '../img/cardimg/10.jpg',
    imgSrcDn: '../img/cardimg/10r.jpg',
    descUp: 'Destiny, fortune, success, elevation, luck, felicity.',
    descDn: 'Increase, abundance, superfluity.'
}
var c11 = {
    name: 'Justice',
    imgSrcUp: '../img/cardimg/11.jpg',
    imgSrcDn: '../img/cardimg/11r.jpg',
    descUp: 'Equity, rightness, probity, executive; triumph of the deserving side in law.',
    descDn: 'Law in all its departments, legal complications, bigotry, bias, excessive severity.'
}
var c12 = {
    name: 'The Hanged Man',
    imgSrcUp: '../img/cardimg/12.jpg',
    imgSrcDn: '../img/cardimg/12r.jpg',
    descUp: 'Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.',
    descDn: 'Selfishness, the crowd, body politic.'
}
var c13 = {
    name: 'Death',
    imgSrcUp: '../img/cardimg/13.jpg',
    imgSrcDn: '../img/cardimg/13r.jpg',
    descUp: 'End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.',
    descDn: 'Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.'
}
var c14 = {
    name: 'Temperance',
    imgSrcUp: '../img/cardimg/14.jpg',
    imgSrcDn: '../img/cardimg/14r.jpg',
    descUp: 'Economy, moderation, frugality, management, accommodation.',
    descDn: 'Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.'
}
var c15 = {
    name: 'The Devil',
    imgSrcUp: '../img/cardimg/15.jpg',
    imgSrcDn: '../img/cardimg/15r.jpg',
    descUp: 'Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.',
    descDn: 'Evil fatality, weakness, pettiness, blindness.'
}
var c16 = {
    name: 'The Tower',
    imgSrcUp: '../img/cardimg/16.jpg',
    imgSrcDn: '../img/cardimg/16r.jpg',
    descUp: 'Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.',
    descDn: 'According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.'
}
var c17 = {
    name: 'The Star',
    imgSrcUp: '../img/cardimg/17.jpg',
    imgSrcDn: '../img/cardimg/17r.jpg',
    descUp: 'Loss, theft, privation, abandonment; another reading says-hope and bright prospects.',
    descDn: 'Arrogance, haughtiness, impotence.'
}
var c18 = {
    name: 'The Moon',
    imgSrcUp: '../img/cardimg/18.jpg',
    imgSrcDn: '../img/cardimg/18r.jpg',
    descUp: 'Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.',
    descDn: 'Instability, inconstancy, silence, lesser degrees of deception and error.'
}
var c19 = {
    name: 'The Sun',
    imgSrcUp: '../img/cardimg/19.jpg',
    imgSrcDn: '../img/cardimg/19r.jpg',
    descUp: 'Material happiness, fortunate marriage, contentment.',
    descDn: 'Material happiness, fortunate marriage, contentment, but in a lesser sense as when card upright.'
}
var c20 = {
    name: 'Judgment',
    imgSrcUp: '../img/cardimg/20.jpg',
    imgSrcDn: '../img/cardimg/20r.jpg',
    descUp: 'Change of position, renewal, outcome. Another account specifies total loss though lawsuit.',
    descDn: 'Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.'
}
var c21 = {
    name: 'The World',
    imgSrcUp: '../img/cardimg/21.jpg',
    imgSrcDn: '../img/cardimg/21r.jpg',
    descUp: 'Assured success, recompense, voyage, route, emigration, flight, change of place.',
    descDn: 'Inertia, fixity, stagnation, permanence.'
}
var c22 = {
    name: 'Ace of Wands',
    imgSrcUp: '../img/cardimg/22.jpg',
    imgSrcDn: '../img/cardimg/22r.jpg',
    descUp: 'Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.',
    descDn: 'Fall, decadence, ruin, perdition, to perish also a certain clouded joy.'
}
var c23 = {
    name: 'Two of Wands',
    imgSrcUp: '../img/cardimg/23.jpg',
    imgSrcDn: '../img/cardimg/23r.jpg',
    descUp: 'Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world\'s wealth.',
    descDn: 'Surprise, wonder, enchantment, emotion, trouble, fear.'
}
var c24 = {
    name: 'Three of Wands',
    imgSrcUp: '../img/cardimg/24.jpg',
    imgSrcDn: '../img/cardimg/24r.jpg',
    descUp: 'He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.',
    descDn: 'The end of troubles, suspension or cessation of adversity, toil and disappointment.'
}
var c25 = {
    name: 'Four of Wands',
    imgSrcUp: '../img/cardimg/25.jpg',
    imgSrcDn: '../img/cardimg/25r.jpg',
    descUp: 'They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.',
    descDn: 'The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.'
}
var c26 = {
    name: 'Five of Wands',
    imgSrcUp: '../img/cardimg/26.jpg',
    imgSrcDn: '../img/cardimg/26r.jpg',
    descUp: 'Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.',
    descDn: 'Litigation, disputes, trickery, contradiction.'
}
var c27 = {
    name: 'Six of Wands',
    imgSrcUp: '../img/cardimg/27.jpg',
    imgSrcDn: '../img/cardimg/27r.jpg',
    descUp: 'The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King\'s courier; it is expectation crowned with its own desire, the crown of hope, and so forth.',
    descDn: 'Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.'
}
var c28 = {
    name: 'Seven of Wands',
    imgSrcUp: '../img/cardimg/28.jpg',
    imgSrcDn: '../img/cardimg/28r.jpg',
    descUp: 'It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.',
    descDn: 'Perplexity, embarrassments, anxiety. It is also a caution against indecision.'
}
var c29 = {
    name: 'Eight of Wands',
    imgSrcUp: '../img/cardimg/29.jpg',
    imgSrcDn: '../img/cardimg/29r.jpg',
    descUp: 'Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.',
    descDn: 'Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.'
}
var c30 = {
    name: 'Nine of Wands',
    imgSrcUp: '../img/cardimg/30.jpg',
    imgSrcDn: '../img/cardimg/30r.jpg',
    descUp: 'The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.',
    descDn: 'Obstacles, adversity, calamity.'
}
var c31 = {
    name: 'Ten of Wands',
    imgSrcUp: '../img/cardimg/31.jpg',
    imgSrcDn: '../img/cardimg/31r.jpg',
    descUp: 'A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.',
    descDn: 'Contrarieties, difficulties, intrigues, and their analogies.'
}
var c32 = {
    name: 'Page of Wands',
    imgSrcUp: '../img/cardimg/32.jpg',
    imgSrcDn: '../img/cardimg/32r.jpg',
    descUp: 'Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.',
    descDn: 'Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.'
}
var c33 = {
    name: 'Knight of Wands',
    imgSrcUp: '../img/cardimg/33.jpg',
    imgSrcDn: '../img/cardimg/33r.jpg',
    descUp: 'Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.',
    descDn: 'Rupture, division, interruption, discord.'
}
var c34 = {
    name: 'Queen of Wands',
    imgSrcUp: '../img/cardimg/34.jpg',
    imgSrcDn: '../img/cardimg/34r.jpg',
    descUp: 'A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business.',
    descDn: 'Good, economical, obliging, serviceable. Signifies also--but in certain positions and in the neighbourhood of other cards tending in such directions--opposition, jealousy, even deceit and infidelity.'
}
var c35 = {
    name: 'King of Wands',
    imgSrcUp: '../img/cardimg/35.jpg',
    imgSrcDn: '../img/cardimg/35r.jpg',
    descUp: 'Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.',
    descDn: 'Good, but severe; austere, yet tolerant.'
}
var c36 = {
    name: 'Ace of Cups',
    imgSrcUp: '../img/cardimg/36.jpg',
    imgSrcDn: '../img/cardimg/36r.jpg',
    descUp: 'House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.',
    descDn: 'House of the false heart, mutation, instability, revolution.'
}
var c37 = {
    name: 'Two of Cups',
    imgSrcUp: '../img/cardimg/37.jpg',
    imgSrcDn: '../img/cardimg/37r.jpg',
    descUp: 'Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes',
    descDn: 'Discord, antipathy (no reverse meaning given by Waite)'
}
var c38 = {
    name: 'Three of Cups',
    imgSrcUp: '../img/cardimg/38.jpg',
    imgSrcDn: '../img/cardimg/38r.jpg',
    descUp: 'The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing.',
    descDn: 'Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.'
}
var c39 = {
    name: 'Four of Cups',
    imgSrcUp: '../img/cardimg/39.jpg',
    imgSrcDn: '../img/cardimg/39r.jpg',
    descUp: 'Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.',
    descDn: 'Novelty, presage, new instruction, new relations.'
}
var c40 = {
    name: 'Five of Cups',
    imgSrcUp: '../img/cardimg/40.jpg',
    imgSrcDn: '../img/cardimg/40r.jpg',
    descUp: 'It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.',
    descDn: 'News, alliances, affinity, consanguinity, ancestry, return, false projects.'
}
var c41 = {
    name: 'Six of Cups',
    imgSrcUp: '../img/cardimg/41.jpg',
    imgSrcDn: '../img/cardimg/41r.jpg',
    descUp: 'A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.',
    descDn: 'The future, renewal, that which will come to pass presently.'
}
var c42 = {
    name: 'Seven of Cups',
    imgSrcUp: '../img/cardimg/42.jpg',
    imgSrcDn: '../img/cardimg/42r.jpg',
    descUp: '',
    descDn: ''
}
var c43 = {
    name: 'Eight of Cups',
    imgSrcUp: '../img/cardimg/43.jpg',
    imgSrcDn: '../img/cardimg/43r.jpg',
    descUp: '',
    descDn: ''
}
var c44 = {
    name: 'Nine of Cups',
    imgSrcUp: '../img/cardimg/44.jpg',
    imgSrcDn: '../img/cardimg/44r.jpg',
    descUp: '',
    descDn: ''
}
var c45 = {
    name: 'Ten of Cups',
    imgSrcUp: '../img/cardimg/45.jpg',
    imgSrcDn: '../img/cardimg/45r.jpg',
    descUp: '',
    descDn: ''
}
var c46 = {
    name: 'Page of Cups',
    imgSrcUp: '../img/cardimg/46.jpg',
    imgSrcDn: '../img/cardimg/46r.jpg',
    descUp: '',
    descDn: ''
}
var c47 = {
    name: 'Knight of Cups',
    imgSrcUp: '../img/cardimg/47.jpg',
    imgSrcDn: '../img/cardimg/47r.jpg',
    descUp: '',
    descDn: ''
}
var c48 = {
    name: 'Queen of Cups',
    imgSrcUp: '../img/cardimg/48.jpg',
    imgSrcDn: '../img/cardimg/48r.jpg',
    descUp: '',
    descDn: ''
}
var c49 = {
    name: 'King of Cups',
    imgSrcUp: '../img/cardimg/49.jpg',
    imgSrcDn: '../img/cardimg/49r.jpg',
    descUp: '',
    descDn: ''
}
var c50 = {
    name: 'Ace of Swords',
    imgSrcUp: '../img/cardimg/50.jpg',
    imgSrcDn: '../img/cardimg/50r.jpg',
    descUp: '',
    descDn: ''
}
var c51 = {
    name: 'Two of Swords',
    imgSrcUp: '../img/cardimg/51.jpg',
    imgSrcDn: '../img/cardimg/51r.jpg',
    descUp: '',
    descDn: ''
}
var c52 = {
    name: 'Three of Swords',
    imgSrcUp: '../img/cardimg/52.jpg',
    imgSrcDn: '../img/cardimg/52r.jpg',
    descUp: '',
    descDn: ''
}
var c53 = {
    name: 'Four of Swords',
    imgSrcUp: '../img/cardimg/53.jpg',
    imgSrcDn: '../img/cardimg/53r.jpg',
    descUp: '',
    descDn: ''
}
var c54 = {
    name: 'Five of Swords',
    imgSrcUp: '../img/cardimg/54.jpg',
    imgSrcDn: '../img/cardimg/54r.jpg',
    descUp: '',
    descDn: ''
}
var c55 = {
    name: 'Six of Swords',
    imgSrcUp: '../img/cardimg/55.jpg',
    imgSrcDn: '../img/cardimg/55r.jpg',
    descUp: '',
    descDn: ''
}
var c56 = {
    name: 'Seven of Swords',
    imgSrcUp: '../img/cardimg/56.jpg',
    imgSrcDn: '../img/cardimg/56r.jpg',
    descUp: '',
    descDn: ''
}
var c57 = {
    name: 'Eight of Swords',
    imgSrcUp: '../img/cardimg/57.jpg',
    imgSrcDn: '../img/cardimg/57r.jpg',
    descUp: '',
    descDn: ''
}
var c58 = {
    name: 'Nine of Swords',
    imgSrcUp: '../img/cardimg/58.jpg',
    imgSrcDn: '../img/cardimg/58r.jpg',
    descUp: '',
    descDn: ''
}
var c59 = {
    name: 'Ten of Swords',
    imgSrcUp: '../img/cardimg/59.jpg',
    imgSrcDn: '../img/cardimg/59r.jpg',
    descUp: '',
    descDn: ''
}
var c60 = {
    name: 'Page of Swords',
    imgSrcUp: '../img/cardimg/60.jpg',
    imgSrcDn: '../img/cardimg/60r.jpg',
    descUp: '',
    descDn: ''
}
var c61 = {
    name: 'Knight of Swords',
    imgSrcUp: '../img/cardimg/61.jpg',
    imgSrcDn: '../img/cardimg/61r.jpg',
    descUp: '',
    descDn: ''
}
var c62 = {
    name: 'Queen of Swords',
    imgSrcUp: '../img/cardimg/62.jpg',
    imgSrcDn: '../img/cardimg/62r.jpg',
    descUp: '',
    descDn: ''
}
var c63 = {
    name: 'King of Swords',
    imgSrcUp: '../img/cardimg/63.jpg',
    imgSrcDn: '../img/cardimg/63r.jpg',
    descUp: '',
    descDn: ''
}
var c64 = {
    name: 'Ace of Pentacles',
    imgSrcUp: '../img/cardimg/64.jpg',
    imgSrcDn: '../img/cardimg/64r.jpg',
    descUp: '',
    descDn: ''
}
var c65 = {
    name: 'Two of Pentacles',
    imgSrcUp: '../img/cardimg/65.jpg',
    imgSrcDn: '../img/cardimg/65r.jpg',
    descUp: '',
    descDn: ''
}
var c66 = {
    name: 'Three of Pentacles',
    imgSrcUp: '../img/cardimg/66.jpg',
    imgSrcDn: '../img/cardimg/66r.jpg',
    descUp: '',
    descDn: ''
}
var c67 = {
    name: 'Four of Pentacles',
    imgSrcUp: '../img/cardimg/67.jpg',
    imgSrcDn: '../img/cardimg/67r.jpg',
    descUp: '',
    descDn: ''
}
var c68 = {
    name: 'Five of Pentacles',
    imgSrcUp: '../img/cardimg/68.jpg',
    imgSrcDn: '../img/cardimg/68r.jpg',
    descUp: '',
    descDn: ''
}
var c69 = {
    name: 'Six of Pentacles',
    imgSrcUp: '../img/cardimg/69.jpg',
    imgSrcDn: '../img/cardimg/69r.jpg',
    descUp: '',
    descDn: ''
}
var c70 = {
    name: 'Seven of Pentacles',
    imgSrcUp: '../img/cardimg/70.jpg',
    imgSrcDn: '../img/cardimg/70r.jpg',
    descUp: '',
    descDn: ''
}
var c71 = {
    name: 'Eight of Pentacles',
    imgSrcUp: '../img/cardimg/71.jpg',
    imgSrcDn: '../img/cardimg/71r.jpg',
    descUp: '',
    descDn: ''
}
var c72 = {
    name: 'Nine of Pentacles',
    imgSrcUp: '../img/cardimg/72.jpg',
    imgSrcDn: '../img/cardimg/72r.jpg',
    descUp: '',
    descDn: ''
}
var c73 = {
    name: 'Ten of Pentacles',
    imgSrcUp: '../img/cardimg/73.jpg',
    imgSrcDn: '../img/cardimg/73r.jpg',
    descUp: '',
    descDn: ''
}
var c74 = {
    name: 'Page of Pentacles',
    imgSrcUp: '../img/cardimg/74.jpg',
    imgSrcDn: '../img/cardimg/74r.jpg',
    descUp: '',
    descDn: ''
}
var c75 = {
    name: 'Knight of Pentacles',
    imgSrcUp: '../img/cardimg/75.jpg',
    imgSrcDn: '../img/cardimg/75r.jpg',
    descUp: '',
    descDn: ''
}
var c76 = {
    name: 'Queen of Pentacles',
    imgSrcUp: '../img/cardimg/76.jpg',
    imgSrcDn: '../img/cardimg/76r.jpg',
    descUp: '',
    descDn: ''
}
var c77 = {
    name: 'King of Pentacles',
    imgSrcUp: '../img/cardimg/77.jpg',
    imgSrcDn: '../img/cardimg/77r.jpg',
    descUp: '',
    descDn: ''
}

//end define cards as objects


let deckArray = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43,
c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66,
c67, c68, c69, c70, c71, c72, c73, c74, c75, c76, c77];

export default deckArray;



