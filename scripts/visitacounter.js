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