import {API_KEY} from "../API-KEY/api.js";
import {API_URL} from "../API-KEY/api.js";

async function getWeatherLondon() {
    const cityName = document.getElementById('london-name')
    const weatherIcon = document.getElementById('london-weather-icon')
    const temperature = document.getElementById('london-temperature')
    const description = document.getElementById('london-description')


    const city = 'London';
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
    } catch (error) {
        console.error('Ошибка:', error);
        cityName.textContent = 'Ошибка при получении данных';
    }
}
getWeatherLondon()