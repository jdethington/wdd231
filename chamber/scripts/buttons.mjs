gridButton.addEventListener('click', () => {
    cards.classList.replace('list', 'grid');
});

listButton.addEventListener('click', () => {
    cards.classList.replace('grid', 'list');
})