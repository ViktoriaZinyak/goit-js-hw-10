import './css/styles.css';
import debounce from 'lodash.debounce';

const input = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  fetchCountries(e.target.value);
}

function fetchCountries(name) {
  console.log(
    fetch(
      `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`
    ).then(response => response.json())
  );
}

function renderTamplate() {
  `<li>
    <svg width="90" height="70">
      <use href="#"></use>
    </svg>
  </li>`;
}

// fetchCountries('peru');
