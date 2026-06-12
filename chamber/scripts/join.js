// CREATE TIMESTAMP
function setTimestamp() {
    const now = new Date();
    const timestampField = document.getElementById('timestamp');
    timestampField.value = now.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', hour12: true
    })
}
setTimestamp();

// ***** MODAL *****
const np = document.querySelector('#np');
const bronze = document.querySelector('#bronze');
const silver = document.querySelector('#silver');
const gold = document.querySelector('#gold');

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');
const closeButton = document.querySelector('#closeButton');


// SHOW MODAL
np.addEventListener('click', () => {
    dialogBoxText.innerHTML = `
    <h3>NP (Non Profit) Benefits</h3>
    <div><ul>
        <li>Business and category listing</li>
        <li>Sponsor opportunities for events</li>
        <li>Use of Chamber logo in advertising</li>
        <li>Membership decal for display at your business</li></ul>
    </div>
    `
    dialogBox.showModal();
});
bronze.addEventListener('click', () => {
    dialogBoxText.innerHTML = `
    <h3>Bronze Benefits $100</h3>
    <div><ul>
        <li>All of NP benefits plus</li>
        <li>Event discounts</li>
        <li>Membership list available for purchase</li>
        <li>U.S. Chamber of Commerce membership</li></ul>
    </div>
    `
    dialogBox.showModal();
});
silver.addEventListener('click', () => {
    dialogBoxText.innerHTML = `
    <h3>Silver Benefits $200</h3>
    <div><ul>
        <li>All of Bronze benefits plus</li>
        <li>Spotlight on our home page</li>
        <li>Monthly New Member List</li>
        <li>One invitation to Gold exclusive events</li></ul>
    </div>
    `
    dialogBox.showModal();
});
gold.addEventListener('click', () => {
    dialogBoxText.innerHTML = `
    <h3>Gold Benefits $300</h3>
    <div><ul>
        <li>All of Silver benefits plus</li>
        <li>Recognition at events</li>
        <li>VIP seating at events</li>
        <li>Unlimited conference/meeting room use (based on availability)</li></ul>
    </div>
    `
    dialogBox.showModal();
});
// CLOSE MODAL
closeButton.addEventListener('click', () => {
    dialogBox.close();
});