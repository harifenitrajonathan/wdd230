//directory content
document.getElementById('lastModified').textContent = document.lastModified;

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function toggleView(view) {
    var membersDiv = document.getElementById('members');
    membersDiv.className = view + '-view';
}

fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const membersDiv = document.getElementById('members');
        data.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            memberCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <p>${member.description}</p>
                `;
            membersDiv.appendChild(memberCard);
        });
    });