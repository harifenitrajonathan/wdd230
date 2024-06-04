document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 0;
    const eventsPerPage = 3;
    let events = [];

    function renderEvents() {
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = '';
        const start = currentPage * eventsPerPage;
        const end = start + eventsPerPage;
        const paginatedEvents = events.slice(start, end);

        paginatedEvents.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            const eventTitle = document.createElement('h3');
            eventTitle.textContent = event.title;

            const eventDate = document.createElement('p');
            eventDate.textContent = `Date: ${event.date}`;

            const eventDescription = document.createElement('p');
            eventDescription.textContent = event.description;

            const eventLink = document.createElement('a');
            eventLink.href = event.link;
            eventLink.textContent = "Learn more";
            eventLink.target = "_blank";

            eventDiv.appendChild(eventTitle);
            eventDiv.appendChild(eventDate);
            eventDiv.appendChild(eventDescription);
            eventDiv.appendChild(eventLink);
            eventsList.appendChild(eventDiv);
        });

        const nextButton = document.getElementById('next-button');
        const prevButton = document.getElementById('prev-button');
        nextButton.style.display = end < events.length ? 'block' : 'none';
        prevButton.style.display = start > 0 ? 'block' : 'none';
    }

    function fetchEvents() {
        fetch('data/events.json')
            .then(response => response.json())
            .then(data => {
                events = data;
                renderEvents();
            })
            .catch(error => console.error('Error fetching events:', error));
    }

    document.getElementById('next-button').addEventListener('click', function () {
        currentPage++;
        renderEvents();
    });

    document.getElementById('prev-button').addEventListener('click', function () {
        currentPage--;
        renderEvents();
    });

    fetchEvents();
});
