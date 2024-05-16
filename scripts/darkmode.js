
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const mainArea = document.querySelector('main');

darkModeToggle.addEventListener('click', () => {
    mainArea.classList.toggle('dark-mode');
});