import displayCheeseCard from "./display-cheese-cards.mjs";
import { cheeses } from "../data/cheeses.mjs";
// console.log(cheeses)
displayCheeseCard(cheeses);

// const info = 'data/cheeses.json';
// const cards = document.querySelector('#cards');

// async function getCheeses() {
//     const response = await fetch(info);
//     const data = await response.json();
//     // console.log(data);
//     displayCheeseCard(data.cheeses)
// }

// getCheeses();


//  --------------------  Cheese Button Selected ------------------------
const cheeseButton = document.querySelector('.cheeseButton');
cheeseButton.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    cheeseButton.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('cheeseSelected');
    });
    button.classList.add('cheeseSelected');
});

//  --------------------  Cheese filters ------------------------
// ALL
const allCheeses = document.querySelector('#all');
allCheeses.addEventListener('click', () => {
    displayCheeseCard(cheeses);
});
// cream cheese
const creamCheese = document.querySelector('#cream');
creamCheese.addEventListener('click', () => {
    displayCheeseCard(cheeses.filter(cheese => cheese.type == 'cream'));
});
//  cheese curds
const cheeseCurd = document.querySelector('#curds');
cheeseCurd.addEventListener('click', () => {
    displayCheeseCard(cheeses.filter(cheese => cheese.type == 'curd'));
});
// other cheese
const otherCheese = document.querySelector('#other');
otherCheese.addEventListener('click', () => {
    displayCheeseCard(cheeses.filter(cheese => cheese.type == 'other'));
});

