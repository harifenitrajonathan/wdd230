const currentYear = new Date().getFullYear();
const copyrightText = document.getElementById('copyright');
copyrightText.textContent = `\u00A9 ${currentYear} Harifenitra Jonathan, Madagascar, Antsirabe`;

const lastModifiedText = document.getElementById('lastModified');
lastModifiedText.textContent = `Last modified: ${document.lastModified}`;

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const mainArea = document.querySelector('main');

darkModeToggle.addEventListener('click', () => {
    mainArea.classList.toggle('dark-mode');
});

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

function updateVisitCount() {
    let count = localStorage.getItem('visitCount');
    count = count ? parseInt(count) + 1 : 1;
    document.getElementById('visit-count').textContent = count;
    localStorage.setItem('visitCount', count.toString());
}

function initializeVisitCount() {
    let count = localStorage.getItem('visitCount');

    if (count) {
        document.getElementById('visit-count').textContent = count;
    }
}

document.addEventListener('DOMContentLoaded', initializeVisitCount);

updateVisitCount();
