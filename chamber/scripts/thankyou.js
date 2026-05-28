
const info = new URLSearchParams(window.location.search);
console.log(info);

// console.log(info.get('first'));
// console.log(info.get('last'));
// console.log(info.get('title'));
// console.log(info.get('email'));
// console.log(info.get('phone'));
// console.log(info.get('org'));
// console.log(info.get('level'));
// console.log(info.get('description'));
// console.log(info.get('timestamp'));

document.querySelector('#thankYou').innerHTML = `
<div><p>Name:</p><p> <strong>${info.get('first')} ${info.get('last')}</strong></p></div>
<div><p>Title:</p><p> <strong>${info.get('title')}</strong></p></div>
<div><p>Email:</p><p> <strong>${info.get('email')}</strong></p></div>
<div><p>Mobile Number:</p><p> <strong>${info.get('phone')}</strong></p></div>
<div><p>Organization:</p><p> <strong>${info.get('org')}</strong></p></div>
<div><p>Member Level:</p><p> <strong>${info.get('level')}</strong></p></div>
<div><p>Description:</p><p> <strong>${info.get('description')}</strong></p></div>
<div><p>Submitted:</p><p> <strong>${info.get('timestamp')}</strong></p></div>
`;