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
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement('section');
        // top/left part of card with image
        const cardImage = document.createElement('div');
        cardImage.setAttribute('class', 'top');
        // bottom part of card with name & info
        const cardBottom = document.createElement('div');
        cardBottom.setAttribute('class', 'bottom');
        // bottom/right part of card with info
        const cardInfo = document.createElement('div');
        cardInfo.setAttribute('class', 'info');
        // bottom/middle part of card with name
        const cardName = document.createElement('div');
        cardName.setAttribute('class', 'name');
        // image
        const image = document.createElement('img');
        image.setAttribute('src', company.image);
        image.setAttribute('alt', `company image`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('target', '_blank');
        // h2 - Company Name
        const name = document.createElement('h2');
        name.textContent = `${company.name}`;
        // Company address
        const address = document.createElement('p');
        address.setAttribute('class', 'address');
        address.textContent = company.address;
        // Company phone number
        const number = document.createElement('p');
        number.setAttribute('class', 'number');
        number.textContent = company.phoneNumber;


        // div class="top"
        cardImage.appendChild(image);
        // div class="name"
        cardName.appendChild(name);
        // div class="info"
        cardInfo.appendChild(address);
        cardInfo.appendChild(number);
        // Company Website
        if (company.url != "") {
            const url = document.createElement('a');
            url.setAttribute('class', 'url');
            url.setAttribute('href', company.url);
            url.setAttribute('target', '_blank');
            url.textContent = 'Visit Website';
            cardInfo.appendChild(url);
        }
        if (company.membership != "") {
            // Company membership level
            const membership = document.createElement('p');
            membership.textContent = `Member Level ${company.membership}`;
            cardInfo.appendChild(membership);
            // cardBottom.appendChild(membership);
        }

        // div class="bottom"
        cardBottom.appendChild(cardName);
        cardBottom.appendChild(cardInfo);

        card.appendChild(cardImage);
        card.appendChild(cardBottom);

        cards.appendChild(card);
    });
}

getCompanyData();

gridButton.addEventListener('click', () => {
    cards.classList.replace('list', 'grid');
});

listButton.addEventListener('click', () => {
    cards.classList.replace('grid', 'list');
})