import './css/reset.css';
import './css/style.scss';

// eslint-disable-next-line prefer-destructuring
const API_KEY = process.env.API_KEY;
const CITY = 'London';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));
