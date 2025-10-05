const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links-wrapper');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

const navLinksItems = document.querySelectorAll('.nav-links-wrapper a, .nav-btn');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-wrapper')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
    }
});