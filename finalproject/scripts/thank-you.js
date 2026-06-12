// CREATE TIMESTAMP
// function setTimestamp() {
//     const now = new Date();
//     const timestampField = document.getElementById('timestamp');
//     timestampField.value = now.toLocaleDateString('en-US', {
//         year: 'numeric', month: 'long', day: 'numeric',
//         hour: 'numeric', minute: 'numeric', hour12: true
//     })
// }
// setTimestamp();

const info = new URLSearchParams(window.location.search);
console.log(info);

console.log(`fname: ${info.get('fname')}`);
console.log(`lname: ${info.get('lname')}`);
console.log(`email: ${info.get('email')}`);
console.log(`city: ${info.get('city')}`);
console.log(`review: ${info.get('review')}`);
console.log(`question: ${info.get('question')}`);

console.log(`timestamp: ${info.get('timestamp')}`);
console.log(`isNewsletter: ${info.get('isNewsletter')}`);
console.log(`isReview: ${info.get('isReview')}`);
console.log(`isQuestion: ${info.get('isQuestion')}`);

const fname = info.get('fname');
const lname = info.get('lname');
const email = info.get('email');
const city = info.get('city');
const review = info.get('review');
const question = info.get('question');

const submitText = document.querySelector('#thankYou');

// submitText.innerHTML = `
// <div>
//     <p>Name:</p>
//     <p><strong>Jacob Ethington</strong></p>
// </div>
// <div>
//     <p>Name:</p>
//     <p><strong>Jacob Ethington</strong></p>
// </div>
// <div>
//     <p>Name:</p>
//     <p><strong>Jacob Ethington</strong></p>
// </div>

// `;


function displayUserInfo() {
    submitText.innerHTML = "";
    if (review != null) {
        submitText.innerHTML = `
        <h3>Thank you for your Review</h3>
        <div>
            <p>Name:</p>
            <p><strong>${fname} ${lname}</strong></p>
        </div>
        <div>
            <p>City:</p>
            <p><strong>${city}</strong></p>
        </div>
        <div>
            <p>Review:</p>
            <p><strong>${review}</strong></p>
        </div>`
    } else if (question != null) {
        submitText.innerHTML = `
        <h3>Thank you for your Question.<br>We will respond soon.</h3>
        <div>
            <p>Name:</p>
            <p><strong>${fname} ${lname}</strong></p>
        </div>
        <div>
            <p>Email:</p>
            <p><strong>${email}</strong></p>
        </div>
        <div>
            <p>Question:</p>
            <p><strong>${question}</strong></p>
        </div>`
    } else {
        submitText.innerHTML = `
        <h3>Thank you.<br>You will receive our next newsletter.</h3>
        <div>
            <p>Name:</p>
            <p><strong>${fname} ${lname}</strong></p>
        </div>
        <div>
            <p>Email:</p>
            <p><strong>${email}</strong></p>
        </div>`
    }
};
displayUserInfo();