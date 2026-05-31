import { places } from "../data/places.mjs";
console.log(places);

const showHere = document.querySelector('#allPlaces')

// ----- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(places) {
    places.forEach(x => {
        const theCard = document.createElement('div')
        const thePhoto = document.createElement('img')
        thePhoto.src = `images/${x.photo}`
        thePhoto.alt = x.name
        theCard.appendChild(thePhoto)
        const theTitle = document.createElement('h2')
        theTitle.innerText = x.name
        theCard.appendChild(theTitle)
        const theAddress = document.createElement('address')
        theAddress.innerText = x.address
        theCard.appendChild(theAddress)
        const theDesc = document.createElement('p')
        theDesc.innerText = x.description
        theCard.appendChild(theDesc)


        showHere.appendChild(theCard)
    });
}

displayItems(places)