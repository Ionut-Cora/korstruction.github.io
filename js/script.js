// NAVIGATION
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('toggle-style');
    body.classList.toggle('nav-open');

    if (body.className === 'nav-open') {
        menuBtn.name = 'close-outline';
    } else {
        menuBtn.name = 'menu-outline';
    }
});
