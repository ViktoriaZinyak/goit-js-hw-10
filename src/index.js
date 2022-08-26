import './css/styles.css';
import debounce from 'lodash.debounce';
import apiCountries from './js/fetchCountries';

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const inputE = e.target.value;

  apiCountries(inputE)
    .then(data => listTemplate(data))
    .then(data => appendCountriesMarkup(data));

  // .then(appendCountriesMarkup);
  //
}

function appendCountriesMarkup(data) {
  list.innerHTML = data;
}

function listTemplate(data) {
  return data
    .map(
      obj => `<li>
        <img width="30" height="20" src=${obj.flag}></img>
      <p>${obj.name}</p>
     </li>`
    )
    .join('');
}
// function onSearch(e) {
//   const result = fetchCountries(e.target.value);
//   result.then(response =>
//     // console.log(response));
//     response
//       .map(
//         el =>
//           (list.innerHTML = `<li>
//        <img width="30" height="20" src=${el.flag}></img>
//         <p>${el.name}</p>
//       </li>`)
//       )
//       .join('')
//   );
// }

// function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`
//   ).then(response => response.json());
// }

// function renderTamplate(array) {
//   return array.forEach(
//     obj => `<li>
//        <img width="30" height="20" src=${obj.flag}></img>
//         <p>${obj.name}</p>
//       </li>`
//   );
// }

// array.then(response => response.map(el => console.log(el.name))); // response.map(el =>
//   console.log(
//     `<li>
//   <img width="30" height="20" src=${el.flag}></img>
//      <p>${el.name}</p>
//      </li>`
//   )
// )
// }
//
// // fetchCountries('peru');
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);
