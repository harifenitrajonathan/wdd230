function closeBanner() {
    var banner = document.getElementById('meet-greet-banner');
    banner.style.display = 'none';
}

function showBanner() {
    var banner = document.getElementById('meet-greet-banner');
    var today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', showBanner);
