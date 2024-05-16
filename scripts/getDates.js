const currentYear = new Date().getFullYear();
const copyrightText = document.getElementById('copyright');
copyrightText.textContent = `\u00A9 ${currentYear} Harifenitra Jonathan, Madagascar, Antsirabe`;

const lastModifiedText = document.getElementById('lastModified');
lastModifiedText.textContent = `Last modified: ${document.lastModified}`;
