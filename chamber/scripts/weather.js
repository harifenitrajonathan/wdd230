document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'ade57cd297732c512f6a069424736c45';
    const city = 'Antsirabe';
    const apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch current weather data
    fetch(apiUrlCurrent)
        .then(response => response.json())
        .then(data => {
            document.getElementById('current-weather').textContent = data.weather[0].description;
            document.getElementById('current-temperature').textContent = data.main.temp;
            const iconCode = data.weather[0].icon;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        })
        .catch(error => console.error('Error fetching current weather data:', error));

    // Fetch weather forecast data
    fetch(apiUrlForecast)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = '';

            // Process forecast data
            let daysProcessed = 0;
            for (let i = 0; i < data.list.length && daysProcessed < 3; i += 8) { // 3-hour interval data, 8 intervals = 24 hours
                const forecast = data.list[i];
                const date = new Date(forecast.dt_txt).toDateString();
                const temp = forecast.main.temp;

                const forecastElement = document.createElement('div');
                forecastElement.classList.add('forecast-day');
                forecastElement.innerHTML = `
                    <h4>${date}</h4>
                    <p>Temperature: ${temp}°C</p>
                `;

                forecastContainer.appendChild(forecastElement);
                daysProcessed++;
            }
        })
        .catch(error => console.error('Error fetching weather forecast data:', error));
});
