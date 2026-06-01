import { places } from "../data/places.mjs";
// console.log(places);

const showHere = document.querySelector('#allPlaces')

// ----- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(places) {
    places.forEach(x => {
        const theCard = document.createElement('div')
        const theFig = document.createElement('figure')
        // const figCap = document.createElement('figcaption')
        // figCap.innerText = x.name
        const thePhoto = document.createElement('img')//figure tag for image
        thePhoto.src = `images/${x.photo}`
        thePhoto.alt = x.name
        thePhoto.width = "300"
        thePhoto.height = "200"
        thePhoto.loading = 'lazy'
        theFig.appendChild(thePhoto)
        // theFig.appendChild(figCap)
        theCard.appendChild(theFig)
        const theTitle = document.createElement('h2')// h2 for title
        theTitle.innerText = x.name
        theCard.appendChild(theTitle)
        const theAddress = document.createElement('address')// address tag for address
        theAddress.innerText = x.address
        theCard.appendChild(theAddress)
        const theDesc = document.createElement('p')// paragraph tag for description
        theDesc.innerText = x.description
        theCard.appendChild(theDesc)
        const button = document.createElement('button') // button tag for learn more
        button.innerText = 'Learn More'
        button.type = "button"
        button.addEventListener('click', () => {
            window.open(x.url, '_blank', 'noopener,noreferrer')
        });
        console.log(button)
        theCard.appendChild(button)

        showHere.appendChild(theCard)
    });
}

displayItems(places)


// ********* Using localStorage to store the last visit date by the client, display one of three possible messages about the time between page visits in the content area.
const visitToday = document.querySelector('.lastVisit');

let lastVisit = Number(localStorage.getItem('visit-time'));

if (lastVisit !== 0) {
    const lastVisitTime = (Date.now() - lastVisit) / (1000 * 60 * 60 * 24);
    // const lastVisitTime = 0;
    if (lastVisitTime < 1) {
        visitToday.textContent = `Back so soon! Awesome!`;
    } else {
        let days = Math.floor(lastVisitTime);
        if (days == 1) {
            visitToday.textContent = `You last visited ${days} day ago.`;

        } else {

            visitToday.textContent = `You last visited ${days} days ago.`;
        }
    }
} else {
    visitToday.textContent = `Welcome! Let us know if you have any questions.`;
}

localStorage.setItem("visit-time", Date.now());