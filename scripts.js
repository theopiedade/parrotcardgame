//alert("Olá");
let cards = 1;
while (cards%2 !== 0 || cards < 4 || cards > 14) { 
    cards = prompt("Com quantas cartas quer jogar? (Pares de 4 a 14)");
}
let element = document.querySelector('.container_cards');
element.innerHTML = '';
for (let i=0;i<cards;i++) {
    element.innerHTML += '<div class="cards"><img class="back" src="img/back.png"/></div>';
}

let card_types=[".bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif",
"reveritparrot.gif","tripletsparrot.gif","unicornparrot.gif"];

alert("Chegou aqui");

card_types.rand(comparador);

alert(card_types[1]);

function comparador() { 
	return Math.random() - 0.5; 
}