document.addEventListener('DOMContentLoaded', () => {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            const selectedMembers = getRandomMembers(members, 3);

            const spotlightContainer = document.getElementById('spotlight-container');
            spotlightContainer.innerHTML = '';

            selectedMembers.forEach(member => {
                const spotlightElement = document.createElement('div');
                spotlightElement.classList.add('spotlight');
                spotlightElement.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <img src="${member.image}" alt="${member.name}">
                `;
                spotlightContainer.appendChild(spotlightElement);
            });
        })
        .catch(error => console.error('Error fetching members data:', error));
});

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
