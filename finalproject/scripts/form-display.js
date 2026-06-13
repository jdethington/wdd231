// CREATE & SET TIMESTAMP FOR EACH FORM
function setTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', hour12: true
    })
    const subscribe = document.getElementById('subscribe-timestamp');
    subscribe.value = timestamp;
    const review = document.getElementById('review-timestamp');
    review.value = timestamp;
    const question = document.getElementById('question-timestamp');
    question.value = timestamp;
}
setTimestamp();

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
// change section display 1fr => 1fr 1fr


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

