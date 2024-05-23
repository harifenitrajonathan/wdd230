document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'ade57cd297732c512f6a069424736c45';
    const city = 'ANTSIRABE';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weather-description').textContent = description;
            const iconElement = document.getElementById('weather-icon');
            iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
            iconElement.style.display = 'inline';
        })
        .catch(error => console.error('Error fetching weather data:', error));
});