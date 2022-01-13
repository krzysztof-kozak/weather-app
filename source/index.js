import './css/reset.css';
import './css/style.scss';

// eslint-disable-next-line prefer-destructuring
const API_KEY = process.env.API_KEY;
const DEFAULT_CITY = 'London';
const DEFAULT_UNITS = 'metric';

const app = document.querySelector('#app');
const form = app.querySelector('form');
const errorP = app.querySelector('.error');
const errorSpan = app.querySelector('.error-span');

const cityElem = app.querySelector('.city');
const tempElem = app.querySelector('.temp');
const tempUnitElem = app.querySelector('.temp-unit');
const descElem = app.querySelector('.desc');
const iconElem = app.querySelector('.icon');

fetchWeather(DEFAULT_CITY).then(updateWeatherUI);

async function fetchWeather(city) {
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${DEFAULT_UNITS}&appid=${API_KEY}`;

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

  if (DEFAULT_UNITS === 'metric') {
    tempUnitElem.textContent = 'C';
  }

  cityElem.textContent = name;
  tempElem.textContent = temp;
  descElem.textContent = primary.description;
  iconElem.src = `http://openweathermap.org/img/wn/${primary.icon}@2x.png`;
}

function showError(city) {
  errorSpan.textContent = city;
  errorP.style.display = 'block';
}

function hideError() {
  if (errorP.style.display === 'none') {
    return;
  }

  errorP.style.display = 'none';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  hideError();
  const data = new FormData(form);
  const city = data.get('city');

  if (!city) {
    return;
  }

  fetchWeather(city).then(updateWeatherUI).catch(showError.bind(null, city));
});
