import displayCheeseCard from "./display-cheese-cards.mjs";

const cards = document.querySelector('#cards');

async function getCheeses() {
    const response = await fetch('data/cheeses.json');
    const data = await response.json();
    // console.log(data);
    displayCheeseCard(data.cheeses)
}

getCheeses();


