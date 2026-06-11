import displayCheeseCard from "./display-cheese-cards.mjs";

const cards = document.querySelector('#cards');

async function getCheeses() {
    const response = await fetch('data/cheeses.json');
    const data = await response.json();
    // console.log(data);
    displayCheeseCard(data.cheeses)
}

getCheeses();


// CREATES A CARD TO DISPLAY FOR EACH cheese IN THE LIST RECEIVED

// function displayCheeseCard(cheeses) {
//     cheeses.forEach(cheese => {
//         const card = document.createElement('section');
//         // image
//         const image = document.createElement('img');
//         image.setAttribute('src', cheese.image);
//         image.setAttribute('alt', `cheese image`);
//         image.setAttribute('loading', 'lazy');
//         // image.setAttribute('target', '_blank');

//         // h2 - cheese Name
//         const name = document.createElement('h2');
//         name.textContent = `${cheese.name}`;

//         // cheese description
//         const description = document.createElement('p');
//         description.setAttribute('class', 'description');
//         description.textContent = `Description: ${cheese.description}`;

//         // cheese flavor
//         const flavor = document.createElement('p');
//         flavor.setAttribute('class', 'flavor');
//         flavor.textContent = `Flavor: ${cheese.flavor}`;

//         // cheese color
//         const color = document.createElement('p');
//         color.setAttribute('class', 'color');
//         color.textContent = `Flavor: ${cheese.color}`;

//         // cheese texture
//         const texture = document.createElement('p');
//         texture.setAttribute('class', 'texture');
//         texture.textContent = `Flavor: ${cheese.texture}`;

//         // cheese pairing
//         const pairing = document.createElement('p');
//         pairing.setAttribute('class', 'pairing');
//         pairing.textContent = `Flavor: ${cheese.pairing}`;



//         card.appendChild(name);
//         card.appendChild(image);
//         card.appendChild(description);

//         cards.appendChild(card);
//     });
// }

// displayCheeseCard(cheeses);