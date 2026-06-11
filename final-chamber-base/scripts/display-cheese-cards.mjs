// CREATES A CARD TO DISPLAY FOR EACH cheese IN THE LIST RECEIVED

const displayCheeseCard = (cheeses) => {
    cheeses.forEach((cheese) => {
        const card = document.createElement('section');
        const name = document.createElement('h2')
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
            membership.textContent = `${company.membership} Member`;
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

export default displayCheeseCard;