const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
});

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
    hamburger.textContent = '☰';
});

// Add an event listener to close the nav menu if clicked outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    if (!isClickInsideNav && !isClickOnHamburger) {
        navMenu.classList.remove('show');
        hamburger.textContent = '☰';
    }
});