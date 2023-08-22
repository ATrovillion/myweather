import React from 'react';
import celsiusToFahrenheit from '../utils/celsiusToFahrenheit';

const weatherAPI =
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m';

async function fetchWeather({ API }) {
  // fetch weather
  const res = await fetch(weatherAPI);
  const data = await res.json();
  return data;
}
const weather = await fetchWeather(weatherAPI);
console.log(weather);
export default function WeatherData() {
  return (
    <div>
      <p>Latitude: {weather.latitude}</p>
      <p>Longitude: {weather.longitude}</p>
      <p>Current Temperature: {weather.current_weather.temperature}C</p>
      <p>
        Current Temperature:{' '}
        {celsiusToFahrenheit(weather.current_weather.temperature)}F
      </p>
    </div>
  );
}
