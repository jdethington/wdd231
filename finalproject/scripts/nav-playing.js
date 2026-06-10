const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('show');
    });

    // Close menu when clicking a link
    // document.querySelectorAll('.mobile-menu a').forEach(link => {
    //     link.addEventListener('click', () => {
    //         hamburger.classList.remove('active');
    //         mobileMenu.classList.remove('show');
    //     });
    // });

    // Close menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 608) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('show');
        }
    });
}