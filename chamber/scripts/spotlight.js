import displayCompanies from "./displayCompCards.mjs";

const info = 'data/members.json';
const cards = document.querySelector('#cards');

getCompanyData();

async function getCompanyData() {
    const response = await fetch(info);
    const data = await response.json();
    let silverGold = data.companies.filter(company => company.membership == 'Gold' || company.membership == 'Silver'); // filtered array=silver&gold
    silverGold = fisherYatesShuffle(silverGold);// shuffle order of companies
    displayCompanies(silverGold.slice(0, 3));
}


function fisherYatesShuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        // Pick random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

