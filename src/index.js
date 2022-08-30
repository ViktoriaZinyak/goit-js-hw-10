import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import apiCountries from './js/fetchCountries';

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const inputValue = e.target.value.trim();
  if (inputValue == '') {
    list.innerHTML = '';
    return;
  }
  apiCountries(inputValue)
    .then(appendCountriesMarkup)
    .catch(() => Notiflix.Notify.failure('Qui timide rogat docet negare'));
}

function appendCountriesMarkup(country) {
  if (country.length > 10) {
    Notiflix.Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (country.length == 1) {
    list.innerHTML = '';
    const language = country[0].languages.map(lang => lang.name).join(', ');
    const templateCountry = `<div class="name-wrap"><img width="50" src=${country[0].flag}></img>
        <p>${country[0].name}</p></div>
        <div class="country-data">
      <p class="country-data"> <span>Capital:</span> ${country[0].capital}</p>
      <p class="country-data"> <span>Population:</span> ${country[0].population}</p>
      <p class="country-data"> <span>Languages:</span> ${language}
      </p>
    </div>`;
    countryInfo.innerHTML = templateCountry;
  } else {
    countryInfo.innerHTML = '';
    const itemTemplate = country
      .map(
        obj => `<li>
        <img width="30" src=${obj.flag}></img>
      <p>${obj.name}</p>
     </li>`
      )
      .join('');
    list.innerHTML = itemTemplate;
  }
}
