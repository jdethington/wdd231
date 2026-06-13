import { cheeses } from "../data/cheeses.mjs";
import displayCheeseCard from "./display-cheese-cards.mjs";
// import { cheeses } from "../data/cheeses.mjs";
// console.log(cheeses);
const info = 'data/cheeses.json';
// console.log(info);

const cards = document.querySelector('#featuredCheese');

async function cheeseFilter(info) {
    const response = await fetch(info);
    const data = await response.json();
    let featured = data.cheeses.filter(cheese => cheese.type == 'curd' || cheese.type == 'cream');
    featured = shuffle(featured);
    displayCheeseCard(featured.slice(0, 1));
}

cheeseFilter(info);

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        // Pick random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

