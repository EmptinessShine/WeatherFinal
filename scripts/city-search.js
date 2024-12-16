import { API_URL, API_KEY } from "../API-KEY/api.js";
import { initMap, updateMap } from "./map.js";

const cityInput = document.getElementById('city_input');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const feelslike = document.getElementById('feels-like');

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
        feelslike.textContent = `Ощущается как: ${Math.floor(data.main.feels_like)}°C `;
        document.getElementById('weather-icon').style.display = 'block';
        document.getElementById('container').style.display = 'block';

        // Обновление карты
        updateMap(data.coord.lat, data.coord.lon);
    } catch (error) {
        console.error('Ошибка:', error);
        cityName.textContent = 'Ошибка при получении данных';
    }
}

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});

// Инициализация карты при загрузке страницы
window.addEventListener('load', initMap);