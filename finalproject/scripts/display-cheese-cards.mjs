// CREATES A CARD TO DISPLAY FOR EACH cheese IN THE LIST RECEIVED

const displayCheeseCard = (cheeses) => {
    document.querySelector('#cards').innerHTML = "";
    cheeses.forEach((cheese) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'cheeseCard');

        // Add an event listener to each cheese on the page.
        card.addEventListener('click', () => showStuff(cheese));


        // h2 - cheese Name
        const name = document.createElement('h2');
        name.textContent = `${cheese.name}`;

        // image
        const image = document.createElement('img');
        image.setAttribute('src', cheese.image);
        image.setAttribute('alt', `cheese image`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '500')
        image.setAttribute('height', '500')

        // cheese description
        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.textContent = `${cheese.description}`;
        // description.textContent = `Description: ${cheese.description}`;

        // cheese flavor
        const flavor = document.createElement('p');
        flavor.setAttribute('class', 'flavor');
        flavor.textContent = `${cheese.flavor}`;
        // flavor.textContent = `Flavor: ${cheese.flavor}`;

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

        // add info to card
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(flavor);
        // card.appendChild(color);
        // card.appendChild(texture);
        // card.appendChild(pairing);

        // add card to display
        cards.appendChild(card);
    });
}
const cheeseData = document.querySelector('#cheeseData')
const cheeseName = document.querySelector('#cheeseData h2')
const dataClose = document.querySelector('#cheeseData button')
const cheeseDesc = document.querySelector('#description')
const cheeseFlavor = document.querySelector('#flavor')
const cheeseColor = document.querySelector('#color')
const cheeseTexture = document.querySelector('#texture')
const cheesePairing = document.querySelector('#pairing')
dataClose.addEventListener('click', () => cheeseData.close());

// POPULATE THE DIALOG WITH INFORMATION WHEN CARD IS CLICKED
function showStuff(x) {
    cheeseName.innerHTML = x.name
    cheeseDesc.innerHTML = `<strong>Description:</strong> ${x.description}`
    cheeseFlavor.innerHTML = `<strong>Flavor:</strong> ${x.flavor}`
    cheeseColor.innerHTML = `<strong>Color:</strong> ${x.color}`
    cheeseTexture.innerHTML = `<strong>Texture:</strong> ${x.texture}`
    cheesePairing.innerHTML = `<strong>Pairing:</strong> ${x.pairing}`
    cheeseData.showModal()
}// end of function

export default displayCheeseCard;