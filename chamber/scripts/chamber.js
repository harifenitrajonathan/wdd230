document.getElementById('lastModified').textContent = document.lastModified;
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Lazy loading images
document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = document.querySelectorAll("img[data-src]");
    var options = {
        threshold: 0,
        rootMargin: "0px 0px 200px 0px" // Load images 200px before they enter the viewport
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.add("in-view");
                observer.unobserve(img);
            }
        });
    }, options);

    lazyImages.forEach(function (img) {
        observer.observe(img);
    });
});

function toggleMenu() {
    var menu = document.querySelector('nav ul');
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav .menu');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.innerHTML = '&#9776;';
    } else {
        menu.classList.add('active');
        hamburger.innerHTML = '&#10006;';
    }
}

// Function to calculate the difference in days between two dates
function calculateDaysBetweenVisits(lastVisitDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = Date.now();
    const differenceInTime = currentDate - lastVisitDate;
    const differenceInDays = Math.floor(differenceInTime / oneDay);
    return differenceInDays;
}

function displayVisitMessage() {
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const sidebarContent = document.querySelector('.visit-message');

    if (!lastVisitDate) {
        sidebarContent.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetweenVisits = calculateDaysBetweenVisits(parseInt(lastVisitDate));
        if (daysBetweenVisits < 1) {
            sidebarContent.textContent = "Back so soon! Awesome!";
        } else if (daysBetweenVisits === 1) {
            sidebarContent.textContent = "You last visited 1 day ago.";
        } else {
            sidebarContent.textContent = `You last visited ${daysBetweenVisits} days ago.`;
        }
    }

    localStorage.setItem('lastVisitDate', Date.now());
}

displayVisitMessage();
