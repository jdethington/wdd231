// CREATES A CARD TO DISPLAY FOR EACH cheese IN THE LIST RECEIVED

const displayCheeseCard = (cheeses) => {
    cheeses.forEach((cheese) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'cheeseCard');

        // h2 - cheese Name
        const name = document.createElement('h2');
        name.textContent = `${cheese.name}`;

        // image
        const image = document.createElement('img');
        image.setAttribute('src', cheese.image);
        image.setAttribute('alt', `cheese image`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '500')

        // cheese description
        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.textContent = `${cheese.description}`;
        // description.textContent = `Description: ${cheese.description}`;

        // cheese flavor
        const flavor = document.createElement('p');
        flavor.setAttribute('class', 'flavor');
        flavor.textContent = `Flavor: ${cheese.flavor}`;

        // cheese color
        const color = document.createElement('p');
        color.setAttribute('class', 'color');
        color.textContent = `Flavor: ${cheese.color}`;

        // cheese texture
        const texture = document.createElement('p');
        texture.setAttribute('class', 'texture');
        texture.textContent = `Flavor: ${cheese.texture}`;

        // cheese pairing
        const pairing = document.createElement('p');
        pairing.setAttribute('class', 'pairing');
        pairing.textContent = `Flavor: ${cheese.pairing}`;



        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);

        cards.appendChild(card);
    });
}

export default displayCheeseCard;