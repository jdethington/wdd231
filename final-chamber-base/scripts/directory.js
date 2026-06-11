import displayCompanies from "./displayCompCards.mjs";

const info = 'data/members.json';
const cards = document.querySelector('#cards');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
// const display = document.querySelector('cards');

async function getCompanyData() {
    const response = await fetch(info);
    const data = await response.json();
    // console.table(data);
    displayCompanies(data.companies);
    // displayCompanies(data.businesses);
}


getCompanyData();

gridButton.addEventListener('click', () => {
    cards.classList.replace('list', 'grid');
});

listButton.addEventListener('click', () => {
    cards.classList.replace('grid', 'list');
})