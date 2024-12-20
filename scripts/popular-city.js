import {API_KEY} from "../API-KEY/api.js";
import {API_URL} from "../API-KEY/api.js";

const cities = [
    { name: 'London', elements: { cityName: 'london-name', weatherIcon: 'london-weather-icon', temperature: 'london-temperature', description: 'london-description' } },
    { name: 'Moscow', elements: { cityName: 'moscow-name', weatherIcon: 'moscow-weather-icon', temperature: 'moscow-temperature', description: 'moscow-description' } },
    { name: 'Tokyo', elements: { cityName: 'tokyo-name', weatherIcon: 'tokyo-weather-icon', temperature: 'tokyo-temperature', description: 'tokyo-description' } },
    { name: 'Astana', elements: { cityName: 'astana-name', weatherIcon: 'astana-weather-icon', temperature: 'astana-temperature', description: 'astana-description' } }
];

async function getWeather(city, elements) {
    const cityName = document.getElementById(elements.cityName);
    const weatherIcon = document.getElementById(elements.weatherIcon);
    const temperature = document.getElementById(elements.temperature);
    const description = document.getElementById(elements.description);

    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=en`);

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

cities.forEach(city => getWeather(city.name, city.elements));
