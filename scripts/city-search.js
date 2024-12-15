const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd44a1d57339e7abe5f0bb34b0dd5f4c7';

const cityInput = document.getElementById('city_input');
const searchBtn = document.getElementById('search_button');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

async function getWeather() {
    const city = cityInput.value;
    if (!city) return;

    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP! Статус: ${response.status}, Текст: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        cityName.textContent = data.name;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        temperature.textContent = `${Math.round(data.main.temp)}°C `;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Влажность: ${data.main.humidity}% `;
        windSpeed.textContent = `Скорость ветра: ${data.wind.speed} м/с `;
        document.getElementById('weather-icon').style.display = 'block';
    } catch (error) {
        console.error('Ошибка:', error);
        cityName.textContent = 'Ошибка при получении данных';
    }
}
searchBtn.addEventListener('click', getWeather);
