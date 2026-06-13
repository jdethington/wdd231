const info = new URLSearchParams(window.location.search);
// console.log(info);

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
const timestamp = info.get('timestamp');
const newsletter = info.get('isNewsletter');

const submitText = document.querySelector('#thankYou');

// GET DATE AND TIME TO DISPLAY
// const nowDate = new Date();
const now = Date.now();
// console.log(`Time NowDate: ${nowDate}`);
// console.log(`Time NowDate: ${now}`);

// const timestampField = nowDate.toLocaleDateString('en-US', {
//     year: 'numeric', month: 'long', day: 'numeric',
//     hour: 'numeric', minute: 'numeric', hour12: true
// })



function displayUserInfo() {
    submitText.innerHTML = "";

    if (review != null) {
        let reviewDate = localStorage.getItem('jldc-review-date');
        let lastReview = ""
        // check for review date
        if (reviewDate != 0) {
            lastReview =
                `<div>
                <p>Last review on:</p>
                <p><strong>${reviewDate}</strong></p>
            </div>`;

        } 
        localStorage.setItem('jldc-review-date', timestamp);

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
        </div>`;
        submitText.innerHTML += lastReview;

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
    } else if (newsletter != null) {
        // let subscribed = Number(window.localStorage.getItem('jldc-subscribed-date'));
        let subscribed = localStorage.getItem('jldc-subscribed-date');
        // console.log(`Subscribed: ${subscribed}`);

        // already subscribed
        if (subscribed != 0) {
            submitText.innerHTML = `
            <h3>You already have a subscription</h3>
            <div>
            <p>Name:</p>
            <p><strong>${fname} ${lname}</strong></p>
            </div>
            <div>
            <p>Email:</p>
            <p><strong>${email}</strong></p>
            </div>
            <div>
            <p>Subscribed on:</p>
            <p><strong>${localStorage.getItem('jldc-subscribed-date')}</strong></p>
            </div>
            `
        } else {// new subscription
            localStorage.setItem('jldc-subscribed-date', timestamp);
            submitText.innerHTML = `
            <h3>Thank you.<br>You will receive our next newsletter.</h3>
            <div>
            <p>Name:</p>
            <p><strong>${fname} ${lname}</strong></p>
            </div>
            <div>
            <p>Email:</p>
            <p><strong>${email}</strong></p>
            </div>
            <div>
            <p>Subscribed on:</p>
            <p><strong>${timestamp}</strong></p>
            </div>
            `
        }
    } else {
        submitText.innerHTML = `
            <h3>Something has gone wrong. <br>Please go back and try again.</h3>
            `

    }
};
displayUserInfo();