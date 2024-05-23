// Base URL for the GitHub pages
const baseURL = "https://harifenitrajonathan.github.io/wdd230/";

// URL to the links.json file
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching the links:', error);
    }
}

// Function to display the links
function displayLinks(weeks) {
    const learningActivities = document.getElementById('learning-activities');
    const ul = learningActivities.querySelector('ul');
    ul.innerHTML = '';

    weeks.forEach(week => {
        const li = document.createElement('li');
        li.textContent = week.week;

        week.links.forEach(link => {
            const a = document.createElement('a');
            a.href = `${baseURL}${link.url}`;
            a.textContent = link.title;
            a.target = "_blank";
            li.appendChild(document.createTextNode(' '));
            li.appendChild(a);
        });

        ul.appendChild(li);
    });
}

getLinks();
