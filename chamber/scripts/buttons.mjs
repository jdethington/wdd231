// EVENT LISTENERS TO CHANGE GRID VIEW TO LIST VIEW

gridButton.addEventListener('click', () => {
    cards.classList.replace('list', 'grid');
});

listButton.addEventListener('click', () => {
    cards.classList.replace('grid', 'list');
})