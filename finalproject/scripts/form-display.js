
//  --------------------  Cheese Button Selected ------------------------
const cheeseButton = document.querySelector('.cheeseButton');
cheeseButton.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    cheeseButton.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('cheeseSelected');
    });
    button.classList.add('cheeseSelected');
});


// Get buttons
const emailBtn = document.querySelector('#btn-email');
const reviewBtn = document.querySelector('#btn-review');
const questionBtn = document.querySelector('#btn-question');

// Get form containers
const emailForm = document.querySelector('.email');
const reviewForm = document.querySelector('.review');
const questionForm = document.querySelector('.question');

// Helper function to hide all forms
function hideAllForms() {
    emailForm.classList.add('no-show');
    reviewForm.classList.add('no-show');
    questionForm.classList.add('no-show');
}

// Event listeners
emailBtn.addEventListener('click', () => {
    hideAllForms();
    emailForm.classList.remove('no-show');
});

reviewBtn.addEventListener('click', () => {
    hideAllForms();
    reviewForm.classList.remove('no-show');
});

questionBtn.addEventListener('click', () => {
    hideAllForms();
    questionForm.classList.remove('no-show');
});
