//alert("Hello");

let card_types=["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif",
"revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
card_types.sort(shuffle);

let cards_in_game = []; 
let cards_status = [];
let playTimes = 0;
let cards = 1;
let idInterval = 1000;
game_init();


function game_init() {
    cards_in_game = []; 
    cards_status = [];
    cards = 1;
    playTimes = 0;
    while (cards%2 !== 0 || cards < 4 || cards > 14) { 
        cards = prompt("Com quantas cartas quer jogar? (Número Par de 4 a 14)");
    }
    let element = document.querySelector('.container_cards');
    element.innerHTML = '';
    for (i=0;i<cards;i++) {
        element.innerHTML += `
        <div class="cards card${i}" onclick="cardClick(${i})">
        <img src="img/back.png"/>
        </div>`;
        cards_status.push('unselected');
    }
    for (i=0;i<cards/2;i++) {
        cards_in_game.push(card_types[i]);
        cards_in_game.push(card_types[i]);
    }
    cards_in_game.sort(shuffle);
}


function cardClick(cardNum) {
   if (cards_status[cardNum] === 'unselected' && cards_status.indexOf('selected2') < 0) {
      if (cards_status.indexOf('selected1') == -1) {
         cards_status[cardNum] = 'selected1';
         open_card(cardNum);
       }
       else if (cards_status.indexOf('selected2') == -1) {
         cards_status[cardNum] = 'selected2';
         open_card(cardNum);
         cardEqualCheck();
        }
   }
}

function cardEqualCheck() {
    playTimes+=1;
    let card1 = cards_status.indexOf('selected1');
    let card2 = cards_status.indexOf('selected2');
    if (cards_in_game[card1] === cards_in_game[card2]) {
        cards_status[card1] = 'final';
        cards_status[card2] = 'final';
        finalCheck();
    }
    else {
      setTimeout(close_cards,1000, card1, card2);
    }
}

function finalCheck() {
    if (cards_status.indexOf('unselected') == -1) {
    alert(`Você ganhou em ${playTimes} jogadas`)
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

    
function open_card(cardNum) {
    let card_selected = document.querySelector(`.card${cardNum}`);
    card_selected.innerHTML = '';
    card_selected.innerHTML = `<img src="img/${cards_in_game[cardNum]}" />`;
}

function close_cards(c1, c2) {
    let card_selected = document.querySelector(`.card${c1}`);
    card_selected.innerHTML = '';
    card_selected.innerHTML = `<img src="img/back.png" />`;
    
    
    card_selected = document.querySelector(`.card${c2}`);
    card_selected.innerHTML = '';
    card_selected.innerHTML = `<img src="img/back.png" />`;
    
    cards_status[c1] = 'unselected';
    cards_status[c2] = 'unselected';

}