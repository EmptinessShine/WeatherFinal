import { MAP_API_KEY } from "../API-KEY/api.js";

let map;

export function initMap() {
    const script = document.createElement('script');
    script.src = MAP_API_KEY;
    script.async = true;
    script.onload = () => {
        ymaps.ready(() => {
            map = new ymaps.Map('map', {
                center: [43.24, 76.94],
                zoom: 10
            });
        });
    };
    document.head.appendChild(script);
}

export function updateMap(latitude, longitude) {
    if (map) {
        map.setCenter([latitude, longitude], 10);
    }
}

