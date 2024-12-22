Weather Application Documentation
Overview
The Weather Application provides real-time weather updates, forecasts, and location-based data visualization for user-specified cities. It uses OpenWeather and Yandex Maps APIs for seamless integration of weather data and map visualization.

Features
Current Weather Display

Temperature, humidity, wind speed, visibility, and atmospheric pressure.
Dynamic weather icons representing current conditions.
Hourly Forecast

Displays 12-hour weather forecasts with time, temperature, and weather icons.
Search Functionality

Input a city name to fetch and display its weather data.
Handles search via button click or "Enter" key.
Popular Cities

Displays current weather for predefined cities: London, Moscow, Tokyo, and Astana.
Map Integration

Visualizes city location on a Yandex map, dynamically updated based on selected city.
Real-Time Clock


APIs:
OpenWeather API: Fetches weather data and forecasts.
Yandex Maps API: Displays interactive maps for city locations.
Asynchronous Programming: Fetch API for real-time data retrieval.


Weather Search

Users enter a city name in the search bar.
Weather data is fetched via OpenWeather API and displayed dynamically.
Hourly Weather

Retrieves and displays hourly forecasts for the next 12 hours.
Popular Cities

Weather data for predefined cities is loaded at startup.
Map Integration

Yandex Maps visualizes the location of the selected city.
Real-Time Clock

Continuously displays the current time on the header.
Usage
Open the application in a browser.
Enter a city name to fetch weather details.
Explore hourly weather forecasts and map updates.
Check predefined popular cities for quick weather updates.
APIs Used
OpenWeather API:

Provides current weather and hourly forecasts.
Base URLs:
Current Weather: https://api.openweathermap.org/data/2.5/weather
Hourly Forecast: https://api.openweathermap.org/data/2.5/forecast
Yandex Maps API:

Displays maps with dynamic city coordinates.
URL: https://api-maps.yandex.ru/2.1/
Future Enhancements
Add user authentication for personalized features.
Include air quality and precipitation forecasts.
Optimize the interface for better mobile compatibility.
Enable users to save favorite cities for quick access.