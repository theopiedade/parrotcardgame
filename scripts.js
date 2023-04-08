//alert("Hello");
let cards = 1;
while (cards%2 !== 0 || cards < 4 || cards > 14) { 
    cards = prompt("Com quantas cartas quer jogar? (Número Par de 4 a 14)");
}

let element = document.querySelector('.container_cards');
element.innerHTML = '';
for (let i=0;i<cards;i++) {
    element.innerHTML += `
    <div class="cards card${i}" onclick="show_card('${i}','.card${i}')">
    <img src="img/back.png"/>
    </div>`;
}

let card_types=["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif",
"revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];

card_types.sort(comparador);

let cards_in_game = []; 
for (i=0;i<cards/2;i++) {
    cards_in_game.push(card_types[i]);
    cards_in_game.push(card_types[i]);
}
cards_in_game.sort(comparador);

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

function show_card(cardNum,cardClass) {
    //alert("Carta selecionada: "+cardNum);
    let card_selected = document.querySelector(cardClass);
    card_selected.innerHTML = '';
    //card_selected.innerHTML = cards_in_game[cardNum];
    card_selected.innerHTML = `<img src="img/${cards_in_game[cardNum]}"/>`;
}
