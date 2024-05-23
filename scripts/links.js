// Base URL for the GitHub pages
const baseURL = "https://github.com/harifenitrajonathan/wdd230";

// URL to the links.json file
const linksURL = `${baseURL}data/links.json`;

// Function to fetch the links data
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

// Function to display the links
function displayLinks(weeks) {
    const learningActivities = document.getElementById('learning-activities');
    const ul = learningActivities.querySelector('ul');
    ul.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const li = document.createElement('li');
        li.textContent = week.week;

        week.links.forEach(link => {
            const a = document.createElement('a');
            a.href = `${baseURL}${link.url}`;
            a.textContent = link.title;
            a.target = "_blank";
            li.appendChild(document.createTextNode(' ')); // Add space before link
            li.appendChild(a);
        });

        ul.appendChild(li);
    });
}

// Call the getLinks function to initiate fetching and displaying the data
getLinks();
