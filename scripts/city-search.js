import { API_URL, API_KEY, HOURLY_API_URL } from "../API-KEY/api.js";
import { initMap, updateMap } from "./map.js";

const cityInput = document.getElementById('city_input');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const location = document.getElementById('location-info');
const visibility = document.getElementById('visibility');
const pressure = document.getElementById('pressure');
const info = document.getElementById('info');
const searchbutton = document.getElementById('Search-button');

async function getWeather(city) {
    if (!city) return;

    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=en`);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP! Статус: ${response.status}, Текст: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        location.textContent = `${data.sys.country}, ${data.name}`;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        humidity.textContent = `humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `wind speed: ${Math.round(data.wind.speed)} m/s`;
        document.getElementById('weather-icon').style.display = 'block';
        document.getElementById('container').style.display = 'block';
        visibility.textContent = `visibility: ${data.visibility}`;
        pressure.textContent = `pressure: ${data.main.pressure}`;
        info.textContent = `Feels like: ${Math.floor(data.main.feels_like)}°C, ${data.weather[0].main}`;

        updateMap(data.coord.lat, data.coord.lon);
        document.getElementById('map').style.display = 'block';

        await getHourlyWeather(data.coord.lat, data.coord.lon);
    } catch (error) {
        console.error('Ошибка:', error);
        location.textContent = 'Ошибка при получении данных';
    }
}

async function getHourlyWeather(lat, lon) {
    try {
        const response = await fetch(`${HOURLY_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP! Статус: ${response.status}, Текст: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Hourly API Response:', data);

        const hourlyContainer = document.getElementById('hourly-weather');
        hourlyContainer.innerHTML = ''; // Очистить контейнер перед добавлением новых данных

        data.list.slice(0, 12).forEach(hour => {
            const hourElement = document.createElement('div');
            hourElement.className = 'hour';

            const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const temp = `${Math.round(hour.main.temp)}°C`;
            const icon = `http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`;

            hourElement.innerHTML = `
                <p>${time}</p>
                <img src="${icon}" alt="${hour.weather[0].description}">
                <p>${temp}</p>
            `;

            hourlyContainer.appendChild(hourElement);
        });
    } catch (error) {
        console.error('Ошибка при получении почасовой погоды:', error);
    }
}

searchbutton.addEventListener('click', () => getWeather(cityInput.value));
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getWeather(cityInput.value);
    }
});
window.addEventListener('load', () => {
    initMap();
    getWeather('Almaty');
});