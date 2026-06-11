const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');


navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

//
// 
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified} `;
document.getElementById("currentYear").innerHTML = `&copy;${new Date().getFullYear()} `;
