const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'ade57cd297732c512f6a069424736c45';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the weather data
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    captionDesc.innerHTML = '';
    weatherIcon.src = '';
    weatherIcon.alt = '';

    data.weather.forEach((weather, index) => {
        const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
        const desc = capitalizeDescription(weather.description);

        if (index === 0) {
            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', desc);
        }

        captionDesc.innerHTML += `${desc}${index < data.weather.length - 1 ? ', ' : ''}`;
    });
}


function capitalizeDescription(description) {
    return description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

apiFetch();
