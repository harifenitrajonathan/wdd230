const currentYear = new Date().getFullYear();
const copyrightText = document.getElementById('copyright');
copyrightText.textContent = `\u00A9 ${currentYear} Harifenitra Jonathan, Madagascar, Antsirabe`;

const lastModifiedText = document.getElementById('lastModified');
lastModifiedText.textContent = `Last modified: ${document.lastModified}`;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
});

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
    hamburger.textContent = '☰'; // Reset the hamburger symbol to ☰ when the nav menu is closed
});

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const mainArea = document.querySelector('main');

darkModeToggle.addEventListener('click', () => {
    mainArea.classList.toggle('dark-mode');
});