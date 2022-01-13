import './css/reset.css';
import './css/style.scss';

// eslint-disable-next-line prefer-destructuring
const API_KEY = process.env.API_KEY;
const CITY = 'London';
const UNITS = 'metric';
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`;

const app = document.querySelector('#app');
const cityElem = app.querySelector('.city');
const tempElem = app.querySelector('.temp');
const tempUnitElem = app.querySelector('.temp-unit');
const descElem = app.querySelector('.desc');
const iconElem = app.querySelector('.icon');

fetchWeather().then(updateWeatherUI);

async function fetchWeather() {
  const response = await fetch(WEATHER_URL);
  const json = await response.json();
  return json;
}

function updateWeatherUI(data) {
  const {
    name,
    main: { temp },
    weather: [primary],
  } = data;

  if (UNITS === 'metric') {
    tempUnitElem.textContent = 'C';
  }

  cityElem.textContent = name;
  tempElem.textContent = temp;
  descElem.textContent = primary.description;
  iconElem.src = `http://openweathermap.org/img/wn/${primary.icon}@2x.png`;
}
